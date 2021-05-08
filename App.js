
import React,{useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import Navigation from "./FoodFinders/Navigations/Navigation";
import {Provider as PaperProvider,
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme
    } from 'react-native-paper'
import AuthProvider from "./FoodFinders/Store/Provider/AuthProvider";
import {DarkTheme as NavigationDarkTheme,
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    } from "@react-navigation/native";
import {AuthContext} from "./FoodFinders/Store/Context/AuthContext";
const App= () => {

    const authContext = useContext(AuthContext)
    console.log(authContext.isThemeDark)

    // const [isThemeDark,setIsThemeDark]=React.useState(false)


    const CombinedDefaultTheme = {
        ...PaperDefaultTheme,
        ...NavigationDefaultTheme,
        colors: {
            ...PaperDefaultTheme.colors,
            ...NavigationDefaultTheme.colors,
            background:'#fff',
            text:'#333'
        },
    };

    const CombinedDarkTheme = {
        ...PaperDarkTheme,
        ...NavigationDarkTheme,
        colors: {
            ...PaperDarkTheme.colors,
            ...NavigationDarkTheme.colors,
            background:'#333',
            text:'#fff'
        },
    };

    let theme = authContext.isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;


  return (
      <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                <Navigation/>
            </NavigationContainer>
      </PaperProvider>

  );
};

const styles = StyleSheet.create({

});

export default App;
