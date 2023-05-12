import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategory = createAsyncThunk('fetchCategory', async () => {
  const response = await axios.get(
    'https://sever-gocpho.herokuapp.com/category/get-all-categories',
  );
  return response.data;
});

export const shopPageCategorySlice = createSlice({
  name: 'dataCategoryMainShop',
  initialState: {
    loading: false,
    error: null,
    data: [

    ],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategory.pending, state => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(fetchCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.result;
        state.error = null;
      }),
      builder.addCase(fetchCategory.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default shopPageCategorySlice.reducer;
