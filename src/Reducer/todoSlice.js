import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  list: [{ id: uuid(), title: "test todo", done: false }],
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
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
