import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Explore from '../screens/Explore';
import Fruit from '../screens/Fruit'


const Stack = createNativeStackNavigator();


const Navigations = {
  Stack: [
    { component: Explore, name: 'Explores', options: {
      headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 24, color: '#FF5E00', fontWeight: '700' }}>Categories</Text>
          </View>
      ),
  } },
    { component: Fruit, name: 'Fruit', options: {
      headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 24, color: '#FF5E00', fontWeight: '700' }}>Fruits</Text>
          </View>
      ),
  } },//note lại cái này(sai sai)
  ]
}

const ExploreNavigation = () => {


  return (
    <Stack.Navigator
      initialRouteName={"Explores"}
      screenOptions={{ 
        // headerShown: false,
        headerShadowVisible: false,
        headerTitleStyle: {  fontSize: 24, fontWeight: '700'},
        headerTitleAlign: 'center',
        headerTintColor: '#FF5E00',
      
      
      }}
    >
      {
        Navigations.Stack.map((item, index) => {
          return (
            <Stack.Screen initialParams={{ id: 20 }} key={index} name={item.name} 
              component={item.component} options={item.options} />
          )
        })
      }


    </Stack.Navigator>
  )
}

export default ExploreNavigation