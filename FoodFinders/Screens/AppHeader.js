import React,{useContext} from 'react';
import {StyleSheet,StatusBar,View} from 'react-native'
import { Appbar } from 'react-native-paper';
import {getBackgroundColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";
import {useTheme} from "@react-navigation/native";
import {AuthContext} from "../Store/Context/AuthContext";

const AppHeader = (props) => {
    const _goBack = () => props.navigation.goBack();

    const handleF = () => props.navigation.openDrawer();

    const handleS = () => {};

    const authContext = useContext(AuthContext)
    return (
        <View>
            <Appbar.Header style={{backgroundColor: props.backgroundColor, elevation:5,}} >

                {
                    props.back ? <Appbar.BackAction onPress={_goBack} /> :null
                }
                {
                    props.ficon ? <Appbar.Action icon='menu' onPress={handleF} /> :null
                }
                {
                    props.title ? <Appbar.Content style={{alignItems:'center'}} title={props.title} subtitle={props.subtitle} /> :null
                }
                {
                    props.sicon ? <Appbar.Action icon={props.sicon} onPress={handleS} /> :null
                }

            </Appbar.Header>
            <StatusBar
                // barStyle={authContext.isThemeDark ? 'dark-content':'light-content'}
                   backgroundColor={props.backgroundColor} barStyle='light-content'
            />

        </View>


    );
};

const style=StyleSheet.create({
    header:{
        backgroundColor:'#006eff',
        color:'#fff',
    }
})

export default AppHeader;