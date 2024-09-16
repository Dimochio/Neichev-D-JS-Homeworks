import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPlanets } from "../../api/swapi";

export const getPlanets = createAsyncThunk("planets/getPlanets", async () => {
  const response = await fetchPlanets();
  return response.data.results;
});

const planetsSlice = createSlice({
  name: "planets",
  initialState: {
    planets: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlanets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPlanets.fulfilled, (state, action) => {
        state.planets = action.payload;
        state.loading = false;
      })
      .addCase(getPlanets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default planetsSlice.reducer;
