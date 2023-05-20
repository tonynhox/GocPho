import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  RefreshControl,
  Alert,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useEffect} from 'react';
import {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {
  addListBills,
  changeCurrentBillId,
  fetchAllBills,
  fetchBillById,
  fetchStatusBill,
} from '../../../../redux-toolkit/reducer_slice/shop_slice/orderSlice';
import {ScrollView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

const Ongoing = props => {
  const {navigation} = props;
  const [refreshing, setRefreshing] = useState(false);
  const message = useSelector(state => state.ordered.data.message);
  let currentOrder = {};
  const [showPopup, setShowPopup] = useState(false);
  let role = useSelector(state => state.login.userInfo.user.username);
  console.log('USERNAME: ', role);
  if (role == null) {
    role = 'user';
  }
  const screenHeight = Dimensions.get('window').height;
  const maxModalHeight = screenHeight * 0.8;

  let statusDelivery = 3;
  const dispatch = useDispatch();
  const idUser = useSelector(state => state.login.userInfo.user._id);
  const isLoading = useSelector(state => state.ordered.loading);
  if (isLoading) {
    return (
      <>
        {console.log('LOADING')}
        <Text>Loading...</Text>
      </>
    );
  }

  let billOrder = [];
  const fetchBillEffect = () => {
    dispatch(fetchBillById(idUser));
  };

  const fetchAllBillsEffect = () => {
    dispatch(fetchAllBills());
  };

  if (role !== 'admin') {
    billOrder = useSelector(state => state.ordered.data.bill);
    useEffect(fetchBillEffect, [idUser]);
  } else {
    billOrder = useSelector(state => state.ordered.data.bill);
    console.log('BILL ORDER ADMIN: ', billOrder);
    useEffect(fetchAllBillsEffect, []);
  }

  let idReceived = useSelector(state => state.ordered.currentBillId);
  console.log('ID RECEIVED: ', idReceived);
  const changeStatusBill = num => {
    setShowPopup(false);
    if (role != 'admin') {
      return;
    }
    let currentStatus = num;
    if (currentStatus == 1) {
      currentStatus++;
      Toast.show({
        type: 'success',
        text1: 'You Accept The Order',
      });
    } else if (currentStatus == 2) {
      currentStatus++;
      Toast.show({
        type: 'success',
        text1: 'Your Order Completed',
      });
    }
    dispatch(fetchStatusBill({idReceived, currentStatus, message: 'message'}));
  };

  const reviewAndConfirmBill = num => {
    togglePopup();
  };

  const confirmOrderReceived = num => {
    if (role == 'admin') {
      changeStatusBill(num);
    }
  };

  if (!billOrder) {
    return;
  } else {
    billOrder.map((bill, index) => {
      if (bill._id == idReceived) {
        statusDelivery = bill.status[0].number;
      }
    });
    const indexOrder = billOrder.findIndex(item => item._id == idReceived);
    currentOrder = billOrder[indexOrder];
    // console.log("CURRENT ORDER: ", currentOrder)
  }

  const convertTime = () => {
    let idOrder = '';
    let datePart = '';

    billOrder.map(item => {
      if (item._id == idReceived) {
        idOrder = item.status[0].date;
        datePart = idOrder.substr(0, 15);
        return;
      }
    });
    // console.log('DATETIME: ', datePart);

    const date = new Date(idOrder);

    const timeString = date.toLocaleTimeString();

    return timeString;
  };

  const convertDate = () => {
    let idOrder = '';
    let datePart = '';

    billOrder.map(item => {
      if (item._id == idReceived) {
        idOrder = item.status[0].date;
        datePart = idOrder.substr(0, 15);
        return;
      }
    });

    return datePart;
  };

  //popup review order

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <ScrollView refreshControl={<RefreshControl />}>
      <>
        {billOrder.length == 0 ? (
          <Text>You not have any bill yet</Text>
        ) : (
          <>
            {message != 'success' ? (
              Alert.alert(
                'Oops',
                'Somethings was wrong! Try again later',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => navigation.goBack()},
                ],
                {cancelable: false},
              )
            ) : (
              <>
                {billOrder != undefined ? (
                  <View style={[styles.container]}>
                    {/* //Header Ongoing */}
                    <View style={[styles.Calender]}>
                      <Image
                        source={require('../../../../media/images/IconCal.png')}
                        style={[styles.imgCalender]}
                      />
                      <Text style={[styles.textDate]}>{convertDate()}</Text>
                      <Text style={[styles.textTime]}>{convertTime()}</Text>
                    </View>
                    {statusDelivery === 1 && (
                      <Pressable
                        style={({pressed}) => [{opacity: pressed ? 0.5 : 1.0}]}
                        onPress={() => reviewAndConfirmBill()}>
                        <View style={[styles.item]}>
                          <Image
                            source={require('../../../../media/images/IconCheckOn.png')}
                            style={[styles.imgCheckOn]}
                          />
                          <Image
                            source={require('../../../../media/images/IconItem.png')}
                            style={[styles.imgItem]}
                          />
                          <View
                            style={{
                              flexDirection: 'column',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                            }}>
                            <Text style={[styles.textItem]}>
                              Waiting Accept
                            </Text>
                            <>
                              {role == 'admin' ? (
                                <Text
                                  style={{
                                    textDecorationLine: 'underline',
                                    marginTop: -25,
                                  }}>
                                  Press to get
                                </Text>
                              ) : (
                                <Text>Press to see</Text>
                              )}
                            </>
                          </View>
                        </View>
                      </Pressable>
                    )}
                    {statusDelivery === 2 && (
                      <>
                        <Pressable onPress={reviewAndConfirmBill}>
                          <View style={[styles.item]}>
                            <Image
                              source={require('../../../../media/images/IconCheckOn.png')}
                              style={[styles.imgCheckOn]}
                            />
                            <Image
                              source={require('../../../../media/images/IconItem.png')}
                              style={[styles.imgItem]}
                            />
                            <View
                              style={{
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                              }}>
                              <Text style={[styles.textItem]}>
                                Waiting Accept
                              </Text>
                              <>
                                {role == 'admin' ? (
                                  <Text
                                    style={{
                                      textDecorationLine: 'underline',
                                      marginTop: -25,
                                    }}>
                                    Press to get
                                  </Text>
                                ) : (
                                  <Text>Press to see</Text>
                                )}
                              </>
                            </View>
                          </View>
                        </Pressable>

                        <Pressable
                          style={({pressed}) => [
                            {opacity: pressed ? 0.5 : 1.0},
                          ]}
                          onPress={() => confirmOrderReceived(2)}>
                          <View style={[styles.item]}>
                            <Image
                              source={require('../../../../media/images/IconCheckOn.png')}
                              style={[styles.imgCheckOff]}
                            />
                            <Image
                              source={require('../../../../media/images/IconItem.png')}
                              style={[styles.imgItem]}
                            />
                            <View
                              style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Text style={[styles.textItem]}>Delivering</Text>
                              <>
                                {role == 'admin' ? (
                                  <Text
                                    style={{
                                      textDecorationLine: 'underline',
                                      marginTop: -25,
                                    }}>
                                    Press to get
                                  </Text>
                                ) : (
                                  <Text></Text>
                                )}
                              </>
                            </View>
                          </View>
                        </Pressable>
                      </>
                    )}
                    {statusDelivery === 3 && (
                      <>
                        <Pressable onPress={reviewAndConfirmBill}>
                          <View style={[styles.item]}>
                            <Image
                              source={require('../../../../media/images/IconCheckOn.png')}
                              style={[styles.imgCheckOn]}
                            />
                            <Image
                              source={require('../../../../media/images/IconItem.png')}
                              style={[styles.imgItem]}
                            />
                            <View
                              style={{
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                              }}>
                              <Text style={[styles.textItem]}>
                                Waiting Accept
                              </Text>
                              <>
                                {role == 'admin' ? (
                                  <Text
                                    style={{
                                      textDecorationLine: 'underline',
                                      marginTop: -25,
                                    }}>
                                    Press to get
                                  </Text>
                                ) : (
                                  <Text>Press to see</Text>
                                )}
                              </>
                            </View>
                          </View>
                        </Pressable>

                        <View style={[styles.item]}>
                          <Image
                            source={require('../../../../media/images/IconCheckOn.png')}
                            style={[styles.imgCheckOff]}
                          />
                          <Image
                            source={require('../../../../media/images/IconItem.png')}
                            style={[styles.imgItem]}
                          />
                          <Text style={[styles.textItem]}>Delivering.</Text>
                        </View>
                        <View style={[styles.item]}>
                          <Image
                            source={require('../../../../media/images/IconCheckOn.png')}
                            style={[styles.imgCheckOff]}
                          />
                          <Image
                            source={require('../../../../media/images/IconItem.png')}
                            style={[styles.imgItem]}
                          />
                          <Text style={[styles.textItem]}>Received.</Text>
                        </View>
                      </>
                    )}
                  </View>
                ) : (
                  <Text>Loading...</Text>
                )}
              </>
            )}
          </>
        )}
        <>
          {currentOrder ? (
            <Modal visible={showPopup} transparent={true} animationType="slide">
              <View style={styles.containerPopup}>
                <View style={[styles.popup, {maxHeight: maxModalHeight}]}>
                  <Text style={styles.title}>Order #{currentOrder._id}</Text>

                  <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.content}>
                      {currentOrder.bill.map(item => (
                        <View style={styles.itemPopup} key={item._id}>
                          <Text>Name: {item.name}</Text>
                          <Text>Price: {item.price}</Text>
                          <Text>Quantity: {item.quantity}</Text>
                          <Text>Total: {item.price * item.quantity}</Text>
                        </View>
                      ))}
                    </View>
                  </ScrollView>

                  <View style={styles.addressPopup}>
                    <Text>Address: {currentOrder.address}</Text>
                  </View>
                  <View style={styles.total}>
                    {currentOrder.payment == 1 ? (
                      <Text>Payment: ZaloPay</Text>
                    ) : (
                      <Text>Payment: COD</Text>
                    )}

                    <Text>Total Price: {currentOrder.totalPrice}</Text>
                  </View>

                  <View style={styles.buttons}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={togglePopup}>
                      <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => changeStatusBill(1)}>
                      <Text style={styles.buttonText}>OK</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          ) : (
            <Text></Text>
          )}
        </>
      </>
      <Toast />
    </ScrollView>
  );
};

export default Ongoing;

const styles = StyleSheet.create({
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
  itemPopup: {
    marginBottom: 10,
  },
  total: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
    marginTop: 10,
    alignItems: 'flex-end',
  },
  addressPopup: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
    marginTop: 10,
    alignItems: 'flex-start',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  button: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textItem: {
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    height: 56,
    width: 260,
    fontSize: 16,
    lineHeight: 32,
    letterSpacing: 0.98,
    left: 30,
    color: '#6D3805',
    paddingLeft: 30,
  },
  imgItem: {
    left: 30,
  },
  imgCheckOn: {},
  item: {
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTime: {
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 32,
    letterSpacing: 0.98,
    color: '#F37A20',
    paddingLeft: 80,
  },
  textDate: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 1.28,
    color: '#6D3805',
    paddingLeft: 5,
  },
  imgCalender: {
    width: 15,
    height: 16,
  },
  Calender: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    textAlign: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%',
  },
  containerPopup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
