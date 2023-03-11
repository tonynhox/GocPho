
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'

const Stack = createNativeStackNavigator();


const UserNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false, //ẩn header
        }}
    >
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

export default UserNavigation