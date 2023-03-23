import {configureStore} from '@reduxjs/toolkit';
import filterSlice from './reducer_slice/shop_slice/filterSlice';
import itemSlice from './reducer_slice/shop_slice/itemSlice';
import buyItemSlice from './reducer_slice/cart_slice/buyItemSlice';
import loginSlice from './reducer_slice/user_slice/loginSlice';
import getProductAPISlice from './reducer_slice/cart_slice/getProductAPISlice';
import shopPageCategorySlice from './reducer_slice/shop_slice/shopPageCategorySlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    item: itemSlice,
    buyItem: buyItemSlice,
    login: loginSlice,
    dataAPI: getProductAPISlice,
    dataCategoryMainShop: shopPageCategorySlice
  },
});
