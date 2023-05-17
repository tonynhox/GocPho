import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBillById = createAsyncThunk(
  'bill/fetchBillById',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://sever-gocpho.herokuapp.com/bill/get-bill-by-user/${_id}`,
      );
      // console.log('RESPONSE: ', response.data);
      return response.data;
    } catch (error) {
      // You can handle errors or dispatch additional actions if needed
      console.log('ERROR: ', error);
      throw error;
    }
  },
);

export const fetchStatusBill = createAsyncThunk(
  'bill/updateStatus',
  async ( {idReceived, currentStatus, message} ) => {
    console.log("ID NUMBER MESSAGE: ", idReceived, " - ", currentStatus, " - ", message)
    
    const url = `https://sever-gocpho.herokuapp.com/bill/update-status/${idReceived}`;
    const body = {
      number: currentStatus,
      name: message,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log("ERROR: ", response)
      throw new Error('Failed to update bill status');
    }
    const data = await response.json();
    console.log("RESPONSE: ", data)
    return data;
  }
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
        // console.log('ORDER::::', state.data);
      })
      .addCase(fetchBillById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchStatusBill.pending, (state, action)=>{
        state.status = 'loading'
      })
      .addCase(fetchStatusBill.fulfilled, (state, action) =>{
        // state.data.bill = action.payload
      })
      .addCase(fetchStatusBill.rejected, (state, action)=>{
        state.status = 'failed'
        state.error = action.payload;
      })
  },
});
export const {changeCurrentBillId} = orderSlice.actions;
export default orderSlice.reducer;
