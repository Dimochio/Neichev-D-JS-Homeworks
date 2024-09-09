import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reduxSlices/toDoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
