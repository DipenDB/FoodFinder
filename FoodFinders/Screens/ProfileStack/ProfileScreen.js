import React from 'react';
import {View, SafeAreaView,ScrollView, StyleSheet,StatusBar} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple, useTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from "../AppHeader";


const ProfileScreen=(props)=>{

    const {colors} = useTheme();

    return(
        <ScrollView>
            <AppHeader ficon title='Profile' sicon='account-edit' {...props} backgroundColor='#ff0088'  />
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row',alignItems: 'center',marginTop: 15}}>
                    <Avatar.Image
                        source={{uri:'https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg'}}
                        size={80}
                    />
                    <View style={{marginLeft:20}}>
                        <Title styele={[styles.title]}>Diepn DB</Title>
                        <Caption style={styles.caption} >@diepn</Caption>
                    </View>
                </View>
            </View>



            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name='map-marker-radius' color='#777777' size={20} />
                    <Text style={{color: '#777777',marginLeft: 20}} >Kathmandu, Nepal</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='phone' color='#777777' size={20} />
                    <Text style={{color: '#777777',marginLeft: 20}} >+977-9849905110</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='email' color='#777777' size={20} />
                    <Text style={{color: '#777777',marginLeft: 20}} >dipen@gmail.com</Text>
                </View>
            </View>


            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox,{borderRightColor:'#dddddd',borderRightWidth:1}]}>
                    <Title>$140</Title>
                    <Caption>Wallet</Caption>
                </View>
                <View style={[styles.infoBox]}>
                    <Title>12</Title>
                    <Caption>Orders</Caption>
                </View>
            </View>


            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <Icon name='heart-outline' color='#ff6347' size={25} />
                        <Text style={styles.menuItemText}>Your Favourites</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <Icon name='credit-card' color='#ff6347' size={25} />
                        <Text style={styles.menuItemText}>Payment</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <Icon name='share-outline' color='#ff6347' size={25} />
                        <Text style={styles.menuItemText}>Tell Your Friends</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <Icon name='account-check-outline' color='#ff6347' size={25} />
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <Icon name='account-settings-outline' color='#ff6347' size={25} />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
            </View>




        </SafeAreaView>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});


export default ProfileScreen;



