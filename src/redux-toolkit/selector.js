import {createSelector} from '@reduxjs/toolkit';

export const searchTextSelector = state => state.filter.search;
export const itemSelector = state => state.item;

export const showItemMatch = createSelector(
    searchTextSelector, itemSelector, ()=>{
        
    }
    
)
