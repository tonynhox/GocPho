import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Avatar from '../user/screens/Avatar';
import MainNavigation from './MainNavigation';
import Shop from '../shop/screens/Shop';

const FullMainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="avatar" component={Avatar} />
      <Stack.Screen name="main" component={MainNavigation} />
    </Stack.Navigator>
  );
};

export default FullMainNavigation;

const styles = StyleSheet.create({});
