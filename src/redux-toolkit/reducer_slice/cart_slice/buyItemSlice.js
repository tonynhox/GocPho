import {createSlice} from '@reduxjs/toolkit';
import update from 'react-addons-update';

export const buyItemSlice = createSlice({
  name: 'buyItem',
  initialState: {
    buyList: [
      {
        id: 2,
        image: require('../../../media/images/AppleCart.png'),
        nameFruit: 'fest Redux-Toolkit',
        cost: '12',
        quantity: 1,
      },
      {
        id: 3,
        image: require('../../../media/images/AppleCart.png'),
        nameFruit: 'Test hohoh',
        cost: '9',
        quantity: 13,
      },
      {
        id: 4,
        image: require('../../../media/images/AppleCart.png'),
        nameFruit: 'Yeye',
        cost: '2',
        quantity: 11,
      },
      {
        id: 5,
        image: require('../../../media/images/AppleCart.png'),
        nameFruit: 'Trong dep trai',
        cost: '7',
        quantity: 4,
      },
      {
        id: 6,
        image: require('../../../media/images/AppleCart.png'),
        nameFruit: 'Huy Ngu Lon',
        cost: '1',
        quantity: 3,
      },
      {
        id: 7,
        image: require('../../../media/images/AppleCart.png'),
        nameFruit: 'Bong Bong Chua',
        cost: '3',
        quantity: 9,
      },
      {
        id: 8,
        image: require('../../../media/images/AppleCart.png'),
        nameFruit: 'Apple',
        cost: '20',
        quantity: 15,
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.buyList.push(action.payload);
    },

    incrementItemQuantity(state, action) {
      const itemIndex = state.buyList.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemIndex !== -1) {
        state.buyList[itemIndex].quantity++;
      }
    },

    cloneIncrementItemQuantity(state, action) {
        let arr = state.buyList.map(item => {
          if(item.id == action.payload.id){
            return {...item, quantity: item.quantity + 1}
          }
          return item;
        });
        state.buyList = arr;
        console.log('>>>>>>>>>>>>>', state);
    },
    decrementItemQuantity(state, action) {
      const itemIndex = state.buyList.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemIndex !== -1) {
        if (state.buyList[itemIndex].quantity != 0) {
          state.buyList[itemIndex].quantity--;
        } else {
          state.buyList[itemIndex].quantity;
        }
      }
    },
    sortListByTotalCost(state, action) {
      state.buyList = state.buyList.sort((a, b) => {
        return (
          parseFloat(a.cost * a.quantity) - parseFloat(b.cost * b.quantity)
        );
      });
    },
    sortListByName(state, action) {
      state.buyList = state.buyList.sort((a, b) => {
        return a.nameFruit.localeCompare(b.nameFruit);
      });
    },
    sortListByQuantity(state, action) {
        state.buyList = state.buyList.sort((a,b)=>{
          return(a.quantity - b.quantity)
        })
    }
  },
});

export const {cloneIncrementItemQuantity} = buyItemSlice.actions;
export const {sortListByQuantity} = buyItemSlice.actions;
export const {sortListByName} = buyItemSlice.actions;
export const {sortListByTotalCost} = buyItemSlice.actions;
export const {decrementItemQuantity} = buyItemSlice.actions;
export const {incrementItemQuantity} = buyItemSlice.actions;
export const {addItem} = buyItemSlice.actions;
export default buyItemSlice.reducer;
