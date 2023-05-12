import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Payment from '../screens/Payment';
import Cart from '../screens/Cart';
import Itemes from '../screens/Itemes';
import OrderAccepted from '../screens/OrderAccepted';
import OrderFailed from '../screens/OrderFailed';
const Stack = createNativeStackNavigator();

const Navigations = {
  Stack: [
    { component: Cart, name: '_Cart', options: {
      headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 24, color: '#FF5E00', fontWeight: '700' }}>Cart</Text>
          </View>
      ),
  } },
    { component: Payment, name: 'Payment', options: {} },
    { component: Itemes, name: 'Itemes', options: {} },
    { component: OrderAccepted, name: 'OrderAccepted', options: {} },
    { component: OrderFailed, name: 'OrderFailed', options: {} },
  ]
}

const CartNavigation = () => {
  return (
    <Stack.Navigator
    initialRouteName={"Explores"}
    screenOptions={{ 
      // headerShown: false,
      headerShadowVisible: false,
      headerTitleStyle: {  fontSize: 24, fontWeight: '700'},
      headerTitleAlign: 'center',
      headerTintColor: '#FF5E00',}}
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

export default CartNavigation