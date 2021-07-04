import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuid } from "uuid";

const initialState = {
  list: [{ id: uuid(), title: "test todo", done: false }],
  searchQuery: "",
};

const todoPath = "http://localhost:3004/todos";

export const postTodo = createAsyncThunk(
  "todo/postTodo",
  async (todo, { dispatch }) => {
    try {
      const response = await axios.post(todoPath, todo);
      dispatch(addTodo(response.data));
    } catch (error) {
      console.log(error);
    }
  }
);

export const getTodoList = createAsyncThunk(
  "todo/getTodoList",
  async (options, { dispatch }) => {
    try {
      const response = await axios.get(todoPath);
      dispatch(setTodoList(response.data));
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (id, { dispatch }) => {
    try {
      await axios.delete(`${todoPath}/${id}`);
      dispatch(removeTodo(id));
    } catch (error) {
      console.log(error);
    }
  }
);

export const putTodo = createAsyncThunk(
  "todo/putTodo",
  async (todo, { dispatch }) => {
    const { id } = todo;
    try {
      const response = await axios.put(`${todoPath}/${id}`, todo);
      dispatch(changeTodo(response.data));
    } catch (error) {}
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(current(state));
      state.list.push(action.payload);
      /* return { ...state, list: [...state.list, action.payload] }; */
    },
    setTodoList: (state, action) => {
      state.list = action.payload;
    },
    removeTodo: (state, action) => {
      const todoIndex = state.list.findIndex((t) => t.id === action.payload);
      state.list.splice(todoIndex, 1);
    },
    changeTodo: (state, action) => {
      const todoIndex = state.list.findIndex((t) => t.id === action.payload.id);

      state.list[todoIndex] = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addTodo, removeTodo, setSearchQuery, setTodoList, changeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
