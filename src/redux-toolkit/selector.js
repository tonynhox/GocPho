import {createSelector} from '@reduxjs/toolkit';

export const searchTextSelector = state => state.filter.search;
export const listData = state => state.dataAPI.data;
export const dataExplore = state => state.dataAPI.data;
export const categorySelector = state => state.filter.category;

export const showItemMatch = createSelector(
  searchTextSelector,
  dataExplore,
  categorySelector,
  (search, data, category) => {
    // Filter the data based on the search term.
    // return data.filter(item => {
    //   return item.name.toLowerCase().includes(search);
    // });
    if (!search && !category) {
      // If search term and category are empty or not provided, return all items.
      return data;
    } else if (!search && category) {
      // If search term is empty or not provided, but category is provided, filter by category.
      return data.filter(item => item.name === category);
    } else if (search && !category) {
      // If category is empty or not provided, but search term is provided, filter by search term.
      return data.filter(item => item.name.toLowerCase().includes(search));
    } else {
      // If both category and search term are provided, filter by both.
      return data.filter(item => item.name === category && item.name.toLowerCase().includes(search));
    }

    
  },
);
