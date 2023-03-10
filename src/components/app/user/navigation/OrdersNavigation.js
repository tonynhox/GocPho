import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import History from '../screens/History';
import Ongoing from '../screens/Ongoing';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

const OrdersNavigation = () => {
    return (
        <View>
            <Text style={[styles.TextOrders]}>Orders</Text>
            <Tab.Navigator>
                <Tab.Screen name="Ongoing" component={Ongoing} />
                <Tab.Screen name="History" component={History} />
            </Tab.Navigator>
        </View>
    )
}

export default OrdersNavigation

const styles = StyleSheet.create({
    TextOrders: {
        fontFamily: 'Klarna Text',
        flex: 1,
        width: 77,
        height: 29,
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: "700",
        fontSize: 24,
        lineHeight: 29,
        letterSpacing: -0.165,
        color: '#FF5E00',
    },
})