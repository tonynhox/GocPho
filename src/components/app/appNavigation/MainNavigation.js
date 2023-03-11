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

    <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => {
            if (route.name == 'Shop') {
              if (!focused) {
                return (
                  <Image source={require('../../../media/iconNavigation/shop.png')} />
                  
                );
              } else {
                return (
                  <Image
                    source={require('../../../media/iconNavigation/shopPressed.png')}
                  />
                );
              }
            } else if (route.name == 'Explore') {
              if (!focused) {
                return (
                  <Image source={require('../../../media/iconNavigation/explore.png')} />
                );
              } else {
                return (
                  <Image
                    source={require('../../../media/iconNavigation/explorePressed.png')}
                  />
                );
              }
            } else if (route.name == 'Cart') {
              if (!focused) {
                return (
                  <Image source={require('../../../media/iconNavigation/cart.png')} />
                );
              } else {
                return (
                  <Image
                    source={require('../../../media/iconNavigation/cartPressed.png')}
                  />
                );
              }
            } else if (route.name == 'Favorite') {
              if (!focused) {
                return (
                  <Image
                    source={require('../../../media/iconNavigation/favorite.png')}
                  />
                );
              } else {
                return (
                  <Image
                    source={require('../../../media/iconNavigation/favoritePressed.png')}
                  />
                );
              }
            } else if (route.name == 'Account') {
              if (!focused) {
                return (
                  <Image source={require('../../../media/iconNavigation/account.png')} />
                );
              } else {
                return (
                  <Image
                    source={require('../../../media/iconNavigation/accountPressed.png')}
                  />
                );
              }
            }
          },
          tabBarLabel: ({focused}) => {
            if (route.name == 'Shop') {
              if (focused)
                return (
                  <Text style={{color: 'FF5E00', fontWeight: 'bold'}}>
                    Shop
                  </Text>
                );
              else
                return (
                  <Text style={{color: '6D3805', fontStyle: 'italic'}}>
                    Shop
                  </Text>
                );
            } else if (route.name == 'Explore'){
              if (focused)
                return (
                  <Text style={{color: 'FF5E00', fontWeight: 'bold'}}>
                    Explore
                  </Text>
                );
              else
                return (
<Text style={{color: '6D3805', fontStyle: 'italic'}}>
                    Explore
                  </Text>
                );
            } else if (route.name == 'Cart'){
              if (focused)
                return (
                  <Text style={{color: 'FF5E00', fontWeight: 'bold'}}>
                    Cart
                  </Text>
                );
              else
                return (
                  <Text style={{color: '6D3805', fontStyle: 'italic'}}>
                    Cart
                  </Text>
                );
            }
             else if (route.name == 'Favorite'){
              if (focused)
                return (
                  <Text style={{color: 'FF5E00', fontWeight: 'bold'}}>
                    Favorite
                  </Text>
                );
              else
                return (
                  <Text style={{color: '6D3805', fontStyle: 'italic'}}>
                    Favorite
                  </Text>
                );
            }
             else if (route.name == 'Account'){
              if (focused)
                return (
                  <Text style={{color: 'FF5E00', fontWeight: 'bold'}}>
                    Account
                  </Text>
                );
              else
                return (
                  <Text style={{color: '6D3805', fontStyle: 'italic'}}>
                    Account
                  </Text>
                );
            }
            
          },
        })}>

      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Account" component={OrdersNavigation} />
  </Tab.Navigator>
    )
}

export default MainNavigation