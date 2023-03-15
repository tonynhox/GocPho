import {combineReducers} from '@reduxjs/toolkit';
import filterReducer from './reducer_slice/shop_slice/filterSlice';
import itemReducer from './reducer_slice/shop_slice/itemSlice';
import buyItemReducer from './reducer_slice/cart_slice/buyItemSlice'

const rootReducer = combineReducers({
  filter: filterReducer,
  item: itemReducer,
  buyItem: buyItemReducer
});

export default rootReducer;
