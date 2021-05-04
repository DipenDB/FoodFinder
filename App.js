
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
const App= () => {
  return (
      <PaperProvider>
        <Navigation/>
      </PaperProvider>

  );
};

const styles = StyleSheet.create({

});

export default App;
