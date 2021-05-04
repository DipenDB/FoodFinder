import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import AppHeader from "../AppHeader";

const HomeScreen=(props)=>{
    return(
        <View>
            <AppHeader ficon title='Home' sicon {...props} backgroundColor='#006eff'/>
            <Text>Home Screen</Text>
            <Button
                onPress={()=>props.navigation.navigate('Detail')}
                title='Go to Detail Screen'/>
        </View>
    )
}

const style=StyleSheet.create({

})
export default HomeScreen