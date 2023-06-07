import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBillById = createAsyncThunk(
  'bill/fetchBillById',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://161.35.101.229:3002/bill/get-bill-by-user/${_id}`,
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
    //idbill,status,
    console.log("ID NUMBER MESSAGE: ", idReceived, " - ", currentStatus, " - ", message)
    
    const url = `http://161.35.101.229:3002/bill/update-status/${idReceived}`;
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
    return data.bill;
  }
);

export const fetchAllBills = createAsyncThunk('bill/fetchAll', async () => {
  try {
    const response = await fetch('http://161.35.101.229:3002/bill/get-all');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("DATA BILL: ", data)
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
});

const orderSlice = createSlice({
  name: 'ordered',
  initialState: {
    data: {},
    status: 'idle',
    error: null,
    currentBillId: '',
  },

  reducers: {
    //id bill
    changeCurrentBillId: (state, action) => {
      state.currentBillId = action.payload;
      console.log("PAYLOAD ID: ", action.payload)
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
        if(state.data.bill.length > 0){
          const lastElement = state.data.bill[state.data.bill.length - 1];
          state.currentBillId = lastElement._id
        }
      })
      .addCase(fetchBillById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchStatusBill.pending, (state, action)=>{
        state.status = 'loading'
      })
      .addCase(fetchStatusBill.fulfilled, (state, action) =>{
        const index = state.data.bill.findIndex(item => item._id == action.payload._id)
        console.log("INDEX: ", index, action.payload)
        
        
        state.data.bill[index] = action.payload
      })
      .addCase(fetchStatusBill.rejected, (state, action)=>{
        state.status = 'failed'
        state.error = action.payload;
      })
      .addCase(fetchAllBills.pending, (state, action)=>{
        state.status = 'loading'
      })
      .addCase(fetchAllBills.fulfilled, (state, action) =>{
        state.data = action.payload
        console.log("ADMIN: ", state.data)
        if(state.data.bill.length > 0){
          const lastElement = state.data.bill[state.data.bill.length - 1];
          state.currentBillId = lastElement._id
        }
        state.status = 'succeeded';
      })
      .addCase(fetchAllBills.rejected, (state, action)=>{
        state.status = 'failed'
        state.error = action.payload;
      })
  },
});
export const {changeCurrentBillId} = orderSlice.actions;
export default orderSlice.reducer;
