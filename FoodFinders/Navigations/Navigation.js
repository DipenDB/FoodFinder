import React,{useContext} from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AuthProvider from '../Store/Provider/AuthProvider'
import StackTabBottomNavigation from "./StackTabBottomNavigation";
import {NavigationContainer} from "@react-navigation/native";
import RootStackScreen from "./AuthNavigations/RootStackScreen";
import {AuthContext} from "../Store/Context/AuthContext";


const Tab = createMaterialBottomTabNavigator();

const Navigation=()=>{
    const authContext =useContext(AuthContext)

    console.log(authContext.userToken)
    return(
            <NavigationContainer>

                {
                    authContext.userToken ==null ? <RootStackScreen/>:<StackTabBottomNavigation/>
                }


            </NavigationContainer>
    )
}



export default Navigation