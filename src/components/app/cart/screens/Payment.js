import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import GetLocation from 'react-native-get-location';
import {renderers} from 'react-native-popup-menu';
import {fetchData} from '../../../../redux-toolkit/reducer_slice/cart_slice/getProductAPISlice';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

const {SlideInMenu} = renderers;

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import AxiosInstance from '../../axiosClient/AxiosInstance';
import {fetchGetAddress} from '../../../../redux-toolkit/reducer_slice/user_slice/getAddressSlice';

const Payment = props => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const listData = useSelector(state => state.cart.data);

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const newTotalCost = listData.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    setTotalCost(newTotalCost);
  }, [listData]);

  const pickLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  // lấy dũ liệu ngày giao hàng
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectdate, setSelectdate] = useState('Select Date');

  // lấy dữ liệu khung giờ giao hàng
  const [time, SetTime] = useState('');

  const [isPressed, setIsPressed] = useState(true);
  const [isPressed1, setIsPressed1] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);
  const [isPressed3, setIsPressed3] = useState(false);
  const [isPressed4, setIsPressed4] = useState(false);
  const [isPressed5, setIsPressed5] = useState(false);

  const changeAll = () => {
    setIsPressed(!isPressed);
    if (!isPressed) {
      setIsPressed1(false);
      setIsPressed2(false);
      setIsPressed3(false);
      setIsPressed4(false);
      setIsPressed5(false);
    } else {
      setIsPressed(true);
    }
  };
  const changeAll1 = () => {
    setIsPressed1(!isPressed1);
    if (!isPressed1) {
      setIsPressed(false);
      setIsPressed2(false);
      setIsPressed3(false);
      setIsPressed4(false);
      setIsPressed5(false);
    } else {
      setIsPressed1(true);
    }
  };
  const changeAll2 = () => {
    setIsPressed2(!isPressed2);
    if (!isPressed2) {
      setIsPressed(false);
      setIsPressed1(false);
      setIsPressed3(false);
      setIsPressed4(false);
      setIsPressed5(false);
    } else {
      setIsPressed2(true);
    }
  };
  const changeAll3 = () => {
    setIsPressed3(!isPressed3);
    if (!isPressed3) {
      setIsPressed(false);
      setIsPressed1(false);
      setIsPressed2(false);
      setIsPressed4(false);
      setIsPressed5(false);
    } else {
      setIsPressed3(true);
    }
  };
  const changeAll4 = () => {
    setIsPressed4(!isPressed4);
    if (!isPressed4) {
      setIsPressed(false);
      setIsPressed1(false);
      setIsPressed3(false);
      setIsPressed2(false);
      setIsPressed5(false);
    } else {
      setIsPressed4(true);
    }
  };
  const changeAll5 = () => {
    setIsPressed5(!isPressed5);
    if (!isPressed5) {
      setIsPressed(false);
      setIsPressed1(false);
      setIsPressed3(false);
      setIsPressed2(false);
      setIsPressed4(false);
    } else {
      setIsPressed5(true);
    }
  };

  const idUser = useSelector(state => state.login.userInfo.user._id);

  const goOrder = async () => {
    try {
      const response = await fetch(
        'https://sever-gocpho.herokuapp.com/bill/add',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: idUser,
            name: 'banh beo',
            img: 'banhbao.js',
            price: totalCost,
            quantity: 10,
            address: 'abc',
            payment: 'xyz',
          }),
        },
      );
      const data = await response.json();
      setResponseBill(data);
      console.log('Data reponse: ', data);
      if (data.message == 'success') {
        navigation.navigate('OrderAccepted');
      } else {
        navigation.navigate('OrderFailed');
      }
    } catch (error) {
      setResponseBill(error);
      console.log('Data res: ', error);
      navigation.navigate('OrderFailed');
    }
  };

  const dataAddress = useSelector(state => state.address.data);
  const addressStatus = useSelector(state => state.address.status);
  const error = useSelector(state => state.address.error);

  // useEffect(() => {
  //   if (addressStatus === 'idle') {
  //     // Check if the address fetching is not in progress
  //     dispatch(fetchGetAddress(idUser));
  //   }
  // }, [dispatch, idUser, addressStatus]);
  useEffect(()=>{
    dispatch(fetchGetAddress(idUser))
  }, [dispatch, idUser])

  return (
    <ScrollView style={[styles.container]}>
      {/* địa chỉ giao hàng */}
      <Pressable onPress={() => navigation.navigate('ChooseAddress')}>
        <View style={[styles.location]}>
          <View style={[styles.locationTop]}>
            <Text style={[styles.locationTextRight]}>Delivery Location</Text>
            {/* <Text style={[styles.locationTextLeft]}>Change</Text> */}
          </View>

          <View style={[styles.locationBottom]}>
            <Image
              source={require('../../../../media/images/IconLocation.png')}
              style={[styles.imgLocation]}
            />
            <Text style={[styles.locationTextBottom]}>
              1234 Main Street, New York, NY 10001
            </Text>
          </View>
        </View>
      </Pressable>

      {/* Chọn Store Gần nhất */}

      <View style={[styles.PickStore]}>
        <View style={[styles.PickStore1]}>
          <View style={[styles.PickStoreLeft]}>
            <Text style={[styles.PickStoreName]}>H Shop form Anh Huy</Text>
            <Text style={[styles.PickStoreSistance]}>15km</Text>
          </View>
          <Image
            source={require('../../../../media/images/IconArrowRight.png')}
            style={[styles.imgArrowRight]}
          />
        </View>
        <View
          style={[
            styles.PickStore1,
            {borderTopColor: 'black', borderTopWidth: 1},
          ]}>
          <View style={[styles.PickStoreLeft]}>
            <Text style={[styles.PickStoreName]}>Shop Luxury Anh Tài</Text>
            <Text style={[styles.PickStoreSistance]}>10km</Text>
          </View>
          <Image
            source={require('../../../../media/images/IconArrowRight.png')}
            style={[styles.imgArrowRight]}
          />
        </View>
      </View>

      {/* Chọn ngày, giờ giao hàng */}
      <View style={[styles.PickDate]}>
        <Text style={[styles.PickDateText]}>Expected date & Time</Text>
        <Pressable
          style={[styles.PickDateButton]}
          onPress={() => setOpen(true)}>
          <Text style={[styles.PickDateButtonText]}>{selectdate}</Text>
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              setSelectdate(date.toISOString().substring(0, 10));
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </Pressable>
        {/* Chọn giờ giao hàng */}
        <View style={[styles.PickTime]}>
          <Pressable
            style={[
              styles.PickTimeButton,
              isPressed && styles.PickTimeButtonPressed,
            ]}
            onPress={() => SetTime('8 AM - 11 AM') || changeAll()}>
            <Text style={[styles.PickTimeButtonText]}>8 AM - 11 AM</Text>
          </Pressable>

          <Pressable
            style={[
              styles.PickTimeButton,
              isPressed1 && styles.PickTimeButtonPressed,
            ]}
            onPress={() => SetTime('11 AM - 13 PM') || changeAll1()}>
            <Text style={[styles.PickTimeButtonText]}>11 AM - 13 PM</Text>
          </Pressable>

          <Pressable
            style={[
              styles.PickTimeButton,
              isPressed2 && styles.PickTimeButtonPressed,
            ]}
            onPress={() => SetTime('13 PM - 15 PM') || changeAll2()}>
            <Text style={[styles.PickTimeButtonText]}>13 PM - 15 PM</Text>
          </Pressable>

          <Pressable
            style={[
              styles.PickTimeButton,
              isPressed3 && styles.PickTimeButtonPressed,
            ]}
            onPress={() => SetTime('15 PM - 17 PM') || changeAll3()}>
            <Text style={[styles.PickTimeButtonText]}>15 PM - 17 PM</Text>
          </Pressable>

          <Pressable
            style={[
              styles.PickTimeButton,
              isPressed4 && styles.PickTimeButtonPressed,
            ]}
            onPress={() => SetTime('17 PM - 19 PM') || changeAll4()}>
            <Text style={[styles.PickTimeButtonText]}>17 PM - 19 PM</Text>
          </Pressable>

          <Pressable
            style={[
              styles.PickTimeButton,
              isPressed5 && styles.PickTimeButtonPressed,
            ]}
            onPress={() => SetTime('19 PM - 21 PM') || changeAll5()}>
            <Text style={[styles.PickTimeButtonText]}>19 PM - 21 PM</Text>
          </Pressable>
        </View>
      </View>
      {/* Lấy hàng tại cửa hàng */}
      <View style={[styles.InStoryPickup]}>
        <Text style={[styles.InStoryPickupText]}>In-Store Pickup</Text>
        <Text style={[styles.InStoryPickupText]}>FREE</Text>
        <Text style={[styles.InStoryPickupInfo]}>
          Some Stores May Be Temporarily Unavalable.
        </Text>
        <Image
          source={require('../../../../media/images/IconArrowRight.png')}
          style={[styles.imgArrowRight]}
        />
      </View>
      {/* // Thông tin đơn hàng */}
      <Pressable
        style={[styles.SeeItemes]}
        onPress={() => navigation.navigate('Itemes')}>
        <View style={[styles.SeeItemesLeft]}>
          <Image
            source={require('../../../../media/images/IconStore.png')}
            style={[styles.imgIconStore]}
          />
          <Text style={[styles.SeeItemesText]}>See Items</Text>
        </View>
        <Image
          source={require('../../../../media/images/IconArrowRight.png')}
          style={[styles.imgArrowRightItem]}
        />
      </Pressable>
      {/* // Phương thức thanh toán */}
      <View style={[styles.PaymentMethod]}>
        <Text style={[styles.PaymentMethodText]}>Payment Method</Text>
        <View style={[styles.PaymentMethodTop]}>
          <Image
            source={require('../../../../media/images/zalopay.png')}
            style={[styles.imgCard1]}
          />
          <Text style={[styles.PaymentMethodTopText]}>ZaloPay</Text>
          <Image
            source={require('../../../../media/images/TickedOn.png')}
            style={[styles.TickedOn]}
          />
        </View>
        <View style={[styles.PaymentMethodBottom]}>
          <Image
            source={require('../../../../media/images/MethodDelivery.png')}
            style={[styles.imgCard2]}
          />
          <Text style={[styles.PaymentMethodTopText]}>Cash on Delivery</Text>
          <Image
            source={require('../../../../media/images/TickedOn.png')}
            style={[styles.TickedOn]}
          />
        </View>
      </View>

      {/* //Giá trị đơn hàng */}
      <View style={[styles.OrderValue]}>
        <Text style={[styles.OrderValueTitle]}>Order Sammery</Text>
        {listData.map((product, index) => (
          <View style={[styles.OrderValueContent]} key={index}>
            <Text style={[styles.OrderValueContentText]}>{product.name}</Text>
            <Text style={[styles.OrderValueContentText]}>
              $ {product.price * product.quantity}
            </Text>
          </View>
        ))}

        <View style={[styles.OrderValueTotal]}>
          <Text style={[styles.TotalText]}>Total</Text>
          <Text style={[styles.TotalText]}>$ {totalCost}</Text>
        </View>
      </View>

      {/* // Thanh toán */}
      <Pressable
        style={[styles.btnAccept]}
        onPress={() => {
          //if thafnh cong
          navigation.navigate('OrderAccepted');
          goOrder();
        }}>
        <Text style={[styles.btnAcceptText]}>Track Order</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  imgCard1: {
    width: 80,
    height: 30,
  },
  imgCard2: {},
  anotherLocation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  PickTimeButtonPressed: {
    width: 94,
    height: 40,
    backgroundColor: 'red',
    color: 'while',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
  },
  PickStoreSistance: {
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#6D3805',
    paddingBottom: 16,
  },
  PickStoreName: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#6D3805',
    paddingBottom: 16,
    marginTop: 16,
  },
  PickStoreLeft: {
    justifyContent: 'space-between',
  },
  PickStore1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  PickStore: {
    marginTop: 16,
    backgroundColor: '#FFF4E9',
    borderRadius: 20,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },
  TotalText: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#6D3805',
  },
  OrderValueTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#FFF4E9',
    borderRadius: 20,
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  OrderValueContentText: {
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: '#6D3805',
  },
  OrderValueContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  OrderValueTitle: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#6D3805',
    paddingLeft: 16,
    paddingTop: 16,
  },
  OrderValue: {
    width: '100%',
    marginTop: 23,
    backgroundColor: '#FFF4E9',
    borderRadius: 20,
  },
  TickedOn: {
    marginLeft: '30%',
  },
  PaymentMethodBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    paddingLeft: 16,
    marginTop: 16,
  },
  PaymentMethodTopText: {
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#6D3805',
    paddingLeft: 16,
  },
  PaymentMethodTop: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  PaymentMethodText: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#6D3805',
    padding: 16,
  },
  PaymentMethod: {
    width: '100%',

    marginTop: 23,
    backgroundColor: '#FFF4E9',
    borderRadius: 20,
  },
  SeeItemesText: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#6D3805',
    padding: 39,
    paddingLeft: 10,
    alignItems: 'center',
  },
  SeeItemesLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  SeeItemes: {
    width: '100%',
    height: 100,
    backgroundColor: '#FFF4E9',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 40,
  },
  imgArrowRight: {
    marginTop: 26,
  },
  InStoryPickupInfo: {
    paddingTop: 12,
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#6D3805',
  },
  InStoryPickupText: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 27,
    color: '#6D3805',
  },
  InStoryPickup: {
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
  },
  PickTimeButton: {
    width: 94,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
  },
  PickTime: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  PickDateButtonText: {
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
  },
  PickDateButton: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  PickDateText: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#6D3805',
    marginTop: 16,
    marginLeft: 16,
  },
  PickDate: {
    width: '100%',
    height: 230,
    backgroundColor: '#FFF4E9',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFE6CC',
    marginTop: 20,
  },
  locationTextBottom: {
    fontFamily: 'Klarna Text',
    paddingLeft: 10,
    fontWeight: '400',
    width: 180,
    fontSize: 14,
    lineHeight: 17,
    color: '#6D3805',
  },
  imgLocation: {},
  locationBottom: {
    paddingLeft: 15,
    flexDirection: 'row',
  },
  locationTextLeft: {
    fontFamily: 'Klarna Text',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.17,
    color: '#FF5E00',
  },
  locationTextRight: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.17,
    color: '#6D3805',
  },
  locationTop: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    width: '100%',
    height: 103,
    backgroundColor: '#FFF4E9',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFE6CC',
  },
  btnAcceptText: {
    fontFamily: 'Klarna Text',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.17,
    color: '#FFFFFF',
  },
  btnAccept: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF5E00',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  container: {
    padding: 16,
    textAlign: 'center',
    flex: 1,
  },
});
