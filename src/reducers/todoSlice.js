import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuid } from "uuid";

const initialState = {
  list: [{ id: uuid(), title: "test todo", done: false }],
  searchQuery: "",
};

export const saveTodo = createAsyncThunk("todo/saveTodo", async (todo) => {
  try {
    const response = await axios.post("http://localhost:3000/todos", todo);
    addTodo(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(current(state));
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const todoIndex = state.list.findIndex(({ id }) => id === action.payload);
      state.list.splice(todoIndex, 1);
      /* return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.payload),
      }; */
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find(({ id }) => id === action.payload);

      state.list[state.list.indexOf(todo)] = { ...todo, done: !todo.done };
    },
    changeTodoTitle: (state, action) => {
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
  deleteTodo,
  toggleTodo,
  changeTodoTitle,
  setSearchQuery,
} = todoSlice.actions;

export default todoSlice.reducer;
