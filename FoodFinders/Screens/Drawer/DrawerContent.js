import React from 'react'
import {View,StyleSheet} from 'react-native'
import {DrawerContentScrollView, DrawerItem,DrawerItemList} from "@react-navigation/drawer";
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DrawerSection from "react-native-paper/src/components/Drawer/DrawerSection";
const DrawerContent =({...props})=>{
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);


    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Avatar.Image size={70} source={{uri:'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.1879181272.1619481600'}}/>
                            <View style={{marginLeft:15}}>
                                <Title style={styles.title}>Dipen DB</Title>
                                <Caption style={styles.caption}>@dipendb</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={{flexDirection:'row'}}>
                                <Paragraph style={{fontWeight:'bold',marginRight:5,}}>80</Paragraph>
                                <Caption style={{fontSize:14}}>Following</Caption>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:20,}}>
                                <Paragraph style={{fontWeight:'bold',marginRight:5,}}>100</Paragraph>
                                <Caption style={{fontSize:14}}>Followers</Caption>
                            </View>
                        </View>
                    </View>


                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={()=> {
                                props.navigation.navigate('HomeDrawer')
                            }}
                        />
                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon
                                    name="account-cog-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={()=>props.navigation.navigate('Profile')}
                        />

                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Bookmark"
                            onPress={()=>props.navigation.navigate('Bookmark')}
                        />

                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon
                                    name="account-cog"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={()=>props.navigation.navigate('Setting')}
                        />

                        <DrawerItem
                            icon={({color,size}) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Support"
                            onPress={()=>props.navigation.navigate('Support')}
                        />
                    </Drawer.Section>

                    <Drawer.Section title='Preference'>
                        <TouchableRipple>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <Switch color='blue' value={isSwitchOn} onValueChange={onToggleSwitch}/>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>


                </View>
            </DrawerContentScrollView>

            <Drawer.Section {...props} style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                />
            </Drawer.Section>
        </View>



    )
}
const styles=StyleSheet.create({
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    caption: {
        fontSize: 14,
        marginTop:0,
    },
    drawerContent: {
        flex: 1,
    },
    drawerSection: {
        marginTop: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    title: {
        fontSize: 16,
        // marginTop: 3,
        fontWeight: 'bold',
    },
    userInfoSection: {
        paddingLeft: 20,
        paddingTop:20,
    },




})
export default DrawerContent