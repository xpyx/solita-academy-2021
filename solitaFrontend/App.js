import React, {useState, useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import List from './components/List';
import Header from './components/Header';
import Navigator from './navigators/Navigator';
import * as Expo from 'expo';
import * as Font from 'expo-font';
import Constants from 'expo-constants';
import AppContext from './contexts/AppContext';
import {AppLoading} from 'expo-app-loading';
import {
  useFonts,
  Lato_400Regular,
} from '@expo-google-fonts/lato';


const App = () => {

  const [solitaPersons, setSolitaPersons] = useState([]);

  return (
    <AppContext.Provider value={[solitaPersons, setSolitaPersons]}>
      <Navigator />
    </AppContext.Provider>

  );
};

export default App;
