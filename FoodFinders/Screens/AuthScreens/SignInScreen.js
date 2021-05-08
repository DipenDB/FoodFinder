import React, {useContext} from 'react';
import {View,
    Text,
    TouchableOpacity,
    Dimensions,
    TextInput,
    StyleSheet,
    StatusBar,
    Image,
    Platform,
    Button} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import {AuthContext} from '../../Store/Context/AuthContext'
import temporalRef from "@babel/runtime/helpers/esm/temporalRef";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import {useTheme} from "react-native-paper";
import {color} from "react-native-reanimated";

const SignInScreen=({navigation})=>{

    const {colors} = useTheme();

    const [data,setData]= React.useState({
        email:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry:true,

        isValidUser:true,
        isValidPassword:true,
    })
    const authContext =useContext(AuthContext)



    const textInputChange=(val)=>{
        if (val.length >= 4){
            setData({
                ...data,
                email:val,
                check_textInputChange: true,

                //To authenticate if user enter 4 digit long
                isValidUser:true,
            })
        }
        else {
            setData({
                ...data,
                email:val,
                check_textInputChange: false,

                //To authenticate if user enter 4 digit long
                isValidUser:false,
            })
        }
    }

    const handlePasswordChange=(val)=>{
        if (val.length >= 8){
            setData({
                ...data,
                password: val,

                //To authenticate if user enter 8 digit long password
                isValidPassword:true,
            })
        }else {
            setData({
                ...data,
                password: val,

                //To authenticate if user enter 8 digit long password
                isValidPassword:false,
            })
        }

    }

    const updateSecureTextEntry=()=>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }


    //second method to handel user to show error message
    const handleValidUser=(e)=>{
        if (e.trim().length>=4){
            setData({
                ...data,
                isValidUser:true,
            })
        }
        else {
            setData({
                ...data,
                isValidUser:false,
            })
        }
    }



    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>

            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome</Text>
            </View>


            <Animatable.View
                animation='fadeInUpBig'
                style={[styles.footer,{backgroundColor: colors.background}]}>

                <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{flex: 1, width:'100%'}}
                                         keyboardShouldPersistTaps='always'>

                {/*=================================================================*/}
                <Text style={[styles.text_footer,{color: colors.text}]}>Email</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name='user-o'
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Email'
                        placeholderTextColor={colors.text}
                        style={[styles.textInput,{color: colors.text}]}
                        autoCapitalize='none'
                        onChangeText={(val)=>textInputChange(val)}
                        onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation='bounceIn'
                        >
                            <FontAwesome
                                name='check-circle'
                                color='green'
                                size={20}
                            />
                        </Animatable.View>
                         : null
                    }

                </View>
                {
                    data.isValidUser ?
                        null :
                        <Animatable.View animation='fadeInLeft' duration={500}>
                            <Text style={styles.errorMsg}>Username Must be 4 character long</Text>
                        </Animatable.View>
                }


                {/*======================================================================================*/}

                <Text style={[styles.text_footer,{color:colors.text , marginTop: 35}]}>Password</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name='lock'
                        color={colors.text}
                        size={20}
                    />

                    <TextInput
                        placeholder='Your Password'
                        placeholderTextColor={colors.text}
                        style={[styles.textInput,{color: colors.text}]}
                        autoCapitalize='none'
                        secureTextEntry={data.secureTextEntry ? true: false}
                        onChangeText={(val)=>handlePasswordChange(val)}
                    />

                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        { data.secureTextEntry ?
                            <Ionicons
                            name='eye-off'
                            color='grey'
                            size={20}
                            />
                            :
                            <Ionicons
                                name='eye'
                                color='grey'
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>

                {
                    data.isValidPassword ?
                        null :
                        <Animatable.View animation='fadeInLeft' duration={500}>
                            <Text style={styles.errorMsg}>Password Must be 8 character long</Text>
                        </Animatable.View>
                }






                {/*=========================================================================*/}

                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={()=>authContext.signIn}
                    >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign} > Sign In</Text>

                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>navigation.navigate('SignUpScreen')}
                        style={[styles.signIn,{borderColor:'#009387',
                            borderWidth:1,
                            marginTop:15,
                        }]}
                    >

                        <Text style={[styles.textSign,{color: '#009387'}]}>Sign Up</Text>

                    </TouchableOpacity>

                </View>

                </KeyboardAwareScrollView>



            </Animatable.View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        alignItems:'center',
        marginTop: -5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        // alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#fff'
    }
});


export default SignInScreen;



