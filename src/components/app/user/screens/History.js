import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const History = props => {
  const {navigation} = props;

  const listOrdered = useSelector(state => state.login.userInfo.user.bills);

  const [statusOrder, setStatusOrder] = useState();
  const [statusOrderNumber, setStatusOrderNumber] = useState(
    listOrdered[0].status[0].number,
  );

  const convertDate = (datetime, index) => {
    const dateString = listOrdered[index].status.date;

    const date = new Date(datetime);

    const timeString = date.toLocaleTimeString();

    return timeString;
  };

  const selectOrder = id => {
    console.log('ID: ', id);
    navigation.navigate('Ongoing', {id});
  };

  return (
    <View style={[styles.container]}>
      {/* Item 1 */}

      {listOrdered.map((bill, index) => (
        <Pressable key={index} onPress={() => selectOrder(bill._id)}>
          <View style={[styles.item]}>
            <View style={[styles.itemLeft]}>
              <Image
                source={require('../../../../media/images/IconOrder.png')}
                style={[styles.imgOrder]}
              />
            </View>
            <View style={[styles.itemMid]}>
              <Text style={styles.orderId} numberOfLines={1}>
                Order # {bill._id}
              </Text>

              {bill.status[0].number == 1 && (
                <Text style={styles.orderStatus}>Waiting Accept</Text>
              )}
              {bill.status[0].number == 2 && (
                <Text style={styles.orderStatus}>Delivery</Text>
              )}
              {bill.status[0].number == 3 && (
                <Text style={styles.orderStatus}>Received</Text>
              )}

              <Text style={styles.orderDate}>
                Date: {convertDate(bill.status[0].date, index)}
              </Text>
            </View>
            <View style={[styles.itemRight]}>
              <Text style={styles.orderPrice}>
                $ {bill.detail[0].price * bill.detail[0].quantity}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  orderPrice: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#F37A20',
  },
  itemRight: {
    position: 'absolute',
    right: 5,
  },
  orderDate: {
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#804F1E',
  },
  orderStatus: {
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#5EC401',
  },
  orderId: {
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 22,
    letterSpacing: 0.6,
    color: '#804F1E',
    fontFamily: 'Klarna Text',
  },
  itemMid: {
    paddingLeft: '15%',
    width: '50%',
    height: '80%',
  },
  imgOrder: {
    width: 24,
    height: 24,
  },
  itemLeft: {
    position: 'absolute',
    backgroundColor: '#F37A20',
    borderRadius: 90,
    width: '12%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
});
