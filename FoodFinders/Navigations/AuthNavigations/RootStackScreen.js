
import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import SplashScreen from "../../Screens/AuthScreens/SplashScreen";
import SignInScreen from "../../Screens/AuthScreens/SignInScreen";
import SignUpScreen from "../../Screens/AuthScreens/SignUpScreen";

const RootStack =createStackNavigator();

const RootStackScreen=({navigation})=>{
    return(
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name='SplashScreen' component={SplashScreen}/>
            <RootStack.Screen name='SignInScreen' component={SignInScreen}/>
            <RootStack.Screen name='SignUpScreen' component={SignUpScreen}/>
        </RootStack.Navigator>
    )
}

export default RootStackScreen