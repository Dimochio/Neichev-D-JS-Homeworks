import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TodoList from "./todo-list";
import { updateRequest, removeRequest } from "../redux/reduxSlices/toDoSlice";

const mockStore = configureStore([]);

describe("TodoList", () => {
  test("renders todo list and toggles task completion", () => {
    const todos = [{ id: 1, text: "Test Todo", isDone: false }];
    const store = mockStore({ todo: { todos } });
    store.dispatch = vi.fn();

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(screen.getByText("Test Todo")).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(store.dispatch).toHaveBeenCalledWith(
      updateRequest({
        id: 1,
        todo: {
          id: 1,
          text: "Test Todo",
          isDone: true,
        },
      })
    );
  });

  test("removes todo item when delete button is clicked", () => {
    const todos = [{ id: 1, text: "Test Todo", isDone: false }];
    const store = mockStore({ todo: { todos } });
    store.dispatch = vi.fn();

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const deleteButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(deleteButton);

    expect(store.dispatch).toHaveBeenCalledWith(removeRequest(1));
  });

  test("enables editing mode and saves edited task", () => {
    const todos = [{ id: 1, text: "Test Todo", isDone: false }];
    const store = mockStore({ todo: { todos } });
    store.dispatch = vi.fn();

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const editButton = screen.getByRole("button", { name: /edit task/i });
    fireEvent.click(editButton);

    const input = screen.getByDisplayValue("Test Todo");
    fireEvent.change(input, { target: { value: "Edited Todo" } });

    const saveButton = screen.getByRole("button", { name: /save task/i });
    fireEvent.click(saveButton);

    expect(store.dispatch).toHaveBeenCalledWith(
      updateRequest({
        id: 1,
        todo: {
          id: 1,
          text: "Edited Todo",
          isDone: false,
        },
      })
    );
  });
});
