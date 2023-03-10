import {configureStore} from '@reduxjs/toolkit';
import filterSlice from './reducer_slice/shop_slice/filterSlice';
import itemSlice from './reducer_slice/shop_slice/itemSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    item: itemSlice,
  },
});
