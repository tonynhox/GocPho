import {createSlice} from '@reduxjs/toolkit';

export const buyItemSlice = createSlice({
  name: 'buyItem',
  initialState: {
    buyList: [
      {
        id: 2,
        image: require('../../../media/images/AppleCart.png'),
        nameFruit: 'Test Redux-Toolkit',
        cost: '6.98$',
        quantity: 1,
      },
      {
        id: 3,
        image: require('../../../media/images/AppleCart.png'),
        nameFruit: 'Test hohoh',
        cost: '65.1992$',
        quantity: 13,
      },
      {
        id: 4,
        image: require('../../../media/images/AppleCart.png'),
        nameFruit: 'Test hohoh',
        cost: '65.12$',
        quantity: 13,
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    upItem: (state, action) => {
      state.buyList.map(item => {
        if (item.id == action.payload.id) {
          console.log("Item: ", {...item})
          return {...item, quantity: item.quantity + 1};
        } else {
          return item;
        }
      });
    },
  },
});

export const {upItem} = buyItemSlice.actions;
export const {addItem} = buyItemSlice.actions;
export default buyItemSlice.reducer;
