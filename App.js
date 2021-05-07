
import React from 'react';
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
import {Provider as PaperProvider} from 'react-native-paper'
import AuthProvider from "./FoodFinders/Store/Provider/AuthProvider";
const App= () => {
  return (
      <PaperProvider>
        <AuthProvider>
          <Navigation/>
        </AuthProvider>
      </PaperProvider>

  );
};

const styles = StyleSheet.create({

});

export default App;
