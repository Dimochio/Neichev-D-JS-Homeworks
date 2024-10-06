import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchHotelsRequest,
  fetchHotelsSuccess,
  fetchHotelsFailure,
} from "./Slices/hotelsSlice";

function* fetchHotelsSaga(action) {
  try {
    const response = yield call(axios.get, "http://localhost:3000/hotels", {
      params: action.payload,
    });
    yield put(fetchHotelsSuccess(response.data));
  } catch (error) {
    yield put(fetchHotelsFailure(error.message));
  }
}

export function* watchFetchHotels() {
  yield takeLatest(fetchHotelsRequest.type, fetchHotelsSaga);
}
