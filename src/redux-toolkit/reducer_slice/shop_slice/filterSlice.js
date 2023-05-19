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
        searchCategory:'',
        product:{"__v": 1, "_id": "645d078805ab96b8ffd67c02", "category": "645d3caa52c26470de5cd712", "detail": "", "images": [{"_id": "", "name": ""}], "name": "", "price": '', "quantity": ''},
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
            state.product = action.payload;
        },searchCategoryChange: (state, action) =>{
          console.log('search cate: ',action.payload)
          state.searchCategory = action.payload;
      }
    },extraReducers: builder => {
        builder.addCase(fetchProductById.pending, state => {
        }),
          builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.product = action.payload;
            state.error = null;
          })
      },
})
export const {categoryFilterChange} = filterSlice.actions;
export const {searchFilterChange} = filterSlice.actions;
export const {searchProductbyId} = filterSlice.actions;
export const {searchCategoryChange} = filterSlice.actions;
export default filterSlice.reducer