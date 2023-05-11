import { View, Text, Image } from 'react-native'
import React from 'react'

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HeaderBackButton } from '@react-navigation/elements';

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
import { TouchableOpacity } from 'react-native-gesture-handler';



const Tab = createMaterialTopTabNavigator();

const TopTabOrder = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#F37A20',
        tabBarInactiveTintColor: 'gray',
        tabBarIndicatorStyle: {
          backgroundColor: '#FF5E00',
          width: '50%',
        }, tabBarIndicatorContainerStyle: { marginHorizontal: 40, paddingHorizontal: 80 }
      }}

    >
      <Tab.Screen name="Ongoing" component={Ongoing} />
      <Tab.Screen name="Settings" component={History} />
    </Tab.Navigator>
  )
}
//abc
const stackTop = createNativeStackNavigator();

const StackTopOrder = () => {
  return (
    <stackTop.Navigator
      screenOptions={({ navigation, route }) => ({
        headerShadowVisible: false,
        headerTitleStyle: { fontSize: 24, fontWeight: '700' },
        headerTitleAlign: 'center',
        headerTintColor: '#FF5E00',
        // headerBackImageSource: require('../../../../media/images/icBack.png'),
        // headerBackImageStyle: { width: 100, height: 30 },
        headerLeft: (props) => (
          <HeaderBackButton
            {...props}
            onPress={() => navigation.goBack()}
          >
            {/* <Image source={require('../../../../media/images/icBack.png')} style={{ width: 20, height: 20, marginLeft: 10 }} /> */}
          </HeaderBackButton>
        ),
      })}
    >
      <stackTop.Screen name="Orders" component={TopTabOrder} />
    </stackTop.Navigator>
  )

}

const StackProfile = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <StackProfile.Navigator
      screenOptions={{ headerShown: false }}

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
    { component: Account, name: '_Account', options: {headerTitle: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, color: '#FF5E00', fontWeight: '700' }}>Account</Text>
      </View>
  ),} },
    { component: ProfileNavigation, name: 'Profile', options: {} },
    { component: StackTopOrder, name: 'order', options: { headerShown: false } },
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
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: { fontSize: 24, fontWeight: '700' },
        headerTitleAlign: 'center',
        headerTintColor: '#FF5E00',
      }}
      initialRouteName="_Account"
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