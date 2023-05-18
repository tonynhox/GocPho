import { createSelector } from '@reduxjs/toolkit';
import { remove } from "diacritics"; // Import thư viện diacritics để loại bỏ dấu tiếng Việt

export const searchTextSelector = state => state.filter.search;
export const dataCategory = state => state.dataCategoryMainShop.data;
export const dataExplore = state => state.dataAPI.data;
export const categorySelector = state => state.filter.category;
export const searchCategorySelector = state => state.filter.searchCategory;
export const favouritesSelector = state => state.login.userInfo.user.favorites;
export const productSelector = state => state.filter.product;


export const showProductDetail = createSelector(
  favouritesSelector, productSelector,
  (dataFavourites, product) => {
    const data= dataFavourites.filter(item => 
      item.idProduct===product._id)
    
    console.log('data ne',data)
    if(data.lenght>0){
      return {...data,favourite:true};
    }else
      return {...data,favourite:false};
  },
);



export const showItemMatch = createSelector(
  searchTextSelector,
  dataExplore,
  categorySelector,
  (search, data, category) => {
    // Loại bỏ dấu tiếng Việt trong chuỗi tìm kiếm
    const searchWithoutDiacritics = remove(search.toLowerCase());
    // if(search&&!category)
    if (!search && category === 'All') {
      // Nếu không có từ khóa tìm kiếm và category='All', trả về tất cả các mục.
      return data;
    } else if (!search && category) {
      // Nếu không có từ khóa tìm kiếm, nhưng có category được chỉ định, lọc theo category.
      return data.filter(item => item.category === category);
    } else {
      // Nếu cả category và từ khóa tìm kiếm đều được chỉ định, lọc theo cả hai.
      if (category === 'All') {
        return data.filter(item => remove(item.name.toLowerCase()).includes(searchWithoutDiacritics));
      }
      return data.filter(item => item.category === category && remove(item.name.toLowerCase()).includes(searchWithoutDiacritics));
    }
  },
);


export const showItemMatchCategory = createSelector(
  dataCategory, searchCategorySelector,
  (dataCategory, searchCategory) => {
    // Loại bỏ dấu tiếng Việt trong chuỗi tìm kiếm
    const searchWithoutDiacritics = remove(searchCategory.toLowerCase());
    // if(search&&!category)
    if (!searchCategory) {
      return dataCategory;
    } else if (searchCategory) {
      return dataCategory.filter(item => remove(item.name.toLowerCase()).includes(remove(searchWithoutDiacritics)));
    }
  },
);



