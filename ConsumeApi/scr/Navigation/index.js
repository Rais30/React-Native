import *as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SignIn from '../Screens/Sign in'
import SignUp from '../Screens/Sign Up'
import Home from '../Screens/Home'

const Stack =createStackNavigator()

const Navigation = () => {
    return (
<NavigationContainer>
    <Stack.Navigator 
    initialRouteName="SignIn"
    screenOptions={{
        headerShown:false,
        animationEnabled:false
    }}>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Home" component={Home}/>

    </Stack.Navigator>
</NavigationContainer>
    )
}

export default Navigation