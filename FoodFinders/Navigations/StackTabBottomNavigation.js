import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "../Screens/HomeStack/HomeScreen";
import DetailScreen from "../Screens/DetailStack/DetailScreen";
import ProfileScreen from "../Screens/ProfileStack/ProfileScreen";
import ExploreScreen from "../Screens/ExploreStack/ExploreScreen";
import DrawerContent from "../Screens/Drawer/DrawerContent";
import Bookmark from "../Screens/BookmarkStack/Bookmark";
import Setting from "../Screens/SettingStack/Setting";
import Support from "../Screens/SupportStack/Support";
import RootStackScreen from "./AuthNavigations/RootStackScreen";
import {AuthContext} from "../Store/Context/AuthContext";
import AuthProvider from '../Store/Provider/AuthProvider'
import EditProfileScreen from "../Screens/ProfileStack/EditProfileScreen";


const Drawer = createDrawerNavigator()
const HomeStack=createStackNavigator()
const DetailStack=createStackNavigator()
const ProfileStack=createStackNavigator()
const Tab = createMaterialBottomTabNavigator();

const StackTabBottomNavigation=()=>{


    return(
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
               <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
               <Drawer.Screen name="Bookmark" component={Bookmark} />
               <Drawer.Screen name="Setting" component={Setting} />
               <Drawer.Screen name="Support" component={Support} />
        </Drawer.Navigator>

    )
}

//---------------------------------------------------------------------------------------------
const HomeStackScreens=()=>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
        </HomeStack.Navigator>
    )
}
//---------------------------------------------------------------------------------------------

const DetailStackScreens=()=>{
    return(
        <DetailStack.Navigator>
            <DetailStack.Screen name='Detail' component={DetailScreen} options={{headerShown:false}}/>
        </DetailStack.Navigator>
    )
}
//---------------------------------------------------------------------------------------------

const ProfileStackScreens=()=>{
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name='Profile' component={ProfileScreen} options={{headerShown:false}}/>
            <ProfileStack.Screen name='EditProfile' component={EditProfileScreen} options={{headerShown:false}}/>

        </ProfileStack.Navigator>
    )
}
//---------------------------------------------------------------------------------------------

const MainTabScreen=()=> {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            // barStyle={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreens}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor:'#006eff',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Detail"
                component={DetailStackScreens}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarColor:'#3402a8',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreens}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor:'#ff0088',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor:'#ff0044',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="compass" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

//---------------------------------------------------------------------------------------------

export default StackTabBottomNavigation