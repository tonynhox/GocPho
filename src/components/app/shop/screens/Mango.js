import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../../redux-toolkit/reducer_slice/cart_slice/getProductAPISlice';

const renderItemPopular = ({ item }) => {
  const { __id, image, price, kg } = item;
  return (
    <View style={{marginVertical:10}} >
      <View style={[styles.boxShadown, styles.cardPopular]}>
        <View style={styles.imgPop}>
          <Image source={require('../../../../media/images/apple.png')} />
        </View>
        <View style={{ position: 'relative' }}>
          <Text style={styles.txtNamePop}>Red Apple</Text>
          <Text style={styles.txtKg}>1kg,priceg</Text>
          <Text style={styles.txtPrice}>$ 4,99</Text>
          
        </View>

        <TouchableOpacity>
            <Image
              style={styles.imgAdd}
              source={require('../../../../media/images/icAdd.png')}
            />
          </TouchableOpacity>
      </View>
    </View>
  );
};

const Mango = props => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    product = {
      category: 'fruit',
      cost: 12,
      id: Math.random(),
      image:
        'https://fastly.picsum.photos/id/404/300/300.jpg?hmac=NPTkeNRfEEWulE2B5Q8f0iXu0MrUG1y0s-P_w5VioZA',
      name: 'Mango',
      quantity: quantity,
    };
    dispatch(addItem(product));

    navigation.navigate('Cart', { screen: 'cart' });
  };

  const handleUp = () => {
    setQuantity(quantity + 1);
  };

  const handleDown = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const { navigation } = props;
  return (
    //minHeight : '100%'
    <ScrollView style={styles.container}>
      <View>
        {/* Image Fruit */}
        <View style={styles.fruitContainer}>
          <Image
            style={{ width: 200, height: 200, resizeMode: 'contain' }}
            source={{
              uri: 'https://fastly.picsum.photos/id/404/300/300.jpg?hmac=NPTkeNRfEEWulE2B5Q8f0iXu0MrUG1y0s-P_w5VioZA',
            }}
          />
        </View>

        {/* Original Mango */}
        <Text style={styles.name}>Original Mango</Text>

        {/* Price */}
        <Text style={styles.price}>$3.00/st</Text>

        {/* More information */}
        <Text style={styles.information}>
          Golden Ripe Alphonsa mangoes delivered to your house in the most
          hygenic way ever... Best for eating plain but can also be made into
          shakes and cakes.
        </Text>

        {/* Quantity and Heart Icon */}
        <View style={styles.quantityContainer}>
          {/* Minus, Heart and Plus Icon */}
          <View style={styles.minusPlusIconContainer}>
            <Pressable onPress={handleDown}>
              <Image
                onPress={() => handleDown()}
                style={styles.icon}
                source={require('../../../../media/images/MinusIcon.png')}
              />
            </Pressable>
            <Text style={styles.price}>{quantity}</Text>
            <Pressable onPress={() => handleUp()}>
              <Image
                style={styles.icon}
                source={require('../../../../media/images/PlusIcon.png')}
              />
            </Pressable>
          </View>

          {/* Heart Icon */}
          <Image
            style={styles.icon}
            source={require('../../../../media/images/HeartIcon.png')}
          />
        </View>

        {/* Button add to Cart */}
        <Pressable style={styles.btnSignUp} onPress={handleAddItem}>
          <Text style={styles.signUpInsideButton}>Add to Cart</Text>
        </Pressable>

        {/* You may also need */}
        <Text style={styles.more}>You may also need</Text>
        <View style={{marginVertical:20}}>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={renderItemPopular} //gọi từ biến trên
            keyExtractor={Math.random} //số không trùng
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        </View>

      </View>
    </ScrollView>
  );
};

export default Mango;

const styles = StyleSheet.create({
  imgAdd: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  txtPrice: {
    color: '#FF5E00',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    marginTop: 1,
  },
  txtKg: {
    color: '#929292',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    marginTop: 1,
  },
  txtNamePop: {
    color: '#6D3805',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 18,
    marginTop: 2,
  },
  imgPop: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxShadown: {
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 13,
    elevation: 9,
    shadowOffset: { width: 0, height: 0 },
  },
  cardPopular: {
    backgroundColor: 'white',
    width: 150,
    height: 189,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  more: {
    color: '#6D3805',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 5,
  },
  signUpInsideButton: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0.41,
  },
  btnSignUp: {
    backgroundColor: '#FF5E00',
    marginBottom: 30,
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusPlusIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: ' 70%',
    backgroundColor: '#F4F4F4',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 19,
  },
  icon: {
    width: 40,
    height: 40,
  },
  name: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29,
    color: '#6D3805',
  },
  price: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 29,
    color: '#6D3805',
    marginTop: 6,
  },
  information: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#6D3805',
    marginVertical: 8,
  },
  fruitContainer: {
    height:300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding:16
  },
});
