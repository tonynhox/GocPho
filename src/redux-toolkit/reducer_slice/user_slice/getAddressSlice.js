import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGetAddress = createAsyncThunk(
  'user/getAddress',
  async (_id ) => {
    console.log("ID NUMBER MESSAGE: ", _id)
    
    const url = `https://sever-gocpho.herokuapp.com/user/get-profile`;
    const body = {
      _id: _id
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
    console.log("RESPONSE: ", data.user.addresses)
    return data.user.addresses;
  }
);

const getAddressSlice = createSlice({
  name: 'address',
  initialState: {
    data: {},
    status: 'idle',
    error: null,
    currentAddress: '',
  },

  reducers: {
    changeCurrentBillId: (state, action) => {
      state.currentBillId = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetAddress.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchGetAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        // console.log('ORDER::::', state.data);
      })
      .addCase(fetchGetAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
  },
});
// export const {changeCurrentBillId} = orderSlice.actions;
export default getAddressSlice.reducer;
