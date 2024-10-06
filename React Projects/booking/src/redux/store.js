import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import hotelsReducer from "./Slices/hotelsSlice";
import { watchFetchHotels } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchHotels);

export default store;
