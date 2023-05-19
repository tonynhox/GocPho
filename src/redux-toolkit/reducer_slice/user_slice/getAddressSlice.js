import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGetAddress = createAsyncThunk(
  'user/getAddress',
  async _id => {
    console.log('ID NUMBER MESSAGE: ', _id);

    const url = `https://sever-gocpho.herokuapp.com/user/get-profile`;
    const body = {
      _id: _id,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log('ERROR: ', response);
      throw new Error('Failed to update bill status');
    }
    const data = await response.json();
    return data.user.addresses;
  },
);
export const fetchRemoveAddress = createAsyncThunk(
  'user/removeAddress',
  async ({_id, idAddress}) => {
    console.log('ID NUMBER MESSAGE: ', _id);

    const url = `https://sever-gocpho.herokuapp.com/user/delete-address`;
    const body = {
      _id: _id,
      idAddress: idAddress
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log('ERROR: ', response);
      throw new Error('Failed to update bill status');
    }
    const data = await response.json();
    return data.address.addresses;
  },
);
export const fetchChangeAddress = createAsyncThunk(
  'user/changeAddress',
  async ({_id, idAddress, newAddress}) => {
    console.log('ID NUMBER MESSAGE: ', _id, idAddress, newAddress);

    const url = `https://sever-gocpho.herokuapp.com/user/edit-address`;
    const body = {
      _id: _id,
      idAddress: idAddress,
      newAddress: newAddress
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log('ERROR: ', response);
      throw new Error('Failed to update bill status');
    }
    const data = await response.json();
    return data.address;
  },
);

export const fetchNewAddress = createAsyncThunk(
  'user/newAddress',
  async ({_id, address}) => {
    console.log('ID Address ', _id, " - ", address);

    const url = `https://sever-gocpho.herokuapp.com/user/add-address`;
    const body = {
      _id: _id,
      address: address,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log('ERROR: ', response);
      throw new Error('Failed to add new address');
    }
    const data = await response.json();
    return data.address;
  },
);
export const fetchChangeStatusAddress = createAsyncThunk(
  'user/changeStatusAddress',
  async ({_id, idAddress}) => {

    const url = `https://sever-gocpho.herokuapp.com/user/set-status-address`;
    const body = {
      _id: _id,
      idAddress: idAddress,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log('ERROR: ', response);
      throw new Error('Failed to add new address');
    }
    const data = await response.json();
    return data.addresses;
  },
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
      .addCase(fetchNewAddress.pending, state => {
        state.status = 'loading';
        console.log("LOADING>>>>")
      })
      .addCase(fetchNewAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload
        console.log('NEW ADDRESS::::', action.payload);
      })
      .addCase(fetchNewAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.log("FAIL<<<", action.error.message)
      })
      .addCase(fetchRemoveAddress.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchRemoveAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload
      })
      .addCase(fetchRemoveAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.log("FAIL<<<", action.error.message)
      })
      .addCase(fetchChangeAddress.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchChangeAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const addressIndex = state.data.findIndex(address => address._id == action.payload._id)
        if(addressIndex != -1){
          state.data[addressIndex] = action.payload
        }
      })
      .addCase(fetchChangeAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.log("FAIL<<<", action.error.message)
      })
      .addCase(fetchChangeStatusAddress.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchChangeStatusAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload
      })
      .addCase(fetchChangeStatusAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.log("FAIL<<<", action.error.message)
      });
  }
});
// export const {changeCurrentBillId} = orderSlice.actions;
export default getAddressSlice.reducer;
