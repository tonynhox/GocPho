import {createSlice} from '@reduxjs/toolkit';

export const itemSlice = createSlice({
  name: 'item',
  initialState: [
    {
      _name: 'Fish',
      image: require('../../../media/images/fruits.png'),
      _background: require('../../../media/images/violet.png'),
      _id: 1,
    },
    {
      _name: 'Cat',
      image: require('../../../media/images/fruits.png'),
      _background: require('../../../media/images/violet.png'),
      _id: 2,
    },
    {
      _name: 'Bird',
      image: require('../../../media/images/fruits.png'),
      _background: require('../../../media/images/violet.png'),
      _id: 3,
    },
    {
      _name: 'Apple',
      image: require('../../../media/images/fruits.png'),
      _background: require('../../../media/images/violet.png'),
      _id: 4,
    },
    {
      _name: 'Mango',
      image: require('../../../media/images/fruits.png'),
      _background: require('../../../media/images/violet.png'),
      _id: 5,
    },
    {
      _name: 'Watermelon',
      image: require('../../../media/images/fruits.png'),
      _background: require('../../../media/images/violet.png'),
      _id: 6,
    },
  ],
  
});
export default itemSlice.reducer
