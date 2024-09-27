import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    loadRequest: (state) => {},
    loadSuccess: (state, action) => {
      state.todos = action.payload;
    },
    addRequest: (state, action) => {},
    addSuccess: (state, action) => {
      state.todos.push(action.payload);
    },
    removeRequest: (state, action) => {},
    removeSuccess: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleIsDone: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    updateRequest: (state, action) => {},
    updateSuccess: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index] = action.payload.todo;
    },
  },
});

export const {
  loadRequest,
  loadSuccess,
  addRequest,
  addSuccess,
  removeRequest,
  removeSuccess,
  toggleIsDone,
  updateRequest,
  updateSuccess,
} = todoSlice.actions;

export default todoSlice.reducer;
