import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import AppHeader from "../AppHeader";
import {useTheme} from "@react-navigation/native";

const HomeScreen=(props)=>{
    const {colors} =useTheme();

    return(
        <View>
            <AppHeader ficon title='Home' sicon {...props} backgroundColor='#006eff'  />
            <Text style={{color:colors.text}}>Home Screen</Text>
            <Button
                onPress={()=>props.navigation.navigate('Detail')}
                title='Go to Detail Screen'/>
        </View>
    )
}

const style=StyleSheet.create({

})
export default HomeScreen