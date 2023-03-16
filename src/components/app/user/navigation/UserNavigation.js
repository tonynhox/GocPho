import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../../user/screens/Welcome';
import SignUp from '../../user/screens/SignUp';
import SignPass from '../../user/screens/SignPass';
import SignCode from '../../user/screens/SignCode';
import Login from '../../user/screens/LogIn';


const Navigations = {
  Stack: [
    { component: Welcome, name: 'Welcome', options: {} },
    { component: SignUp, name: 'SignUp', options: {} },
    { component: SignPass, name: 'SignPass', options: {} },
    { component: SignCode, name: 'SignCode', options: {} },
    { component: Login, name: 'Login', options: {} },
  ]
}

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Main = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      {
        Navigations.Stack.map((item, index) => {
          return (
            <Stack.Screen initialParams={{ id: 20 }} key={index} name={item.name} component={item.component} options={item.options} />
          )})
        }
      </Stack.Navigator>
    )
  }


const UserNavigation = () => {
  return (
    <StackNavigation />
  )
}

//chưa tối ưu

export default UserNavigation