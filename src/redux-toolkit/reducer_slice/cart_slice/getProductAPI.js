import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('fetchData', async () => {
  const response = await axios.get(
    'https://641a6f92c152063412d96c73.mockapi.io/products',
  );
  return response.data;
});

export const getProductAPI = createSlice({
  name: 'dataAPI',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(fetchData.pending, state =>{
        state.loading = true;
        state.error = null;
    }),
    builder.addCase(fetchData.fulfilled, (state, action) =>{
        state.loading = false;
        state.data = action.payload;
        state.error = null;
    }),
    builder.addCase(fetchData.rejected, (state, action) =>{
        state.error = action.error.message;
    })
  }
});

// export const {[fetchData.pending]} = getProductAPI.actions;
export default getProductAPI.reducer;
