import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./redux/reduxSlices/toDoSlice";
import { watchTodoSagas } from "./redux/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchTodoSagas);

export default store;
