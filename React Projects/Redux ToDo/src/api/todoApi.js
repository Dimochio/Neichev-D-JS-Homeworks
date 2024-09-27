import { ref, set, remove, get, child, update } from "firebase/database";
import { db } from "./firebase";

export const fetchTodos = () => {
  const dbRef = ref(db);
  return get(child(dbRef, "todos"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.keys(snapshot.val() || {}).map((id) => ({
          id,
          ...snapshot.val()[id],
        }));
      }
      return [];
    })
    .catch((error) => console.error(error));
};

export const addTodo = (todo) => {
  const newTodoRef = ref(db, `todos/${todo.id}`);
  set(newTodoRef, todo);
  return todo;
};

export const deleteTodo = (id) => {
  const todoRef = ref(db, `todos/${id}`);
  return remove(todoRef);
};

export const updateTodo = (id, updatedTodo) => {
  const todoRef = ref(db, `todos/${id}`);
  return update(todoRef, updatedTodo);
};
