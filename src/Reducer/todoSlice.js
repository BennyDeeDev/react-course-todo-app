import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  list: [{ id: uuid(), title: "test todo", done: false }],
  searchQuery: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(current(state));
      state.list.push(action.payload);
      /* return { ...state, list: [...state.list, action.payload] }; */
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((t) => t.id === action.payload);
      const todoIndex = state.list.indexOf(todo);
      state.list[todoIndex] = { ...todo, done: !todo.done };
    },
    deleteTodo: (state, action) => {
      const todoIndex = state.list.findIndex((t) => t.id === action.payload);
      state.list.splice(todoIndex, 1);
    },
    changeTodoTitle: (state, action) => {
      const todo = state.list.find((t) => t.id === action.payload.id);
      const todoIndex = state.list.indexOf(todo);

      state.list[todoIndex] = {
        ...todo,
        title: action.payload.title,
      };
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  changeTodoTitle,
  setSearchQuery,
} = todoSlice.actions;

export default todoSlice.reducer;
