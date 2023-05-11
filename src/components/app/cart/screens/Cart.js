import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  FlatList,
  TouchableHighlight,
  Touchable,
  Alert
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {buyItemSlice} from '../../../../redux-toolkit/reducer_slice/cart_slice/buyItemSlice';
import {addItem} from '../../../../redux-toolkit/reducer_slice/cart_slice/getProductAPISlice';
import {incrementItemQuantity} from '../../../../redux-toolkit/reducer_slice/cart_slice/getProductAPISlice';
import {decrementItemQuantity} from '../../../../redux-toolkit/reducer_slice/cart_slice/getProductAPISlice';
import {sortListByTotalCost} from '../../../../redux-toolkit/reducer_slice/cart_slice/getProductAPISlice';
import {sortListByName} from '../../../../redux-toolkit/reducer_slice/cart_slice/getProductAPISlice';
import {cloneIncrementItemQuantity} from '../../../../redux-toolkit/reducer_slice/cart_slice/getProductAPISlice';
import {sortListByQuantity} from '../../../../redux-toolkit/reducer_slice/cart_slice/getProductAPISlice';
import SelectDropdown from 'react-native-select-dropdown';
import {fetchData} from '../../../../redux-toolkit/reducer_slice/cart_slice/getProductAPISlice';
import {SwipeRow} from 'react-native-swipe-list-view';
import {removeItemById} from '../../../../redux-toolkit/reducer_slice/cart_slice/getProductAPISlice';

const Cart = props => {
  const listData = useSelector(state => state.dataAPI.data);
  console.log('data: ', listData);
  const loading = useSelector(state => state.dataAPI.loading);
  const error = useSelector(state => state.dataAPI.error);
  const sort = ['Name', 'Total Price', 'Quantity'];

  const {navigation} = props;

  useEffect(() => {
    dispatch(fetchData());
  }, [fetchData]);

  const dispatch = useDispatch();

  const addItemRedux = () => {
    dispatch(
      addItem({
        id: Math.random(),
        nameFruit: 'AppleCart',
        image: require('../../../../media/images/AppleCart.png'),
        cost: '2$',
        quantity: 1,
      }),
    );
  };

  const handleUpRedux = id => {
    console.log('ID: ', id);
    dispatch(incrementItemQuantity({id}));
  };

  const handleDownRedux = id => {
    dispatch(decrementItemQuantity({id}));
  };

  const sortListByCostRedux = () => {
    dispatch(sortListByTotalCost());
  };

  const sortListByNameRedux = () => {
    dispatch(sortListByName());
  };

  const sortListByQuantityRedux = () => {
    dispatch(sortListByQuantity());
  };

  const removeItemWithSwipeRow = id => {
    dispatch(removeItemById(id));
  };

  const deleteConfirm = (id) =>{
    Alert.alert(
      'Delete?',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => removeItemWithSwipeRow(id)
        }
      ],
      { cancelable: false }
    );
  }

  const Item = ({item}) => {
    return (
      // <Pressable onPress={()=> deleteItem(item.id)}>
      <View style={styles.itemContainer}>
        {/* Image Fruit*/}
        <Image
          style={{width: 130, height: 100, resizeMode: 'contain'}}
          source={{uri: item.image}}
        />

        {/* Name Fruit and quantity */}
        <View style={styles.nameFruitContainer}>
          <Text numberOfLines={2} style={styles.nameFruit}>
            {item.name}
          </Text>
          <View style={styles.iconContainer}>
            <Pressable onPress={() => handleDownRedux(item.id)}>
              <Image
                style={styles.icon}
                source={require('../../../../media/images/MinusIcon.png')}
              />
            </Pressable>

            <Text style={styles.cost}>{item.quantity}</Text>
            <Pressable onPress={() => handleUpRedux(item.id)}>
              <Image
                style={styles.icon}
                source={require('../../../../media/images/PlusIcon.png')}
              />
            </Pressable>
          </View>
        </View>

        {/* Cost */}
        <Text style={styles.cost}>{item.cost * item.quantity} $</Text>
      </View>
      // </Pressable>
    );
  };

  const ItemSwipe = ({item}) => {
    return (
      <SwipeRow rightOpenValue={-60}>
        <View style={styles.standaloneRowBack}>
          <Text style={styles.backTextWhite}></Text>
          {/* <Text style={styles.backTextWhite}>Delete</Text> */}
          <Pressable onPress={() => deleteConfirm(item.id)}>
            <Image
              style={styles.iconDelete}
              source={require('../../../../media/images/ic_Delete.png')}
            />
          </Pressable>
        </View>

        <View style={styles.standaloneRowFront}>
          <View style={styles.itemContainer}>
            {/* Image Fruit*/}
            <Image
              style={{width: 130, height: 100, resizeMode: 'contain'}}
              source={{uri: item.image}}
            />

            {/* Name Fruit and quantity */}
            <View style={styles.nameFruitContainer}>
              <Text numberOfLines={2} style={styles.nameFruit}>
                {item.name}
              </Text>
              <View style={styles.iconContainer}>
                <Pressable onPress={() => handleDownRedux(item.id)}>
                  <Image
                    style={styles.icon}
                    source={require('../../../../media/images/MinusIcon.png')}
                  />
                </Pressable>

                <Text style={styles.cost}>{item.quantity}</Text>
                <Pressable onPress={() => handleUpRedux(item.id)}>
                  <Image
                    style={styles.icon}
                    source={require('../../../../media/images/PlusIcon.png')}
                  />
                </Pressable>
              </View>
            </View>

            {/* Cost */}
            <Text style={styles.cost}>{item.cost}</Text>
          </View>
        </View>
      </SwipeRow>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectDropdown}>
        <SelectDropdown
          data={sort}
          buttonStyle={{
            backgroundColor: '#AC7253',
            width: 120,
            height: 40,
            borderRadius: 20,
          }}
          buttonTextStyle={{
            color: 'white',
            fontSize: 16,
            fontWeight: '700',
            lineHeight: 22,
          }}
          dropdownStyle={{}}
          rowStyle={{
            borderWidth: 1,
            backgroundColor: '#00FF4A',
            borderColor: 'black',
          }}
          rowTextStyle={{
            fontSize: 16,
            fontWeight: '700',
            lineHeight: 22,
            color: 'black',
          }}
          onSelect={(selectedItem, index) => {
            if (selectedItem == 'Name') {
              sortListByNameRedux();
            } else if (selectedItem == 'Total Price') {
              sortListByCostRedux();
            } else {
              sortListByQuantityRedux();
            }
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          defaultButtonText={'Sort'}
        />
      </View>

      {/* Flatlist */}
      <FlatList
        data={listData}
        renderItem={({item}) => <ItemSwipe item={item} />}
        keyExtractor={item => item.id}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
      />

      <Pressable
        style={styles.btnSignUp}
        onPress={() => navigation.navigate('Payment')}>
        <Text style={styles.signUpInsideButton}>CheckOut</Text>
      </Pressable>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  iconDelete: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  standaloneRowFront: {
    // alignItems: 'center',
    backgroundColor: '#FFF',
    // justifyContent: 'center',
    // height: 50,
  },
  standaloneRowBack: {
    alignItems: 'center',
    backgroundColor: 'orange',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  backTextWhite: {
    color: '#FFF',
  },
  selectDropdown: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  flatlist: {
    height: 600,
    marginVertical: 5,
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
    width: 150,
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
    marginVertical: 5,
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
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
  },
});
