import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('fetchData', async () => {
  const response = await axios.get(
    'http://161.35.101.229:3002/product/get-all-products',
  );
  return response.data;
});

export const getProductAPISlice = createSlice({
  name: 'dataAPI',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(fetchData.pending, state => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.products;
        // console.log('------------------',action.payload.products)

        state.error = null;
      }),
      builder.addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

// export const {removeItemById} = getProductAPISlice.actions;
// export const {cloneIncrementItemQuantity} = getProductAPISlice.actions;
// export const {sortListByQuantity} = getProductAPISlice.actions;
// export const {sortListByName} = getProductAPISlice.actions;
// export const {sortListByTotalCost} = getProductAPISlice.actions;
// export const {decrementItemQuantity} = getProductAPISlice.actions;
// export const {incrementItemQuantity} = getProductAPISlice.actions;
// export const {addItem} = getProductAPISlice.actions;
export default getProductAPISlice.reducer;
