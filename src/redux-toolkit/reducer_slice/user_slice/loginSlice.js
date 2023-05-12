import { createSlice } from '@reduxjs/toolkit';
import AxiosInstance from '../../../components/app/axiosClient/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';



// export const fetchRegisterGoogle = createAsyncThunk('fetchRegisterGoogle', async (email, password, confirmPass, name) => {
//   const body = {
//     email: email,
//     password: password,
//     confirm_password: confirmPass,
//     name: name
//   }
//   const response = await AxiosInstance().post('/user/register-email', body);
//   return response;
// });


// export const fetchLoginGoogle = createAsyncThunk('fetchLoginGoogle', async (email, password, confirmPass, name) => {
//   const body = {
//     email: email,
//     password: password
//   }
//   const response = await AxiosInstance().post('/user/login-email', body);
//   // doc token
//   const { token } = response;
//   // luu token vao bo nho
//   await AsyncStorage.setItem('token', token);
//   setUser(response.user.email);
//   console.log('login response', response.user.email);
//   return response;
// });


export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userInfo: {
      idToken: null,
      scopes: [],
      serverAuthCode: null,
      user: {
        email: '',
        familyName: '',
        givenName: '',
        id: '',
        name: '',
        photo: ''
      },
    },
    isLoggedIn: false
  },

  // {"idToken": null, "scopes": ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"], "serverAuthCode": null, "user": {"email": "trongtruth2003@gmail.com", "familyName": "Nguyễn", "givenName": "Minh Trọng", "id": "107213005690815853652", "name": "Minh Trọng Nguyễn", "photo": "https://lh3.googleusercontent.com/a/AGNmyxZ6ixM_sBrkhVRdareAUvnT0HxGn14vFUH_nZhGnQ"}
  reducers: {
    changeStatusLogin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    getUserInformationFromGoogle: (state, action) => {
      state.userInfo = action.payload;
      console.log("User slice: ", state.userInfo)
    },
  // },
  // extraReducers: builder => {
  //   builder.addCase(fetchLogin.pending, state => {
  //     state.loading = true;
  //     state.error = null;
  //   }),
  //     builder.addCase(fetchLogin.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.data = action.payload;

  //       state.error = null;
  //     })
  },
});

export const { changeStatusLogin } = loginSlice.actions;
export const { getUserInformationFromGoogle } = loginSlice.actions;
export default loginSlice.reducer;
