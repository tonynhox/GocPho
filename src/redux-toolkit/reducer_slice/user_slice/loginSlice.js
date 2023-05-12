import {createSlice} from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userInfo: {
      result: true,
      user: {
        _id: '645d0ce805ab96b8ffd67cb5',
        email: 'hoatrinh11@gmail.com',
        password: null,
        phonenumber: null,
        country: null,
        username: null,
        default: [],
        fullname: null,
        birthday: null,
        status: 0,
        addresses: [],
        favorites: [],
        carts: [],
        bills: [
          {
            _id: '645d1569530913651b6ae2c6',
            user: 'aaaa',
            detail: [
              {
                name: 'banh beo',
                image: 'banhbao.js',
                price: 22,
                quantity: 10,
                _id: '645d1569530913651b6ae2c7',
              },
            ],
            address: 'abc',
            payment: 'xyz',
            status: [
              {
                number: 1,
                name: 'Đang chờ xử lý',
                date: 'Thu May 11 2023 16:18:49 GMT+0000 (Coordinated Universal Time)',
                _id: '645d1569530913651b6ae2c8',
              },
            ],
            __v: 0,
          },
          {
            "_id": "645d1569530913651b6ae222c6",
            "user": "aaaa",
            "detail": [
                {
                    "name": "banh beo",
                    "image": "banhbao.js",
                    "price": 1,
                    "quantity": 10,
                    "_id": "645d1569530913651b6ae2c7"
                }
            ],
            "address": "abc",
            "payment": "xyz",
            "status": [
                {
                    "number": 1,
                    "name": "Đang chờ xử lý",
                    "date": "Thu May 11 2023 16:18:49 GMT+0000 (Coordinated Universal Time)",
                    "_id": "645d1569530913651b6ae2c8"
                }
            ],
            "__v": 0
        }
        ],
        __v: 0,
      },
    },
    isLoggedIn: true,
  },

  // {"idToken": null, "scopes": ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"], "serverAuthCode": null, "user": {"email": "trongtruth2003@gmail.com", "familyName": "Nguyễn", "givenName": "Minh Trọng", "id": "107213005690815853652", "name": "Minh Trọng Nguyễn", "photo": "https://lh3.googleusercontent.com/a/AGNmyxZ6ixM_sBrkhVRdareAUvnT0HxGn14vFUH_nZhGnQ"}
  reducers: {
    changeStatusLogin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    getUserInformationFromGoogle: (state, action) => {
      state.userInfo = action.payload;
      console.log('User slice: ', state.userInfo);
    },
  },
});

export const {changeStatusLogin} = loginSlice.actions;
export const {getUserInformationFromGoogle} = loginSlice.actions;
export default loginSlice.reducer;
