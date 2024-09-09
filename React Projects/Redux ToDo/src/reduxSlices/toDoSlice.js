import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    add: (state, action) => {
      const newToDo = {
        id: Date.now(),
        text: action.payload,
        isDone: false,
      };

      state.todos.push(newToDo);
    },

    remove: (state, action) => {
      state.todos = state.todos.filter((_) => _.id !== action.payload);
    },

    toggleIsDone: (state, action) => {
      state.todos.map((_) => {
        if (_.id == action.payload) {
          _.isDone = !_.isDone;
          return;
        }
      });
    },
  },
});

// логіка з базою та Redux-Saga в процессі...

const { actions, reducer } = todoSlice;

export const { add, remove, toggleIsDone } = actions;

export default reducer;
