import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../../redux-toolkit/reducer_slice/cart_slice/getCartSlice';
import Swiper from 'react-native-swiper';
import { categoryFilterChange, fetchProductById } from '../../../../redux-toolkit/reducer_slice/shop_slice/filterSlice';
import { addfavourite } from '../../../../redux-toolkit/reducer_slice/user_slice/loginSlice';
import { useIsFocused } from '@react-navigation/native';
import { showProductDetail } from '../../../../redux-toolkit/selector';
import { fetchFavourite } from '../../../../redux-toolkit/reducer_slice/user_slice/loginSlice';

const renderItemPopular = ({ item, navigation }) => {

  const { _id, images, price, name, quantity, category } = item;
  let image = images[0].name;
  const handleAddItem = () => {
    product = {
      _id: _id, image: image, quantity: 1, price: price, name: name
    };
    dispatch(addItem(product));
    ToastAndroid.show('Item added to cart successfully!', ToastAndroid.SHORT);

  };
  return (
    <Pressable onPress={() => {
      navigation.navigate('Mango', { id: _id })
    }
    }>
      <View style={{ marginVertical: 10 }} >
        <View style={[styles.boxShadown, styles.cardPopular]}>
          <View style={styles.imgPop}>
            <Image style={{ width: '90%', height: '90%', resizeMode: 'contain' }} source={{ uri: image }} />
          </View>
          <View style={{ position: 'relative', marginHorizontal: 10 }}>
            <Text style={styles.txtNamePop}>{name}</Text>
            <Text style={styles.txtKg}>{quantity}kg,priceg</Text>
            <Text style={styles.txtPrice}>$ {price}</Text>

          </View>

          <TouchableOpacity
            onPress={handleAddItem}
          >
            <Image
              style={styles.imgAdd}
              source={require('../../../../media/images/icAdd.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>

  );
};

const Mango = props => {
  const { navigation } = props;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const id = props.route?.params?.id;
  const [dataProduct, setDataProduct] = useState();
  const [isFavourite, setIsfavourite] = useState(false);
  const dataFavourites = useSelector(state => state.login.userInfo.user.favorites);
  const idUser = useSelector(state => state.login.userInfo.user);
  const dataPopular = useSelector(state => state.dataAPI.data.slice(8, 18));

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id))
        .then((response) => {
          const dataDetail = response.payload;
          setDataProduct(dataDetail);
          if (dataFavourites.filter(item => item.idProduct === dataDetail._id).length) {
            setIsfavourite(true);
          } else {
            setIsfavourite(false);
          }
        })
        .catch((error) => {
          // Handle error if needed
        });
    }
  }, [dispatch, id]);


  const handleFavourite = () => {
    dispatch(fetchFavourite({ id: idUser._id, product: dataProduct }));
  }

  const handleAddItem = () => {
    product = {
      ...dataProduct, image: dataProduct.images[0].name, quantity: quantity
    };
    dispatch(addItem(product));
    ToastAndroid.show('Item added to cart successfully!', ToastAndroid.SHORT);
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

  const sline = dataProduct?.images.map((item, index) => (
    <View
      key={index}
      style={{ width: '100%', height: 200, alignItems: 'center', justifyContent: 'center' }}
    >
      <Image
        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        source={{ uri: item.name }}
      />
    </View>
  ))


  return (

    //minHeight : '100%'
    (dataProduct) ?
      <ScrollView style={styles.container}>
        <View>
          {/* Image Fruit */}
          <View style={styles.fruitContainer}>
            <View style={{ height: 200 }}>
              <Swiper
                showsButtons={false}
                autoplayTimeout={5}
                loop={false}
                // autoplay={true}
                showsPagination={true}>
                {sline}
              </Swiper>
            </View>

          </View>

          {/* Original Mango */}
          <Text style={styles.name}>{dataProduct.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${dataProduct.price}/st</Text>

          {/* More information */}
          <Text style={styles.information}>
            {dataProduct.detail}
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
            <Pressable
              onPress={() => {
                handleFavourite();
                setIsfavourite(!isFavourite)
              }}>
              <Image
                style={styles.icon}
                source={!isFavourite ? require('../../../../media/images/HeartIcon.png') : require('../../../../media/images/icHeartFull.png')}
              />
            </Pressable>

          </View>

          {/* Button add to Cart */}
          <Pressable style={styles.btnSignUp} onPress={handleAddItem}>
            <Text style={styles.signUpInsideButton}>Add to Cart</Text>
          </Pressable>

          {/* You may also need */}
          <Text style={styles.more}>You may also need</Text>
          <View style={{ marginVertical: 20 }}>
            <FlatList
              data={dataPopular}
              renderItem={({ item }) => renderItemPopular({ item, navigation })} //gọi từ biến trên
              keyExtractor={item => item._id} //số không trùng
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            />
          </View>

        </View>
      </ScrollView> :
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator size="large" color="#FF5E00"/>
      </View>
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
    // height: 300,
    marginBottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16
  },
});
