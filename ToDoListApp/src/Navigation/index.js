import *as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Screens/Home'
import Register from '../Screens/Register'
import Login from '../Screens/Login'


const Stack =createStackNavigator()

const Navigation = () => {
    return (
<NavigationContainer>
    <Stack.Navigator 
    initialRouteName="Register"
    screenOptions={{
        headerShown:false,
        animationEnabled:false
    }}>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
</NavigationContainer>
    )
}

export default Navigation
