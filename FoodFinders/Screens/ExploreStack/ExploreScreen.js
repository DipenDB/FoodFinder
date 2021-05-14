

import React,{useContext} from 'react';
import {View,Text,StyleSheet,Image,ScrollView,TouchableOpacity,Dimensions,TextInput,Platform,StatusBar} from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker,Callout } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {AuthContext} from "../../Store/Context/AuthContext";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {markers,mapDarkStyle,mapStandardStyle} from '../../Assets/MapData/MapData'
import index from "@react-native-community/masked-view";
import RatingReview from "../RatingReview/RatingReview";




const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;



// const ExploreScreen=()=>{
    const ExploreScreen=()=>{

    // const authContext = useContext(AuthContext)
    const authContext = useContext(AuthContext)

    const [state,setState]=React.useState(initialMapState)

        const initialMapState = {
            markers,
            categories: [
                {
                    name: 'Fastfood Center',
                    icon: <MaterialCommunityIcons style={styles.chipsIcon} name="food-fork-drink" size={18}/>,
                },
                {
                    name: 'Restaurant',
                    icon: <Ionicons name="ios-restaurant" style={styles.chipsIcon} size={18}/>,
                },
                {
                    name: 'Dineouts',
                    icon: <Ionicons name="md-restaurant" style={styles.chipsIcon} size={18}/>,
                },
                {
                    name: 'Snacks Corner',
                    icon: <MaterialCommunityIcons name="food" style={styles.chipsIcon} size={18}/>,
                },
                {
                    name: 'Hotel',
                    icon: <Fontisto name="hotel" style={styles.chipsIcon} size={15}/>,
                },
            ],
            region: {
                latitude: 27.736687,
                longitude: 85.324633,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            },
        };


    return(
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                customMapStyle={ authContext.isThemeDark ? mapDarkStyle : mapStandardStyle}
                initialRegion={initialMapState.region}
                // region={{
                //     latitude: 27.736687,
                //     longitude: 85.324633,
                //     latitudeDelta: 0.01,
                //     longitudeDelta: 0.01,
                // }}
            >

                {initialMapState.markers.map((marker,index)=>{
                    return(
                        <Marker
                            key={index}
                            draggable
                            coordinate={marker.coordinate}
                            // onPress={{}}
                            // image={require('../../Assets/Images/location.png')}
                            title='First'
                            description='This is first description.'
                        >
                            <View style={[styles.markerWrap]}>
                                <Image
                                    source={require('../../Assets/Images/location.png')}
                                    style={[styles.marker]}
                                    resizeMode="cover"
                                />
                            </View>

                        </Marker>
                    )
                })}
            </MapView>

            <View style={styles.searchBox}>
                <TextInput
                    placeholder='Search here'
                    placeholderTextColor='#000'
                    auticapitalize='none'
                    style={{flex:1,padding:0}}

                />
                <Ionicons name='ios-search' size={20}/>
            </View>


            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={1}
                height={50}
                style={styles.chipsScrollView}
            >
                {initialMapState.categories.map((category,index)=>(
                    <TouchableOpacity key={index} style={styles.chipsItem}>
                        {category.icon}
                        <Text>{category.name}</Text>
                    </TouchableOpacity>

                ))}
            </ScrollView>


            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={1}
                style={styles.scrollView}

                pagingEnabled
                snapToInterval={CARD_WIDTH + 20}
                snapToAlignment='CENTER'

                contentContainerStyle={{
                    paddingHorizontal:Platform.OS==="android" ? SPACING_FOR_CARD_INSET : SPACING_FOR_CARD_INSET
                }}
            >

                {initialMapState.markers.map((marker,index)=>(
                    <View style={styles.card} key={index}>
                        <Image
                            source={marker.image}
                            style={styles.cardImage}
                            resizeMode='cover'
                        />
                        <View style={styles.textContent}>
                            <Text numberOfLines={1} style={styles.cardTitle}>{marker.title}</Text>
                            <RatingReview ratings={marker.rating} reviews={marker.reviews}/>
                            <Text numberOfLines={1} style={styles.cardDescription}>{marker.title}</Text>

                            <View style={styles.button}>
                                <TouchableOpacity
                                    onPress={()=>{}}
                                    style={[styles.signIn,{borderColor:'#ff6347',borderWidth:1}]}
                                >
                                    <Text style={[styles.textSign,{color: '#ff6347'}]}>ORDER NOW</Text>

                                </TouchableOpacity>
                            </View>


                        </View>

                    </View>
                ))}

            </ScrollView>



        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    bubble:{
        flexDirection:'row',
        // alignSelf:'flex-start',
        backgroundColor:'#fff',
        borderRadius:6,
        borderColor:'#ccc',
        borderWidth:0.5,
        padding:15,
        width:150,
    },
    searchBox: {
        position:'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 10,
        flexDirection:"row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf:'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    chipsScrollView: {
        position:'absolute',
        top:Platform.OS === 'ios' ? 90 : 80,
        paddingHorizontal:10,
        marginRight: 20,
    },
    chipsIcon: {
        marginRight: 5,
    },
    chipsItem: {
        flexDirection:"row",
        backgroundColor:'#fff',
        borderRadius:20,
        padding:8,
        paddingHorizontal:20,
        marginHorizontal:10,
        height:35,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 2,
        padding: 10,
    },
    cardTitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width:50,
        height:50,
    },
    marker: {
        width: 30,
        height: 40,
    },
    button: {
        alignItems: 'center',
        marginTop: 5
    },
    signIn: {
        width: '100%',
        padding:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});


export default ExploreScreen;



