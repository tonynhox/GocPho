
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import Welcome from '../screens/Welcome';
import SignPass from '../screens/SignPass';
import SignCode from '../screens/SignCode';

const Stack = createNativeStackNavigator();


const UserNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false, //ẩn header
        }}
    >
        {/* <Stack.Screen name="WelcomeStack" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignPass" component={SignPass} />
        <Stack.Screen name="SignCode" component={SignCode} /> */}
        <Stack.Screen name="Login" component={LogIn} />
    </Stack.Navigator>
  )
}

export default UserNavigation