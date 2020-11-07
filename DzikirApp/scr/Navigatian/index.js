import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Splash from '../Splash';
import DzikirPagi from '../DzikirPagi';
import DzikirPetang from '../DzikirPetang';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Home from '../Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
    return(
        <Tab.Navigator
        initialRouteName="DzikirPagi"
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                let sizeIcon;

                if (route.name ==='DzikirPagi'){
                    iconName=focused?'sun':'sun';
                    sizeIcon=size
                }else if (route.name==='DzikirPetang'){
                    iconName=focused?'moon':'moon';
                    sizeIcon=size
                }
                return<Icon name={iconName} size={sizeIcon} color={color}/>
            },
        })}
        tabBarOptions={{
            activeTintColor:'#008C74',
            inactiveTintColor:'gray',
            showLabel:false,
        }}>
            <Tab.Screen name="DzikirPagi" component={DzikirPagi}/>
            <Tab.Screen name="DzikirPetang" component={DzikirPetang}/>


        </Tab.Navigator>
    )
}


class Navigation extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{
                    headerShown:false,
                }}>
                    <Stack.Screen name="Splash" component={Splash}/>
                    <Stack.Screen name="Home" component={Home}/>
                </Stack.Navigator>
            </NavigationContainer>           
        )
    }
}
export default Navigation;