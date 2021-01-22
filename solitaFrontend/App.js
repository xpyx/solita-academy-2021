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

const App = () => {

  const [setting1value, setSetting1value] = useState([]);


  return (
    <AppContext.Provider value={[setting1value, setSetting1value]}>
      <Navigator />
    </AppContext.Provider>

  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
  },
  list: {

    flex: 2,

  },
});

export default App;
