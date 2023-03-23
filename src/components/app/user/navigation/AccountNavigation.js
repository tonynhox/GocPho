import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Account from '../screens/AccountScreen';
import Profile from '../screens/ProfileScreen';
import Order from '../../shop/screens/OrderScreen';
import Address from '../screens/Address';
import Payment from '../../cart/screens/Payment';
import Ongoing from '../screens/Ongoing';
import History from '../screens/History';
import EditProfile from '../screens/EditProfile';
import ChangePassword from '../screens/ChangePassword';
import Mycards from '../screens/Mycards1';



const Tab = createMaterialTopTabNavigator();

const TopTabOrder = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
          tabStyle: { 
            width: '70%', // thiết lập chiều rộng của mỗi tab được tính tự động
            marginLeft: '5%', // đẩy các tab sang bên trái
            marginRight: '5%', // đẩy các tab sang bên phải
            justifyContent: 'center', // căn giữa các tab theo chiều ngang
            
          },
          tabBar: {
            tabStyle: { 
              padding: 10, // thiết lập khoảng cách xung quanh các tab là 10px
            }},
          tabBarActiveTintColor: '#F37A20', // màu sắc của chữ cho tab được chọn
          tabBarInactiveTintColor: 'gray', // màu sắc của chữ cho các tab không được chọn
          tabBarIndicatorStyle: { backgroundColor: '#FF5E00', } // tùy chọn để thay đổi màu của dòng chỉ trỏ đến tab đang được chọn
        }}
    >
      <Tab.Screen name="Ongoing" component={Ongoing} />
      <Tab.Screen name="Settings" component={History} />
    </Tab.Navigator>
  )
}
const stackTop = createNativeStackNavigator();

const StackTopOrder = () => {
  return (
    <stackTop.Navigator 
    screenOptions={{ headerShadowVisible: false,}}
    

    >
      <stackTop.Screen name="Orders" component={TopTabOrder} />
    </stackTop.Navigator>
  )

}

const StackProfile = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <StackProfile.Navigator 
    screenOptions={{ headerShown: false}}
    
    >
      <StackProfile.Screen name="ProfileScreen" component={Profile} />
      <StackProfile.Screen name="EditProfile" component={EditProfile} />
      <StackProfile.Screen name="ChangePassword" component={ChangePassword} />
      <StackProfile.Screen name="Mycards" component={Mycards} />
    </StackProfile.Navigator>
  )

}


const Navigations = {
  Stack: [
    { component: Account, name: '_Account', options: {} },
    { component: ProfileNavigation, name: 'Profile', options: {} },
    { component: StackTopOrder, name: 'order', options: {} },
    { component: Address, name: 'Address', options: {} },
    { component: Payment, name: 'Payment', options: {} },
  ]
}

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Main = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      {
        Navigations.Stack.map((item, index) => {
          return (
            <Stack.Screen initialParams={{ id: 20 }} key={index} name={item.name} component={item.component} options={item.options} />
          )
        })
      }
    </Stack.Navigator>
  )
}


const AccountNavigation = () => {
  return (
    <StackNavigation />
  )
}

//chưa tối ưu

export default AccountNavigation