import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
import AppHeader from "../AppHeader";



class DetailScreen extends React.Component{
    // static navigationOptions = {
    //     title: 'Center Title',
    //     headerRight:<View />
    // }

        render() {
            return(
                <View>
                    <AppHeader back title='Detail Screen' sicon='dots-vertical' {...this.props} backgroundColor='#3402a8'/>
                    <Text>Detail Screen</Text>
                    <Button
                        onPress={()=> this.props.navigation.goBack()}
                        title='Go Back'/>
                </View>
            )
        }


}

const style=StyleSheet.create({

})
export default DetailScreen