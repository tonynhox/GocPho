import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Fruit from '../screens/Fruit';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

const FruitNavigation = () => {
    return (

            <Tab.Navigator>
                <Tab.Screen name="Ongoing" component={Fruit} />
                <Tab.Screen name="History" component={Fruit} />
            </Tab.Navigator>

    )
}

export default FruitNavigation