import {combineReducers} from '@reduxjs/toolkit';
import filterReducer from './reducer_slice/shop_slice/filterSlice';
import itemReducer from './reducer_slice/shop_slice/itemSlice';

const rootReducer = combineReducers({
  filter: filterReducer,
  item: itemReducer
});

export default rootReducer;
