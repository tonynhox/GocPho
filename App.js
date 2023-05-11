import {StyleSheet, Text, View, Button} from 'react-native';
import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import UserNavigation from './src/components/app/user/navigation/UserNavigation';
import CartNavigation from './src/components/app/cart/navigation/CartNavigation';
import OrdersNavigation from './src/components/app/user/navigation/AccountNavigation';
import Cart from './src/components/app/cart/screens/Cart';
import Itemes from './src/components/app/cart/screens/Itemes';
import Payment from './src/components/app/cart/screens/Payment';
import OrderAccepted from './src/components/app/cart/screens/OrderAccepted';
import OrderFailed from './src/components/app/cart/screens/OrderFailed';
import AppNavigation from './src/components/app/appNavigation/AppNavigation';
import MainNavigation from './src/components/app/appNavigation/MainNavigation';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import History from './src/components/app/user/screens/History';
import Ongoing from './src/components/app/user/screens/Ongoing';
import {Provider} from 'react-redux';
import {store} from './src/redux-toolkit/store';
import LogIn from './src/components/app/user/screens/LogIn';
import Avatar from './src/components/app/user/screens/Avatar';
import {useSelector} from 'react-redux';
// import CartAPI from './src/components/app/cart/screens/CartAPI';
import Shop from './src/components/app/shop/screens/Shop';
import ProfileScreen from './src/components/app/user/screens/ProfileScreen';
import Mango from './src/components/app/shop/screens/Mango';
import Explore from './src/components/app/shop/screens/Explore';
import FavoriteScreen from './src/components/app/shop/screens/FavoriteScreen';
import Fruit from './src/components/app/shop/screens/Fruit';
import Address from './src/components/app/user/screens/Address';

const App = () => {

  return (
    
    <Provider store={store}>
        <AppNavigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
