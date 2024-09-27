import { call, put, takeEvery } from "redux-saga/effects";
import {
  loadSuccess,
  addSuccess,
  removeSuccess,
  updateSuccess,
} from "./reduxSlices/toDoSlice";
import { fetchTodos, addTodo, deleteTodo, updateTodo } from "../api/todoApi";

export function* fetchTodosSaga() {
  try {
    const todos = yield call(fetchTodos);
    yield put(loadSuccess(todos));
  } catch (error) {
    console.error(error);
  }
}

export function* addTodoSaga(action) {
  try {
    const newTodo = yield call(addTodo, action.payload);
    yield put(addSuccess(newTodo));
  } catch (error) {
    console.error(error);
  }
}

export function* removeTodoSaga(action) {
  try {
    yield call(deleteTodo, action.payload);
    yield put(removeSuccess(action.payload));
  } catch (error) {
    console.error(error);
  }
}

export function* updateTodoSaga(action) {
  try {
    yield call(updateTodo, action.payload.id, action.payload.todo);
    yield put(updateSuccess(action.payload));
  } catch (error) {
    console.error(error);
  }
}

export function* watchTodoSagas() {
  yield takeEvery("todo/loadRequest", fetchTodosSaga);
  yield takeEvery("todo/addRequest", addTodoSaga);
  yield takeEvery("todo/removeRequest", removeTodoSaga);
  yield takeEvery("todo/updateRequest", updateTodoSaga);
}
