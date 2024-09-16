import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCharacters } from "../../api/swapi";

export const getCharacters = createAsyncThunk("people/getPeople", async () => {
  const response = await fetchCharacters();
  return response.data.results;
});

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.characters = action.payload;
        state.loading = false;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default charactersSlice.reducer;
