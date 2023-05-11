import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserNavigation from '../user/navigation/UserNavigation'
import MainNavigation from './MainNavigation'
import { useSelector } from 'react-redux'
// import Avatar from '../user/screens/Avatar'
import FullMainNavigation from './FullMainNavigation'

const AppNavigation = () => {
const isLoggedIn = useSelector(state => state.login.isLoggedIn)
const user = useSelector(state =>state.login.userInfo)
  return (
    <NavigationContainer>
      {console.log("Logged: ", isLoggedIn)}
      {console.log("User at AppNavigation: ", user)}
        {isLoggedIn ? <MainNavigation /> : <UserNavigation />}
    </NavigationContainer>
  )
}

export default AppNavigation