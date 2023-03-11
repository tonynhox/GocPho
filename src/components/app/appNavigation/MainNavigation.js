import React from 'react'
import { Image, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CartNavigation from '../cart/navigation/CartNavigation'
import OrdersNavigation from '../user/navigation/OrdersNavigation'
import Shop from '../shop/screens/Shop'
import Explore from '../shop/screens/Explore'
import Cart from '../cart/screens/Cart'
import FavoriteScreen from '../shop/screens/FavoriteScreen'
const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (

    <Tab.Navigator>
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Account" component={OrdersNavigation} />
  </Tab.Navigator>
    )
}

export default MainNavigation