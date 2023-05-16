import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useEffect} from 'react';
import {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {
  addListBills,
  changeCurrentBillId,
  fetchBillById,
} from '../../../../redux-toolkit/reducer_slice/shop_slice/orderSlice';
import {fetchUserProfile} from '../../../../redux-toolkit/reducer_slice/cart_slice/getCartSlice';

const Ongoing = props => {
  const {navigation} = props;

  let statusDelivery = 3;

  // const idUser = useSelector(state => state.login.userInfo.user._id);
  // console.log('ID USER: ', idUser);
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

  const billOrder = useSelector(state => state.ordered.data.bill);
  // const billOrder = [
  //   {
  //     _id: '645e6fe0cae0f5d9ec47e5ab',
  //     user: '645dfe4f46149336eca6a19e',
  //     detail: [
  //       {
  //         name: 'Hu tietiedtiedu',
  //         image: 'banhbao.js',
  //         price: 5,
  //         quantity: 5,
  //         _id: '645e6fe0cae0f5d9ec47e5ac',
  //       },
  //     ],
  //     address: 'abc',
  //     payment: 'xyz',
  //     status: [
  //       {
  //         number: 1,
  //         name: 'Đang chờ xử lý',
  //         date: 'Fri May 12 2023 16:57:04 GMT+0000 (Coordinated Universal Time)',
  //         _id: '645e6fe0cae0f5d9ec47e5ad',
  //       },
  //     ],
  //     __v: 0,
  //   },
  //   {
  //     _id: '645f31930949e591dab06892',
  //     user: '645dfe4f46149336eca6a19e',
  //     detail: [
  //       {
  //         name: 'banh beo',
  //         image: 'banhbao.js',
  //         price: 12,
  //         quantity: 5,
  //         _id: '645f31930949e591dab06893',
  //       },
  //     ],
  //     address: 'abc',
  //     payment: 'xyz',
  //     status: [
  //       {
  //         number: 1,
  //         name: 'Đang chờ xử lý',
  //         date: 'Sat May 13 2023 06:43:31 GMT+0000 (Coordinated Universal Time)',
  //         _id: '645f31930949e591dab06894',
  //       },
  //     ],
  //     __v: 0,
  //   },
  //   {
  //     _id: '6462e7db4a02ee2153252037',
  //     user: '645dfe4f46149336eca6a19e',
  //     detail: [
  //       {
  //         name: 'banh beo',
  //         image: 'banhbao.js',
  //         price: 222222,
  //         quantity: 10,
  //         _id: '6462e7db4a02ee2153252038',
  //       },
  //     ],
  //     address: 'abc',
  //     payment: 'xyz',
  //     status: [
  //       {
  //         number: 1,
  //         name: 'Đang chờ xử lý',
  //         date: 'Tue May 16 2023 02:18:03 GMT+0000 (Coordinated Universal Time)',
  //         _id: '6462e7db4a02ee2153252039',
  //       },
  //     ],
  //     __v: 0,
  //   },
  // ];
  const billData = useSelector(state => state.ordered.data.bill);
  // const billOrder = billData.bill
  console.log('BILL ORDER: ', billOrder);
  useEffect(() => {
    dispatch(fetchBillById(idUser));
  }, [idUser]);

  // console.log("BILL: ", billOrder)
  // dispatch(addListBills(billOrder))

  let idReceived = useSelector(state => state.ordered.currentBillId);

  // console.log('BBBBBB: ', billOrder);
  const [idBills, setIdBills] = useState(0);

  if (!billOrder) {
    return;
  } else {
    billOrder.map((bill, index) => {
      if (bill._id == idReceived) {
        statusDelivery = bill.status[0].number;
      }
    });
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

  return (
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
            <View style={[styles.item]}>
              <Image
                source={require('../../../../media/images/IconCheckOn.png')}
                style={[styles.imgCheckOn]}
              />
              <Image
                source={require('../../../../media/images/IconItem.png')}
                style={[styles.imgItem]}
              />
              <Text style={[styles.textItem]}>We are packin your items...</Text>
            </View>
          )}
          {statusDelivery === 2 && (
            <>
              <View style={[styles.item]}>
                <Image
                  source={require('../../../../media/images/IconCheckOn.png')}
                  style={[styles.imgCheckOn]}
                />
                <Image
                  source={require('../../../../media/images/IconItem.png')}
                  style={[styles.imgItem]}
                />
                <Text style={[styles.textItem]}>
                  We are packing your items...
                </Text>
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
                <Text style={[styles.textItem]}>
                  Your order is delivering to your location...
                </Text>
              </View>
            </>
          )}
          {statusDelivery === 3 && (
            <>
              <View style={[styles.item]}>
                <Image
                  source={require('../../../../media/images/IconCheckOn.png')}
                  style={[styles.imgCheckOn]}
                />
                <Image
                  source={require('../../../../media/images/IconItem.png')}
                  style={[styles.imgItem]}
                />
                <Text style={[styles.textItem]}>
                  We are packing your items...
                </Text>
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
                <Text style={[styles.textItem]}>
                  Your order is delivering to your location...
                </Text>
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
                <Text style={[styles.textItem]}>Your order is received.</Text>
              </View>
            </>
          )}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
};

export default Ongoing;

const styles = StyleSheet.create({
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
});
