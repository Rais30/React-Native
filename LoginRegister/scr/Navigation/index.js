import *as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SignIn from '../Sign in'
import SignUp from '../Sign Up'
import Home from '../Home/Home'


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