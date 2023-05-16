import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://sever-gocpho.herokuapp.com/user/get-profile', {
        _id: userId,
      });
      console.log('huy',response.data.user.carts)
      return response.data.user.carts;
    } catch (err) {
      // Handle errors gracefully by rejecting with a custom error message
      return rejectWithValue(err.message);
    }
  }
);

const getCartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    incrementItemQuantity(state, action) {
      const itemIndex = state.data.findIndex(
        item => item._id == action.payload,
      );
      if (itemIndex != -1) {
        state.data[itemIndex].quantity++;
      }
    },

    cloneIncrementItemQuantity(state, action) {
      let arr = state.buyList.map(item => {
        if (item.id == action.payload.id) {
          return {...item, quantity: item.quantity + 1};
        }
        return item;
      });
      state.buyList = arr;
      console.log('>>>>>>>>>>>>>', state);
    },

    decrementItemQuantity(state, action) {
      const itemIndex = state.data.findIndex(
        item => item._id === action.payload,
      );
      if (itemIndex !== -1) {
        if (state.data[itemIndex].quantity != 1) {
          state.data[itemIndex].quantity--;
        } else {
          state.data[itemIndex].quantity;
        }
      }
    },
    sortListByTotalCost(state, action) {
      state.data = state.data.sort((a, b) => {
        return (
          parseFloat(a.price * a.quantity) - parseFloat(b.price * b.quantity)
        );
      });
    },
    sortListByName(state, action) {
      state.data = state.data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    },
    sortListByQuantity(state, action) {
      state.data = state.data.sort((a, b) => {
        return a.quantity - b.quantity;
      });
    },
    removeItemById(state, action) {
      const itemIndex = state.data.findIndex(item => {
        return item.id == action.payload;
      });

      state.data.splice(itemIndex, 1);
      console.log('REMOVED OBJECT NUMBER: ', itemIndex);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        console.log("CART::::", state.data)
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const {removeItemById} = getCartSlice.actions;
export const {cloneIncrementItemQuantity} = getCartSlice.actions;
export const {sortListByQuantity} = getCartSlice.actions;
export const {sortListByName} = getCartSlice.actions;
export const {sortListByTotalCost} = getCartSlice.actions;
export const {decrementItemQuantity} = getCartSlice.actions;
export const {incrementItemQuantity} = getCartSlice.actions;
export const {addItem} = getCartSlice.actions;
export default getCartSlice.reducer;
