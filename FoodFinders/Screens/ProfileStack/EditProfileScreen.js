import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground,TextInput,ScrollView } from 'react-native';
import AppHeader from "../AppHeader";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from "react-native-paper";


import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const EditProfileScreen=(props)=>{
    const {colors} =useTheme()

    let bs = React.createRef();
    let fall = new Animated.Value(1);

    const renderHeader=()=>(
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}/>
            </View>
        </View>
    )

    const renderContent=()=>(
        <View style={styles.panel}>
            <View style={{alignItems:'center'}}>
                <Text style={styles.panelTitle}>upload Photo</Text>
                <Text style={styles.panelSubtitle}>upload Photo</Text>
            </View>

            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle} >Take Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle} >Choose From Library</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.panelButton} onPress={()=>bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle} >Cancel</Text>
            </TouchableOpacity>
        </View>
    )



    return(
        <ScrollView style={styles.container}>
            <AppHeader back title='Edit Profile' sicon  {...props} backgroundColor='#fff'/>

            <BottomSheet
                ref={bs}
                snapPoints={[500,0]}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}

                renderHeader={renderHeader}
                renderContent={renderContent}
            />


            <Animated.View
                showsVerticalScrollIndicator={false}
                style={{flex:1,
                        margin:20,

                        // TO make background blur when BottomSheet Appear
                        opacity:Animated.add(0.3,Animated.multiply(fall,1.0))
                }}>

                {/*---------------------Image----------------------*/}
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>bs.current.snapTo(0)}>
                        <View style={{height:100,width:100,borderRadius:15,justifyContent:'center',alignItems:'center'}}>
                            <ImageBackground source={{
                                uri:'https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg'
                                }}
                                style={{height:100,width:100}}
                                imageStyle={{borderRadius:15}}
                            >
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                                    <Icon name="camera" size={35} color="#fff" style={{opacity: 0.7, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 10,}}/>
                                </View>


                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={{color:colors.text,marginTop:10,fontSize:18,fontWeight: 'bold'}}>Dipen DB</Text>
                </View>

                {/* ----------Text input Field---------------   */}

                <View style={styles.action}>
                    <FontAwesome name='user-o' color={colors.text} size={20} />
                    <TextInput placeholder='First Name' placeholderTextColor={colors.text} autoCorrect={false} style={[styles.textInput,{color:colors.text}]}/>
                </View>

                <View style={styles.action}>
                    <FontAwesome name='user-o' color={colors.text} size={20} />
                    <TextInput placeholder='Last Name' placeholderTextColor={colors.text} autoCorrect={false} style={[styles.textInput,{color:colors.text}]}/>
                </View>

                <View style={styles.action}>
                    <Feather name='phone' color={colors.text} size={20} />
                    <TextInput placeholder='Phone' keyboardType='number-pad' placeholderTextColor={colors.text} autoCorrect={false} style={[styles.textInput,{color:colors.text}]}/>
                </View>


                <View style={styles.action}>
                    <FontAwesome name='envelope-o' color={colors.text} size={20} />
                    <TextInput placeholder='Email' keyboardType='email-address' placeholderTextColor={colors.text} autoCorrect={false} style={[styles.textInput,{color:colors.text}]}/>
                </View>

                <View style={styles.action}>
                    <FontAwesome name='globe' color={colors.text} size={20} />
                    <TextInput placeholder='Country' placeholderTextColor={colors.text} autoCorrect={false} style={[styles.textInput,{color:colors.text}]}/>
                </View>

                <View style={styles.action}>
                <Icon name='map-marker-outline' color={colors.text} size={20} />
                <TextInput placeholder='City' placeholderTextColor={colors.text} autoCorrect={false} style={[styles.textInput,{color:colors.text}]}/>
                </View>


                <TouchableOpacity style={styles.commandButton} onPress={()=>{}}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>





            </Animated.View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        height:'100%'
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});


export default EditProfileScreen;



