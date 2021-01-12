
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import List from './components/List';
import Header from './components/Header';

import Constants from 'expo-constants';



const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <List style={styles.list} />
    </View >
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
