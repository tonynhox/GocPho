import React from 'react'
import { Image, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//cart
import Cart from '../screens/Cart';
import Itemes from '../screens/Itemes';
import Payment from '../screens/Payment';
import OrderAccepted from '../screens/OrderAccepted';
import OrderFailed from '../screens/OrderFailed';
//shop
import Explore from '../../shop/screens/Explore';
import FavoriteScreen from '../../shop/screens/FavoriteScreen';
import Fruit from '../../shop/screens/Fruit';
import Mango from '../../shop/screens/Mango';
import OrderScreen from '../../shop/screens/OrderScreen';
import Shop from '../../shop/screens/Shop';
//user
import LogIn from '../../user/screens/LogIn';
import SignUp from '../../user/screens/SignUp';
import AccountScreen from '../../user/screens/AccountScreen';
import Address from '../../user/screens/Address';
import ChangePassword from '../../user/screens/ChangePassword';
import EditAddress from '../../user/screens/EditAddress';
import EditProfile from '../../user/screens/EditProfile';
import History  from '../../user/screens/History';
import Mycards1 from '../../user/screens/Mycards1';
import NewAddress from '../../user/screens/NewAddress';
import Newcard from '../../user/screens/Newcard';
import Nosavecard from '../../user/screens/Nosavecard';
import Ongoing  from '../../user/screens/Ongoing';
import ProfileScreen from '../../user/screens/ProfileScreen';
import SignCode from '../../user/screens/SignCode';
import SignPass from '../../user/screens/SignPass';
import Welcome from '../../user/screens/Welcome';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (

    <Stack.Navigator>
        {/* cart */}
    <Stack.Screen name="Cart" component={Cart} />
    <Stack.Screen name="Itemes" component={Itemes} />
    <Stack.Screen name="Payment" component={Payment} />
    <Stack.Screen name="OrderAccepted" component={OrderAccepted} />
    <Stack.Screen name="OrderFailed" component={OrderFailed} />
    {/* shop */}
    <Stack.Screen name="Explore" component={Explore} />
    <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
    <Stack.Screen name="Fruit" component={Fruit} />
    <Stack.Screen name="Mango" component={Mango} />
    <Stack.Screen name="OrderScreen" component={OrderScreen} />
    <Stack.Screen name="Shop" component={Shop} />
    {/* user */}
    <Stack.Screen name="LogIn" component={LogIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="AccountScreen" component={AccountScreen} />
    <Stack.Screen name="Address" component={Address} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} />
    <Stack.Screen name="EditAddress" component={EditAddress} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
    <Stack.Screen name="History" component={History} />
    <Stack.Screen name="Mycards1" component={Mycards1} />
    <Stack.Screen name="NewAddress" component={NewAddress} />
    <Stack.Screen name="Newcard" component={Newcard} />
    <Stack.Screen name="Nosavecard" component={Nosavecard} />
    <Stack.Screen name="Ongoing" component={Ongoing} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="SignCode" component={SignCode} />
    <Stack.Screen name="SignPass" component={SignPass} />
    <Stack.Screen name="Welcome" component={Welcome} />
  </Stack.Navigator>
    )
}

export default MainNavigation