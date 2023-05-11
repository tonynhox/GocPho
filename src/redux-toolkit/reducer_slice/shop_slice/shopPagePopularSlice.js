import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('fetchData', async () => {
  const response = await axios.get(
    'https://641a6f92c152063412d96c73.mockapi.io/categories',
  );
  return response.data;
});