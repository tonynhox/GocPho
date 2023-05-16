import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// export const getBillByUser = createAsyncThunk(
//   'user/getBillByUser',
//   async (userId, thunkAPI) => {
//     try {
//       const response = await fetch('https://sever-gocpho.herokuapp.com/user/get-bill-by-user', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ user: userId })
//       });
//       const data = await response.json();
//       console.log("ORDERD: ", data.bill)
//       return data.bill;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({ error: error.message });
//     }
//   }
// );
export const fetchBillById = createAsyncThunk(
  'bill/fetchBillById',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://sever-gocpho.herokuapp.com/bill/get-bill-by-user/${_id}`,
      );
      console.log('RESPONSE: ', response.data);
      return response.data;
    } catch (error) {
      // You can handle errors or dispatch additional actions if needed
      console.log('ERROR: ', error);
      throw error;
    }
  },
);

const orderSlice = createSlice({
  name: 'ordered',
  initialState: {
    data: {},
    status: 'idle',
    error: null,
    currentBillId: '',
  },

  reducers: {
    changeCurrentBillId: (state, action) => {
      state.currentBillId = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBillById.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchBillById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        console.log('ORDER::::', state.data);
      })
      .addCase(fetchBillById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
export const {changeCurrentBillId} = orderSlice.actions;
export default orderSlice.reducer;
