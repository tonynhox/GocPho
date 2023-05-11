import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        search : '',
        category: ''
    },
    reducers:{
        searchFilterChange: (state, action) =>{
            state.search = action.payload;
        },
        categoryFilterChange: (state, action) =>{
            state.category = action.payload;
        }
    }
})
export const {categoryFilterChange} = filterSlice.actions;
export const {searchFilterChange} = filterSlice.actions;
export default filterSlice.reducer