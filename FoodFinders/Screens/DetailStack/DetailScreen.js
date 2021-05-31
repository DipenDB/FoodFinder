import React,{useState} from 'react'
import {View,Text,StyleSheet,FlatList,Button,TouchableHighlight} from 'react-native'
import AppHeader from "../AppHeader";

import Swipeable from 'react-native-gesture-handler/Swipeable';

import { SwipeListView } from 'react-native-swipe-list-view';
import NotificationData from '../../Assets/NotificationData/NotificationData'

const DetailScreen =(props)=>{

    const [listData,setListData]=useState(NotificationData.map((Notification,index)=>({
        key : `${index}`,
        title:Notification.title,
        detail:Notification.details,
    })))

    const ListItemDelete=()=>{
        return(
            <View style={{backgroundColor:'red',width:70,borderTopRightRadius: 5,borderBottomRightRadius: 5}}>
                
            </View>
        )
    }

    const renderItem=({item})=>{
        return(

            <View style={styles.rowFront}>
                <Swipeable renderRightActions={ListItemDelete}>
                    <View style={{padding: 10,}}>
                        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                        <Text numberOfLines={1} style={styles.details}>{item.detail}</Text>
                    </View>
                </Swipeable>
            </View>


        )
    }




    return(
                <>
                    <AppHeader back title='Notification Screen' sicon='dots-vertical' {...props} backgroundColor='#3402a8'/>
                    <View style={styles.container}>

                        <FlatList
                            data={listData}
                            showsVerticalScrollIndicator={false}
                            renderItem={renderItem}
                            keyExtractor={item => item.key}
                        />

                    </View>



                </>
            )


}

const styles=StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 60,
        margin: 5,
        marginBottom: 15,
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    rowFrontVisible: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 60,
        padding: 10,
        marginBottom: 15,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        margin: 5,
        marginBottom: 15,
        borderRadius: 5,
    },
    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 17,
    },
    backRightBtnLeft: {
        backgroundColor: '#1f65ff',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    trash: {
        height: 25,
        width: 25,
        marginRight: 7,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#666',
    },
    details: {
        fontSize: 12,
        color: '#999',
    },
})
export default DetailScreen