import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import FavoriteScreen from './src/components/app/shop/screens/FavoriteScreen'
import AccountScreen from './src/components/app/user/screens/AccountScreen'
import ProfileScreen from './src/components/app/user/screens/ProfileScreen'
import OrderScreen from './src/components/app/shop/screens/OrderScreen'

import SignCode from './src/components/app/user/screens/SignCode';
import SignIn from './src/components/app/user/screens/LogIn';
import SignPass from './src/components/app/user/screens/SignPass';
import SignUp from './src/components/app/user/screens/SignUp';
import Welcome from './src/components/app/user/screens/Welcome';
import Cart from './src/components/app/cart/screens/Cart';
import Mango from './src/components/app/shop/screens/Mango';
import Address from './src/components/app/user/screens/Address';
import NewAddress from './src/components/app/user/screens/NewAddress';
import EditAddress from './src/components/app/user/screens/EditAddress';
import NewsAddress from './src/components/app/user/screens/NewAddress';

import OrdersNavigation from './src/components/app/user/navigation/OrdersNavigation';
// import {NavigationContainer} from '@react-navigation/native';
import History from './src/components/app/user/screens/History';
import Ongoing from './src/components/app/user/screens/Ongoing';
import OrderFailed from './src/components/app/cart/screens/OrderFailed';
import OrderAccepted from './src/components/app/cart/screens/OrderAccepted';
import Payment from './src/components/app/cart/screens/Payment';

import Mycards1 from './src/components/app/user/screens/Mycards1';
import EditProfile from './src/components/app/user/screens/EditProfile';
import ChangePassword from './src/components/app/user/screens/ChangePassword';
import Newcard from './src/components/app/user/screens/Newcard';
import Nosavecard from './src/components/app/user/screens/Nosavecard';

const App = () => {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: 'white',
    }}>
      <Nosavecard/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
