import {combineReducers} from '@reduxjs/toolkit';
import filterReducer from './reducer_slice/shop_slice/filterSlice';
import itemReducer from './reducer_slice/shop_slice/itemSlice';
import buyItemReducer from './reducer_slice/cart_slice/buyItemSlice'
import loginReducer from './reducer_slice/user_slice/loginSlice';

const rootReducer = combineReducers({
  filter: filterReducer,
  item: itemReducer,
  buyItem: buyItemReducer,
  
});

export default rootReducer;
