import {createSelector} from '@reduxjs/toolkit';

export const searchTextSelector = state => state.filter.search;
export const listData = state => state.dataAPI.data;
export const dataExplore = state => state.dataAPI.data;

export const showItemMatch = createSelector(
  searchTextSelector,
  dataExplore,
  (search, data) => {
    if (!search) {
      // If search term is empty or not provided, return all items.
      return data;
    }
    
    // Filter the data based on the search term.
    return data.filter(item => {
      return item.name.toLowerCase().includes(search);
    });
  },
);
