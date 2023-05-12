import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import AxiosInstance from '../../../components/app/axiosClient/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';



export const fetchGoogle = createAsyncThunk('LoginGoogle', async (email) => {
  const body = {
    email: email,
  }
  const response = await AxiosInstance().post('/user/login-email', body);
  return response;
});


export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userInfo: {
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
  },
  extraReducers: builder => {
    builder.addCase(fetchGoogle.pending, state => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(fetchGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
  },
});

export const { changeStatusLogin } = loginSlice.actions;
export const { getUserInformationFromGoogle } = loginSlice.actions;
export default loginSlice.reducer;
