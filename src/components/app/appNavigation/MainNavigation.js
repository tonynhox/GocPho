import React, { useEffect } from 'react'
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
import ShopNavigation from '../shop/navigation/ShopNavigation'
import ExploreNavigation from '../shop/navigation/ExploreNavigation'
import AccountNavigation from '../user/navigation/AccountNavigation'
import { useIsFocused } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const StackMain = createNativeStackNavigator();

// const MainNavigation = ({navigation}) => {
//   const [currentTab, setCurrentTab] = useState('Shop');

//   const ShopNavigation = () => {
//     useEffect(() => {
//       if (currentTab != 'Shop') {
//         console.log("Current tab: ", currentTab)
//         navigation.navigate('Shop');
//       }
//     }, [currentTab]);

//     return (
//       <Stack.Navigator
//       initialRouteName='ShopStack'
//       screenOptions={{headerShown: false}}>
//         <Stack.Screen name="ShopStack" component={Shop} />
//         <Stack.Screen name="Mango" component={Mango} />
//       </Stack.Navigator>
//     );
//   };

//   const ExploreNavigation = () => {
//     return (
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="ExploreStack" component={Explore} />
//         <Stack.Screen name="Fruit" component={Fruit} />
//       </Stack.Navigator>
//     );
//   };
//   const CartNavigation = () => {
//     return (
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="CartStack" component={Cart} />
//         <Stack.Screen name="Payment" component={Payment} />
//         <Stack.Screen name="Itemes" component={Itemes} />
//         <Stack.Screen name="OrderAccepted" component={OrderAccepted} />
//       </Stack.Navigator>
//     );
//   };

//   const AccountNavigation = () => {
//     return (
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="AccountStack" component={AccountScreen} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//         <Stack.Screen name="EditProfile" component={EditProfile} />
//         <Stack.Screen name="Order" component={OrdersNavigation} />
//         <Stack.Screen name="Address" component={Address} />
//         <Stack.Screen name="Payment" component={Payment} />
//       </Stack.Navigator>
//     );
//   };
//   const SettingNavigation = () => {
//     return (
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="ChangePassword" component={ChangePassword} />
//         <Stack.Screen name="MyCard" component={Mycards1} />
//       </Stack.Navigator>
//     );
//   }
// }
const Navigations = {
  Tabs: [
    { component: ShopNavigation, name: 'Shop', options: {} },
    { component: ExploreNavigation, name: 'Explore', options: {} },
    { component: CartNavigation, name: 'Cart', options: {} },
    { component: FavoriteScreen, name: 'Favorite', options: {} },
    { component: AccountNavigation, name: 'Account', options: {} },
  ],
}


const TabMain = () => {
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          if (route.name == 'Shop') {
            if (!focused) {
              return (
                <Image
                  source={require('../../../media/iconNavigation/shop.png')}
                />
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
                <Image
                  source={require('../../../media/iconNavigation/explore.png')}
                />
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
                <Image
                  source={require('../../../media/iconNavigation/cart.png')}
                />
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
                <Image
                  source={require('../../../media/iconNavigation/account.png')}
                />
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
                <Text style={{color: 'FF5E00', fontWeight: 'bold'}}>Shop</Text>
              );
            else
              return (
                <Text style={{color: '6D3805', fontStyle: 'italic'}}>Shop</Text>
              );
          } else if (route.name == 'Explore') {
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
          } else if (route.name == 'Cart') {
            if (focused)
              return (
                <Text style={{color: 'FF5E00', fontWeight: 'bold'}}>Cart</Text>
              );
            else
              return (
                <Text style={{color: '6D3805', fontStyle: 'italic'}}>Cart</Text>
              );
          } else if (route.name == 'Favorite') {
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
          } else if (route.name == 'Account') {
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
        tabBarOnPress: e => {
          setCurrentTab(e.target.innerText); // or use e.currentTarget.getAttribute('name')
        },
      })}>
      {
        Navigations.Tabs.map((item, index) => {
          return (
            <Stack.Screen initialParams={{ id: 20 }} key={index} name={item.name} component={item.component} options={item.options} />
            
          )
        })
      }
    </Tab.Navigator>
  );
};


const MainNavigation = () => {
  return(
    <StackMain.Navigator>
      <StackMain.Screen name="TabMain" component={TabMain} options={{ headerShown: false }} />
      <StackMain.Screen name="Mango" component={Mango} options={{ headerShown: false }} />
    </StackMain.Navigator>


  )

}

export default MainNavigation
