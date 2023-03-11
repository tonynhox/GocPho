import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import History from '../screens/History';
import Ongoing from '../screens/Ongoing';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

const OrdersNavigation = () => {
    return (

            <Tab.Navigator>
                <Tab.Screen name="Ongoing" component={Ongoing} />
                <Tab.Screen name="History" component={History} />
            </Tab.Navigator>

    )
}

export default OrdersNavigation