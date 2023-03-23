import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Payment from '../screens/Payment';
import Cart from '../screens/Cart';

const Stack = createNativeStackNavigator();

const Navigations = {
  Stack: [
    { component: Cart, name: '_Cart', options: {} },
    
    { component: Payment, name: 'Payment', options: {} },
  ]
}

const CartNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      {
        Navigations.Stack.map((item, index) => {
          return (
            <Stack.Screen initialParams={{ id: 20 }} key={index} name={item.name} component={item.component} options={[item.options, { headerShown: false }]} />
          )
        })
      }
    </Stack.Navigator>
  )
}

export default CartNavigation