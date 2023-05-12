import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import AxiosInstance from '../../../components/app/axiosClient/AxiosInstance';

export const fetchProductById = createAsyncThunk('fetchProductById', async (id) => {
  const response = await AxiosInstance().get(
    '/product/get-product-by-id/'+id,
  );
  return response.product;
});


export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        search : '',
        category: '',
        product:{},
    },
    reducers:{
        searchFilterChange: (state, action) =>{
            state.search = action.payload;
        },
        categoryFilterChange: (state, action) =>{
            console.log(action.payload)
            state.category = action.payload;
        },searchProductbyId: (state, action) =>{
            console.log(action.payload)
            state.category = action.payload;
        }
    },extraReducers: builder => {
        builder.addCase(fetchProductById.pending, state => {
          console.log('fail fetchProductById')
        }),
          builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.product = action.payload;
            console.log(state);
            state.error = null;
          })
      },
})
export const {categoryFilterChange} = filterSlice.actions;
export const {searchFilterChange} = filterSlice.actions;
export default filterSlice.reducer