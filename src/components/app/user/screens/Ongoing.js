import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  RefreshControl,
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

const Ongoing = props => {
  const {navigation} = props;
  const [refreshing, setRefreshing] = useState(false);

  const role = 'admin'

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

  let billOrder = []
  if(role != 'admin'){
    billOrder = useSelector(state => state.ordered.data.bill);
    useEffect(() => {
      dispatch(fetchBillById(idUser));
    }, [idUser]);
  }else{
    billOder = useSelector(state => state.ordered.data.bill)
    console.log("BILL ORDER ADMIN: ", billOrder)
    useEffect(()=>{
      dispatch(fetchAllBills())
    },[])
  }

  let idReceived = useSelector(state => state.ordered.currentBillId);

  const changeStatusBill = num => {
    let currentStatus = statusDelivery;
    if (currentStatus < 3) {
      currentStatus++;
    }
    dispatch(fetchStatusBill({idReceived, currentStatus, message: 'message'}));
  };

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
  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);
  // }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl  />
      }>
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
            <Pressable onPress={() => changeStatusBill(statusDelivery)}>
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
                  We are packin your items...
                </Text>
              </View>
            </Pressable>
          )}
          {statusDelivery === 2 && (
            <>
              <Pressable onPress={() => changeStatusBill(statusDelivery)}>
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
              </Pressable>
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
    </ScrollView>
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
