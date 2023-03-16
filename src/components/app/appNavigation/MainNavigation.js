import React from 'react'
import { Image, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartNavigation from '../cart/navigation/CartNavigation'
import OrdersNavigation from '../user/navigation/AccountNavigation'
import Shop from '../shop/screens/Shop'
import Explore from '../shop/screens/Explore'
import Cart from '../cart/screens/Cart'
import FavoriteScreen from '../shop/screens/FavoriteScreen'
import Mango from '../shop/screens/Mango'
import Fruit from '../shop/screens/Fruit'
import Payment from '../cart/screens/Payment'
import Itemes from '../cart/screens/Itemes'
import OrderAccepted from '../cart/screens/OrderAccepted'
import AccountScreen from '../user/screens/AccountScreen'
import EditProfile from '../user/screens/EditProfile'
import ProfileScreen from '../user/screens/ProfileScreen'
import OrderScreen from '../shop/screens/OrderScreen'
import Address from '../user/screens/Address'
import ChangePassword from '../user/screens/ChangePassword'
import Mycards1 from '../user/screens/Mycards1'
import Newcard from '../user/screens/Newcard'
import Nosavecard from '../user/screens/Nosavecard'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();




const Navigations = {
  Stack: [
    { component: Fruit, name: 'Fruit', options: {} },//note lại cái này(sai sai)
    { component: Mango, name: 'Mango', options: {} },
    { component: OrderScreen, name: 'OrderScreen', options: {} }, //note lại cái này(sai sai)
    { component: ProfileScreen, name: 'ProfileScreen', options: {} },
    { component: EditProfile, name: 'EditProfile', options: {} },
    { component: Address, name: 'Address', options: {} },
    { component: ChangePassword, name: 'ChangePassword', options: {} },
    { component: Mycards1, name: 'Mycards1', options: {} },
    { component: Payment, name: 'Payment', options: {} },
    { component: Itemes, name: 'Itemes', options: {} },
    { component: Explore, name: 'Explore', options: {} },
    
    
  ],
  Tabs: [
    { component: Shop, name: 'Shop', options: {} },
    { component: Explore, name: 'Explore', options: {} },
    { component: Cart, name: 'Cart', options: {} },
    { component: FavoriteScreen, name: 'Favorite', options: {} },
    { component: AccountScreen, name: 'Account', options: {} },
  ]
}


const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
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
        tabBarLabel: ({ focused }) => {
          if (route.name == 'Shop') {
            if (focused)
              return (
                <Text style={{ color: 'FF5E00', fontWeight: 'bold' }}>
                  Shop
                </Text>
              );
            else
              return (
                <Text style={{ color: '6D3805', fontStyle: 'italic' }}>
                  Shop
                </Text>
              );
          } else if (route.name == 'Explore') {
            if (focused)
              return (
                <Text style={{ color: 'FF5E00', fontWeight: 'bold' }}>
                  Explore
                </Text>
              );
            else
              return (
                <Text style={{ color: '6D3805', fontStyle: 'italic' }}>
                  Explore
                </Text>
              );
          } else if (route.name == 'Cart') {
            if (focused)
              return (
                <Text style={{ color: 'FF5E00', fontWeight: 'bold' }}>
                  Cart
                </Text>
              );
            else
              return (
                <Text style={{ color: '6D3805', fontStyle: 'italic' }}>
                  Cart
                </Text>
              );
          }
          else if (route.name == 'Favorite') {
            if (focused)
              return (
                <Text style={{ color: 'FF5E00', fontWeight: 'bold' }}>
                  Favorite
                </Text>
              );
            else
              return (
                <Text style={{ color: '6D3805', fontStyle: 'italic' }}>
                  Favorite
                </Text>
              );
          }
          else if (route.name == 'Account') {
            if (focused)
              return (
                <Text style={{ color: 'FF5E00', fontWeight: 'bold' }}>
                  Account
                </Text>
              );
            else
              return (
                <Text style={{ color: '6D3805', fontStyle: 'italic' }}>
                  Account
                </Text>
              );
          }

        },
      })}>

      {
        Navigations.Tabs.map((item, index) => {
          return (
            <Tab.Screen key={index} name={item.name} component={item.component} options={item.options} />
          )
        })
      }
    </Tab.Navigator>
  )
}

const StackNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}
    >
      {
        Navigations.Stack.map((item, index) => {
          return (
            <Stack.Screen initialParams={{ id: 20 }} key={index} name={item.name} component={item.component} options={[item.options,{headerShown: false}]}  />
          )})
        }
      </Stack.Navigator>
    )
  }

const Main = createNativeStackNavigator();
const Main2 = createNativeStackNavigator();

const MainNavigation2 = () => {
  return (
    <Main2.Navigator initialRouteName='BottomTabsNavigation'>
      <Main.Screen name="BottomTabsNavigation" component={BottomTabsNavigation} options={{ headerShown: false }} />
    </Main2.Navigator>
  )
}
const MainNavigation = () => {
  return (
    <Main.Navigator initialRouteName='MainNavigation2'>
      <Main.Screen name="MainNavigation2" component={MainNavigation2} options={{ headerShown: false }} />
      <Main.Screen name="StackNavigation" component={StackNavigation} options={{ headerShown: false }} />
    </Main.Navigator>
  )
}

export default MainNavigation