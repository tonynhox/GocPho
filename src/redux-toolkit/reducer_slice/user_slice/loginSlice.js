import {createSlice} from '@reduxjs/toolkit';

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
        photo:''
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
  },
});

export const {changeStatusLogin} = loginSlice.actions;
export const {getUserInformationFromGoogle} = loginSlice.actions;
export default loginSlice.reducer;
