import { StyleSheet, Text, View, Image, Pressable, FlatList,TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { fetchData } from '../../../../redux-toolkit/reducer_slice/cart_slice/getProductAPISlice';
import { categoryFilterChange } from '../../../../redux-toolkit/reducer_slice/shop_slice/filterSlice';
const FavoriteScreen = (props) => {
  const { navigation } = props;
  const user = useSelector(state => state.login.userInfo);
  
  let listData = user.user.favorites
  const Item = ({ item }) => {
    return (
      <TouchableOpacity 
        style={styles.itemContainer}
        onPress={() => {
          navigation.navigate('Mango',{id:item.idProduct})} 
        }
        >
        {/* Image Fruit*/}
        <Image
          style={{ width: 130, height: 100, resizeMode: 'contain' }}
          source={{ uri: item.image }}
        />

        {/* Name Fruit and quantity */}
        <View style={styles.nameFruitContainer}>
          <Text numberOfLines={2} style={styles.nameFruit}>
            {item.name}
          </Text>


        </View>

        {/* Cost */}
        <Text style={styles.cost}>{item.price} $</Text>
      </TouchableOpacity>
    );
  };
  const dispatch = useDispatch();



  return (
    (listData.length<1)?
    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          source={require('../../../../media/images/Group260.png')}
        />
      </View>
      <View style={styles.textMiddle}>
        <Text style={styles.textMiddle1}>Your heart is empty</Text>
        <Text>Start fall in love with some good</Text>
        <Text>goods</Text>
      </View>
      <TouchableOpacity 
        style={styles.btnStart}
        onPress={() => {
          dispatch(categoryFilterChange('All'));
          props.navigation.navigate('Explore', { screen: 'Explores' })
          setTimeout(() => {
              props.navigation.navigate('Fruit')
          },1)
      }}
        >
        <Text style={styles.textStart}>Start Shopping</Text>
      </TouchableOpacity>
    </View>
    :


    <View style={styles.container}>

      {/* Flatlist */}
      <FlatList
        data={listData}
        renderItem={Item}
        keyExtractor={item => item._id}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  nameFruit: {
    color: '#6D3805',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 32,
    width: 150,
  }, nameFruitContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }, itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },


  //-------------------------
  textStart: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF'
  },
  btnStart: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'tomato',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'tomato',
    height: 50
  },
  textMiddle1: {
    marginTop: 14,
    marginBottom: 14,
    fontWeight: '700',
    fontSize: 20,
    color: '#6D3805'
  },
  textMiddle: {
    alignItems: 'center',

  },
  textHeader: {
    marginBottom: 21,
    fontWeight: '700',
    fontSize: 25,
    color: '#FF5E00'
  },
  header: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 28,
    flexDirection: 'column',
  }
})