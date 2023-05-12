import { View, Text, Image } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Ionicons } from '@expo/vector-icons'; // Import thư viện biểu tượng

import Shop from '../screens/Shop';

const Stack = createNativeStackNavigator();

const Navigations = {
    Stacks: [
        {
            component: Shop,
            name: 'Lungangen',
            options: {},
        },
    ],
};

const ShopNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShadowVisible: false,
                headerTitleStyle: { fontSize: 24, fontWeight: '700' },
                headerTitleAlign: 'center',
                headerTintColor: '#FF5E00',
            }}
        >
            {Navigations.Stacks.map((item, index) => {
                return (
                    <Stack.Screen
                        initialParams={{ id: 20 }}
                        key={index}
                        name={item.name}
                        component={item.component}
                        options={{
                            headerTitle: () => (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        style={{
                                            width: 15.88,
                                            height: 20,
                                            marginRight: 10
                                        }}
                                        source={require('../../../../media/images/icLocation.png')}
                                    />
                                    <Text style={{ fontSize: 24, color: '#FF5E00', fontWeight: '700' }}>{item.name}</Text>
                                </View>
                            ),
                        }}
                    />
                );
            })}
        </Stack.Navigator>
    );
};

export default ShopNavigation;
