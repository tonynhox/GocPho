import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../../components/app/axiosClient/AxiosInstance';

export const loginUsername = createAsyncThunk('LoginUsername', async ({ username, password }) => {
    try {
        console.log('User.............: ', username);
        console.log('Password........: ', password);
        const response = await AxiosInstance().post('/user/login-username', { username, password });
        console.log(response);
        return response.user;
    } catch (error) {
        console.log(error)
        throw new Error(error.response.data.message);
    }
});
export const loginUserSlice = createSlice({
    name: 'loginUser',
    initialState: {
        userInfo: {},
        isLoggedIn: false,
    },
    reducers: {
        changeStatusLoginUsername: (state, action) => {
            state.isLoggedIn = action.payload;
            console.log('status login: ', state.isLoggedIn);
        }
    },
    extraReducers: builder => {
        builder.addCase(loginUsername.pending, state => {
            console.log('fail rồi ............')
        }),
            builder.addCase(loginUsername.fulfilled, (state, action) => {
                state.userInfo = action.payload;
                console.log("thong tin" + action.payload)
                state.isLoggedIn = true;
                state.error = null;
            })
    },
});

export const { changeStatusLoginUsername } = loginUserSlice.actions;
export default loginUserSlice.reducer;
