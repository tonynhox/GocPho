import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserNavigation from '../user/navigation/UserNavigation'
import MainNavigation from './MainNavigation'

import { UserContext } from '../user/utilities/UserContext'

const AppNavigation = () => {
    const {isLogin} = useContext(UserContext);
  return (
    <NavigationContainer>
        {/* {isLogin ? <MainNavigation /> : <UserNavigation />} */}
        {isLogin ? <UserNavigation /> : <MainNavigation />}
    </NavigationContainer>
  )
}

export default AppNavigation