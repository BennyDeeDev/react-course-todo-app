import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Reducer/todoSlice";

export const store = configureStore({
  reducer: { todo: todoSlice },
});
