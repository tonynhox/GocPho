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
export const {searchFilterChange} = filterSlice.actions;
export default filterSlice.reducer