import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reduxSlices/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
