import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  searchQuery: "",
};

const todoPath = "http://localhost:3000/todos";

export const postTodo = createAsyncThunk(
  "todo/saveTodo",
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
      dispatch(addTodoList(response.data));
    } catch (error) {
      console.log(error);
    }
  }
);

export const getTodo = createAsyncThunk(
  "todo/getTodo",
  async (id, { dispatch }) => {
    try {
      const response = await axios.get(`${todoPath}/${id}`);
      dispatch(changeTodo(response.data));
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

export const putToggleTodo = createAsyncThunk(
  "todo/putToggleTodo",
  async (todo, { dispatch }) => {
    const { id } = todo;
    try {
      const response = await axios.put(`${todoPath}/${id}`, todo);
      dispatch(changeToggleTodo(response.data));
    } catch (error) {
      console.log(error);
    }
  }
);

export const putTitleTodo = createAsyncThunk(
  "todo/putTitleTodo",
  async (todo, { dispatch }) => {
    const { id } = todo;
    try {
      const response = await axios.put(`${todoPath}/${id}`, todo);
      dispatch(changeTitleTodo(response.data));
    } catch (error) {
      console.log(error);
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoList: (state, action) => {
      state.list = action.payload;
    },
    addTodo: (state, action) => {
      console.log(current(state));
      state.list.push(action.payload);
    },
    changeTodo: (state, action) => {
      const todoIndex = state.list.findIndex((t) => t.id === action.payload.id);
      state.list[todoIndex] = action.payload;
    },
    removeTodo: (state, action) => {
      const todoIndex = state.list.findIndex(({ id }) => id === action.payload);
      state.list.splice(todoIndex, 1);
      /* return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.payload),
      }; */
    },
    changeToggleTodo: (state, action) => {
      const todo = state.list.find(({ id }) => id === action.payload.id);

      state.list[state.list.indexOf(todo)] = action.payload;
    },
    changeTitleTodo: (state, action) => {
      const todo = state.list.find(({ id }) => id === action.payload.id);

      state.list[state.list.indexOf(todo)] = {
        ...todo,
        title: action.payload.title,
      };
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: {},
});

export const {
  addTodo,
  removeTodo,
  changeToggleTodo,
  changeTitleTodo,
  setSearchQuery,
  addTodoList,
  changeTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
