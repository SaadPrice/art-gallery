// features/artSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArtData = createAsyncThunk('art/fetchArtData', async (artId) => {
  const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`);
  const data = await response.json();
  return data;
});

const artSlice = createSlice({
  name: 'art',
  initialState: {
    artId: 12720,
    data: {},
    status: 'idle',
  },
  reducers: {
    setArtId: (state, action) => {
      state.artId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArtData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchArtData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setArtId } = artSlice.actions;

export default artSlice.reducer;
