import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



import Shop from '../screens/Shop'


const Stack = createNativeStackNavigator();

const Navigations = {
    Stacks: [
        { component: Shop, name: '_Shop', options: {} }
    ]
}


const ShopNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            {
                Navigations.Stacks.map((item, index) => {
                    return (
                        <Stack.Screen initialParams={{ id: 20 }} key={index} name={item.name} component={item.component} options={item.options} />
                    )
                })
            }
        </Stack.Navigator>
    )
}

export default ShopNavigation