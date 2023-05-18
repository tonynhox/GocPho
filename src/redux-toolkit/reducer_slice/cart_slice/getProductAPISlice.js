import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('fetchData', async () => {
  const response = await axios.get(
    'https://sever-gocpho.herokuapp.com/product/get-all-products',
  );
  return response.data;
});

export const getProductAPISlice = createSlice({
  name: 'dataAPI',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.data.push(action.payload);
    },

    incrementItemQuantity(state, action) {
      const itemIndex = state.data.findIndex(
        item => item.id == action.payload.id,
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
    },

    decrementItemQuantity(state, action) {
      const itemIndex = state.data.findIndex(
        item => item.id === action.payload.id,
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
          parseFloat(a.cost * a.quantity) - parseFloat(b.cost * b.quantity)
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
  extraReducers: builder => {
    builder.addCase(fetchData.pending, state => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.products;
        // console.log('------------------',action.payload.products)

        state.error = null;
      }),
      builder.addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

// export const {removeItemById} = getProductAPISlice.actions;
// export const {cloneIncrementItemQuantity} = getProductAPISlice.actions;
// export const {sortListByQuantity} = getProductAPISlice.actions;
// export const {sortListByName} = getProductAPISlice.actions;
// export const {sortListByTotalCost} = getProductAPISlice.actions;
// export const {decrementItemQuantity} = getProductAPISlice.actions;
// export const {incrementItemQuantity} = getProductAPISlice.actions;
// export const {addItem} = getProductAPISlice.actions;
export default getProductAPISlice.reducer;
