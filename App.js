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

import AppNavigation from './src/components/app/appNavigation/AppNavigation';
import MainNavigation from './src/components/app/appNavigation/MainNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

import {Provider} from 'react-redux';
import {store} from './src/redux-toolkit/store';
import {MenuProvider} from 'react-native-popup-menu';
import Payment from './src/components/app/cart/screens/Payment';
import ChooseMethodPayment from './src/components/app/cart/screens/ChooseMethodPayment';

const App = () => {
  return (
    
    <Provider store={store}>
      <MenuProvider>
        <AppNavigation />
        {/* <Payment/> */}
      </MenuProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
