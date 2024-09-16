import { configureStore } from "@reduxjs/toolkit";
import planetsReducer from "./redux/Slices/planetSlice";
import charactersReducer from "./redux/Slices/characterSlice";
import starShipsReducer from "./redux/Slices/starShipSlice";

const store = configureStore({
  reducer: {
    planets: planetsReducer,
    characters: charactersReducer,
    starShips: starShipsReducer,
  },
});

export default store;
