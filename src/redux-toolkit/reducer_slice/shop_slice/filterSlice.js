import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        search : ''
    },
    reducers:{
        searchFilterChange: (state, action) =>{
            state.search = action.payload;
        }
    }
})
export default filterSlice.reducer