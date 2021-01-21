import React, {useState, useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import Navigator from './navigators/Navigator';
import AppContext from './contexts/AppContext';
import useLoadMedia from './hooks/APIhooks'
import props from 'prop-types';


const App = () => {

  const [solitaPersons, setSolitaPersons] = useState({});

  // React.useEffect(() => {
  //   const personArray = useLoadMedia();
  //   setSolitaPersons = ({personArray});
  // }, []);


  return (
    <AppContext.Provider value={solitaPersons}>
      {props.children}
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
