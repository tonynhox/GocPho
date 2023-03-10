import {StyleSheet, Text, View} from 'react-native';
import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from 'react';

import FavoriteScreen from './src/components/app/shop/screens/FavoriteScreen';
import AccountScreen from './src/components/app/user/screens/AccountScreen';
import ProfileScreen from './src/components/app/user/screens/ProfileScreen';
import OrderScreen from './src/components/app/shop/screens/OrderScreen';

import SignCode from './src/components/app/user/screens/SignCode';
import SignIn from './src/components/app/user/screens/LogIn';
import SignPass from './src/components/app/user/screens/SignPass';
import SignUp from './src/components/app/user/screens/SignUp';
import Welcome from './src/components/app/user/screens/Welcome';
import Cart from './src/components/app/cart/screens/Cart';
import Mango from './src/components/app/shop/screens/Mango';
import Address from './src/components/app/user/screens/Address';
import NewAddress from './src/components/app/user/screens/NewAddress';
import EditAddress from './src/components/app/user/screens/EditAddress';
import NewsAddress from './src/components/app/user/screens/NewAddress';

import OrdersNavigation from './src/components/app/user/navigation/OrdersNavigation';
// import {NavigationContainer} from '@react-navigation/native';
import History from './src/components/app/user/screens/History';
import Ongoing from './src/components/app/user/screens/Ongoing';
import OrderFailed from './src/components/app/cart/screens/OrderFailed';
import OrderAccepted from './src/components/app/cart/screens/OrderAccepted';
import Payment from './src/components/app/cart/screens/Payment';

import Mycards1 from './src/components/app/user/screens/Mycards1';
import EditProfile from './src/components/app/user/screens/EditProfile';
import ChangePassword from './src/components/app/user/screens/ChangePassword';
import Newcard from './src/components/app/user/screens/Newcard';
import Nosavecard from './src/components/app/user/screens/Nosavecard';

import Shop from './src/components/app/shop/screens/Shop';
import Explore from './src/components/app/shop/screens/Explore';
import Fruit from './src/components/app/shop/screens/Fruit';

// const App = () => {
//   return (
//     <View
//     style={{
//       flex: 1,
//       backgroundColor: 'white',
//     }}>
//       <Nosavecard/>
//     {/* test clone */}
//     </View>
//   );
// };

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Screens = [
  {screen: 'ManHinh1', title: 'Màn hình 1', active: true},
  {screen: 'ManHinh2'},
];

const ManHinh1 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Màn hình 1</Text>
      <Button
        title="Go to ManHinh2"
        onPress={() => navigation.navigate(Screens[1].screen)}
      />
    </View>
  );
};
const ManHinh2 = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Màn hình 2</Text>
      <Button
        title="Go to ManHinh1"
        onPress={() => props.navigation.navigate('ManHinh1')}
      />
    </View>
  );
};
const ManHinh3 = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Màn hình 3</Text>
      <Button
        title="Go to ManHinh4"
        onPress={() => props.navigation.navigate('ManHinh4')}
      />
    </View>
  );
};
const ManHinh4 = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Màn hình 4</Text>
      <Button
        title="Go to ManHinh5"
        onPress={() => props.navigation.navigate('ManHinh5')}
      />
    </View>
  );
};
const ManHinh5 = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Màn hình 5</Text>
      <Button
        title="Go to ManHinh3"
        onPress={() =>
          props.navigation.navigate('Main1', {
            screen: 'ManHinh2',
            params: {id: 10},
          })
        }
      />
    </View>
  );
};

const Navigations = {
  Tabs: [
    {component: Shop, name: 'Shop', options: {}},
    {component: Explore, name: 'Explore', options: {}},
    {component: Cart, name: 'Cart', options: {}},
    {component: FavoriteScreen, name: 'Favorite', options: {}},
    {component: AccountScreen, name: 'Account', options: {}},
  ],
  Stack: [
    {component: ManHinh3, name: 'ManHinh3', options: {}},
    {component: ManHinh4, name: 'ManHinh4', options: {}},
    {component: ManHinh5, name: 'ManHinh5', options: {}},
  ],
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = createStackNavigator();
const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator>
      {Navigations.Tabs.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        );
      })}
    </Tab.Navigator>
  );
};
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      {Navigations.Stack.map((item, index) => {
        return (
          <Stack.Screen
            initialParams={{id: 20}}
            key={index}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        );
      })}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Main.Navigator initialRouteName="Main1">
        <Main.Screen name="Main1" component={StackNavigation} />
        <Main.Screen name="Main2" component={BottomTabsNavigation} />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
