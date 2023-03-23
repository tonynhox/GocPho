import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Explore from '../screens/Explore';
import Fruit from '../screens/Fruit'
import Mango from '../screens/Mango'


const Stack = createNativeStackNavigator();

const Navigations = {
  Stack: [
    { component: Explore, name: 'Explores', options: {} },
    { component: Fruit, name: 'Fruit', options: {} },//note lại cái này(sai sai)
    { component: Mango, name: 'Mango', options: {} },
  ]
}

const ExploreNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Explores'
      screenOptions={{ headerShown: false }}
    >
      {
        Navigations.Stack.map((item, index) => {
          return (
            <Stack.Screen initialParams={{ id: 20 }} key={index} name={item.name} 
              component={item.component} options={[item.options, { headerShown: false }]} />
          )
        })
      }


    </Stack.Navigator>
  )
}

export default ExploreNavigation