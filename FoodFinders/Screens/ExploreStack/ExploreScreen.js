

import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';

const ExploreScreen=()=>{
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text>Explore Screen</Text>

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


export default ExploreScreen;



