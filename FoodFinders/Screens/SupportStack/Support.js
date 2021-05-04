import React from 'react';
import {View,Text,StyleSheet,StatusBar,Button} from 'react-native';

const Support=({...props})=>{
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text>Support</Text>
            <Button title='Go Back' onPress={()=> props.navigation.goBack()}/>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Support;



