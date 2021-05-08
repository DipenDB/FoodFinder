import React,{useContext} from 'react'
import {View,Text} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AuthProvider from '../Store/Provider/AuthProvider'
import StackTabBottomNavigation from "./StackTabBottomNavigation";
import {NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,} from "@react-navigation/native";
import RootStackScreen from "./AuthNavigations/RootStackScreen";
import {AuthContext} from "../Store/Context/AuthContext";


const Tab = createMaterialBottomTabNavigator();

const Navigation=()=>{
    const authContext =useContext(AuthContext)

    // console.log(authContext.userToken)
    return(

        <StackTabBottomNavigation/>
    // <RootStackScreen/>

        // <NavigationContainer theme={NavigationDarkTheme}>
        // {
        //             authContext.userToken ==null ? <StackTabBottomNavigation/>:<RootStackScreen/>
        // }
        // </NavigationContainer>


    )
}



export default Navigation