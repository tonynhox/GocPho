import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AxiosInstance from '../../../components/app/axiosClient/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchFavourite = createAsyncThunk('fetchFavourite', async (result) => {
  const product= result.product;
  console.log('hello: ',product._id)
  
  const idProduct = product._id;
  const name = product.name;
  const price = product.price;
  const image = product.images[0].name;
  const body = {
    _id: result.id,
    idProduct: idProduct,
    name: name,
    price: price,
    image: image
  }
  const response = await AxiosInstance().post('/user/add-favorite', body);
  console.log('huyhuyuhuy',response.result);
  // if(response.result==0){
  //     return {idProduct,name,price,image}
  // }else if(response.result==1)
      return {idProduct,name,price,image}

});

export const loginGoogle = createAsyncThunk('LoginGoogle', async (result) => {
  const email = result.user.email;
  const photo = result.user.photo;
  const name = result.user.name;
  const body = {
    email: email,
    avatar: photo,
    fullname: name
  }
  const response = await AxiosInstance().post('/user/login-email  ', body);
  // console.log("RES: ", response)
  return response;
});

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userInfo: {},
    isLoggedIn: false,
  },

  // {"idToken": null, "scopes": ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"], "serverAuthCode": null, "user": {"email": "trongtruth2003@gmail.com", "familyName": "Nguyễn", "givenName": "Minh Trọng", "id": "107213005690815853652", "name": "Minh Trọng Nguyễn", "photo": "https://lh3.googleusercontent.com/a/AGNmyxZ6ixM_sBrkhVRdareAUvnT0HxGn14vFUH_nZhGnQ"}
  reducers: {
    changeStatusLogin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    getUserInformationFromGoogle: (state, action) => {
      state.userInfo = action.payload;
    },
    addfavourite: (state, action) => {
      state.userInfo.user.favorites.push(action.payload)
    },
  },
  extraReducers: builder => {
    builder.addCase(loginGoogle.pending, state => {
      console.log('fail loginGoogle')
    }),
      builder.addCase(loginGoogle.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      }),
      builder.addCase(fetchFavourite.fulfilled, (state, action) => {
        const itemIndex = state.userInfo.user.favorites.findIndex(item => item.idProduct === action.payload.idProduct)
        if (itemIndex !== -1) {
          // tồn tại xóa
          state.userInfo.user.favorites.splice(itemIndex, 1);
        } else {
          state.userInfo.user.favorites.push(action.payload);
        }
      })
  },
});

export const { changeStatusLogin } = loginSlice.actions;
export const { getUserInformationFromGoogle } = loginSlice.actions;
export const { addfavourite } = loginSlice.actions;
export default loginSlice.reducer;
