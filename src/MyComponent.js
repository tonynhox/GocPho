import React from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const OrderPopup = ({order, onClose, onConfirm}) => {
  order = {
    _id: '6467b4c0bb4539076c4e601d',
    idUser: '645de2e81f37e6f3e669af9d',
    bill: [
      {
        name: 'huy',
        price: 2222,
        quantity: 9,
        _id: '645d071305ab96b8gadfgffd67bf4',
      },
      {
        name: 'huy',
        price: 2222,
        quantity: 9,
        _id: '645d07130asdfasd5ab9gdfg6b8ffd67bf4',
      },
      {
        name: 'trong',
        price: 111,
        quantity: 21,
        _id: '645d072405ab9asfasf6b8ffd67bf6',
      },
      {
        name: 'huan',
        price: 333,
        quantity: 11,
        _id: '645d3ca352c2asf6470deasdf5cd710',
      },
      {
        name: 'huan',
        price: 333,
        quantity: 11,
        _id: '645d3ca352c26sdfasd470deasdf5cd710',
      },
      {
        name: 'huan',
        price: 333,
        quantity: 11,
        _id: '645d3ca352asfc26asfasf470deasdf5cd710',
      },
      {
        name: 'huan',
        price: 333,
        quantity: 11,
        _id: '645d3ca352c26470deasdf5cd710',
      },
    ],
    address: 'abc',
    payment: 1,
    status: [
      {
        number: 1,
        name: 'Đang xử lý',
        date: 'Sat May 20 2023 00:41:20 GMT+0700 (Indochina Time)',
        _id: '6467b4c0bb4539076c4e6021',
      },
    ],
    timeDesire: '11/11/2222',
    totalPrice: 11111111,
    __v: 0,
  };
  const screenHeight = Dimensions.get('window').height;
  const maxModalHeight = screenHeight * 0.8;

  const {_id, bill, totalPrice} = order;

  return (
    <Modal visible={true} transparent={true} animationType="slide">
      <View style={styles.container}>
        <View style={[styles.popup, { maxHeight: maxModalHeight }]}>
          <Text style={styles.title}>Order #{_id}</Text>

          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.content}>
              {bill.map((item) => (
                <View style={styles.item} key={item._id}>
                  <Text>Name: {item.name}</Text>
                  <Text>Price: {item.price}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                  <Text>Total: {item.price * item.quantity}</Text>
                </View>
              ))}
            </View>
          </ScrollView>

          <View style={styles.total}>
            <Text>Total Price: {totalPrice}</Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onConfirm}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OrderPopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contentContainer: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
  },
  item: {
    marginBottom: 10,
  },
  total: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
    marginTop: 10,
    alignItems: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  button: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});