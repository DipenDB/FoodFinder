import React from 'react';
import {AuthContext} from '../../Store/Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {ActivityIndicator, View} from "react-native";

class AuthProvider extends React.Component{
    state={
        isLoading : true,
        userToken:null,
        isThemeDark:false,
    }

    if (isLoading){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size='large' color='#0000ff'/>
            </View>
        )
    }

    componentDidMount=async ()=>{
        setTimeout(()=>{
            this.setState({
                ...this.state,
                isLoading:false,
            })
        },1000)
    }


    signIn = ()=>{
        this.setState({
            isLoading: false,
            userToken:'token',
        })
    }

    signUp = ()=>{
        this.setState({
            ...this.state,
            isLoading: false,
            userToken:'token',
        })
    }

    signOut = ()=>{
        this.setState({
            ...this.state,
            isLoading: false,
            userToken:null,
        })
    }

    toggleTheme = ()=>{
        this.setState({
            ...this.state,
            isThemeDark:!this.state.isThemeDark
        })
    }



    render(){
        return(
            <AuthContext.Provider value={{
                ...this.state,
                signIn: this.signIn,
                signUp: this.signUp,
                signOut: this.signOut,
                toggleTheme:this.toggleTheme
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthProvider