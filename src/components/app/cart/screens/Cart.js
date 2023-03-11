import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

const data = [
  {
    id: '1',
    image: require('../../../../media/images/AppleCart.png'),
    nameFruit: 'AppleCart',
    cost: '2.33$',
    quantity: 1,
  },
  {
    id: '2',
    image: require('../../../../media/images/AppleCart.png'),
    nameFruit: 'AppleCart',
    cost: '2.33$',
    quantity: 1,
  },
  {
    id: '3',
    image: require('../../../../media/images/AppleCart.png'),
    nameFruit: 'Aplkfdgjsldfgjlsfjglfple',
    cost: '2.33$',
    quantity: 1,
  },
  {
    id: '4',
    image: require('../../../../media/images/AppleCart.png'),
    nameFruit: 'AppleCart',
    cost: '2.33$',
    quantity: 1,
  },
  {
    id: '5',
    image: require('../../../../media/images/AppleCart.png'),
    nameFruit: 'AppleCart',
    cost: '2.33$',
    quantity: 1,
  },
  {
    id: '6',
    image: require('../../../../media/images/AppleCart.png'),
    nameFruit: 'AppleCart',
    cost: '2.33$',
    quantity: 1,
  },
  {
    id: '7',
    image: require('../../../../media/images/AppleCart.png'),
    nameFruit: 'AppleCart',
    cost: '2.33$',
    quantity: 1,
  },
  {
    id: '8',
    image: require('../../../../media/images/AppleCart.png'),
    nameFruit: 'AppleCart',
    cost: '2.33$',
    quantity: 1,
  },
];

const Cart = (props) => {
  const { navigation } = props;
  const Item = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        {/* Image Fruit*/}
        <Image source={item.image} />

        {/* Name Fruit and quantity */}
        <View style={styles.nameFruitContainer}>
          <Text style={styles.nameFruit}>{item.nameFruit}</Text>
          <View style={styles.iconContainer}>
            <TouchableHighlight>
              <Image
                style={styles.icon}
                source={require('../../../../media/images/MinusIcon.png')}
              />
            </TouchableHighlight>

            <Text style={styles.cost}>1</Text>
            <TouchableHighlight>
              <Image
                style={styles.icon}
                source={require('../../../../media/images/PlusIcon.png')}
              />
            </TouchableHighlight>
          </View>
        </View>

        {/* Cost */}
        <Text style={styles.cost}>{item.cost}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <Image source={require('../../../../media/images/Arrow.png')}></Image>

      {/* Cart */}
      <View style={styles.mainTitle}>
        <Text style={styles.cart}>Cart</Text>
      </View>

      {/* Flatlist */}
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
      />

      <Pressable style={styles.btnSignUp} onPress={() => navigation.navigate('Payment')}>
        <Text style={styles.signUpInsideButton}>CheckOut</Text>
      </Pressable>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  flatlist: {
    height: '70%',
    marginVertical: 30,
  },
  nameFruitContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cost: {
    color: '#6D3805',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
  },
  nameFruit: {
    color: '#6D3805',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 32,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 80,
    backgroundColor: '#F4F4F4',
  },
  icon: {
    width: 20,
    height: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    height: '8%',
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cart: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 41,
    letterSpacing: 0.41,
    color: '#FF5E00',
  },
  mainTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor:'white',
    padding: 20,
  },
});
