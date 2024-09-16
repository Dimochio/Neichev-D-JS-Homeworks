import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStarShips } from "../../api/swapi";

export const getStarShips = createAsyncThunk(
  "starships/getStarShips",
  async () => {
    const response = await fetchStarShips();
    return response.data.results;
  }
);

const starShipsSlice = createSlice({
  name: "starShips",
  initialState: {
    starShips: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStarShips.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStarShips.fulfilled, (state, action) => {
        state.starShips = action.payload;
        state.loading = false;
      })
      .addCase(getStarShips.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default starShipsSlice.reducer;
