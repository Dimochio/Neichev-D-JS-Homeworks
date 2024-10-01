import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import TodoForm from "./todo-form";
import TodoList from "./todo-list";
import todoReducer from "../redux/reduxSlices/toDoSlice";
import { watchTodoSagas } from "../redux/saga";

const createTestStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: { todo: todoReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  });

  sagaMiddleware.run(watchTodoSagas);

  return store;
};

describe("TodoForm", () => {
  test("adds new task to the list after form submission", async () => {
    const store = createTestStore();

    render(
      <Provider store={store}>
        <TodoForm />
        <TodoList />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText(/Enter task/i), {
      target: { value: "New task" },
    });

    fireEvent.click(screen.getByText(/Add Task/i));

    const newTask = await screen.findByText(/New task/i);
    expect(newTask).toBeInTheDocument();
  });

  test("shows validation error when task is too short", async () => {
    const store = createTestStore();

    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText(/Enter task/i), {
      target: { value: "Test" },
    });

    fireEvent.click(screen.getByText(/Add Task/i));

    expect(
      await screen.findByText(/Task must be at least 5 characters long/i)
    ).toBeInTheDocument();
  });
});
