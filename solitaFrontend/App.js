import React, {useState, useEffect, createContext} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import Navigator from './navigators/Navigator';
import AppContextProvider from './contexts/AppContext';
import useLoadMedia from './hooks/APIhooks'
import PropTypes from 'prop-types'



const App = () => {

  const [solitaPersons, setSolitaPersons] = useState({});

  React.useEffect(() => {
    const personArray = useLoadMedia();
    setSolitaPersons = ({personArray});
  }, []);


  return (
    // <AppContext.Provider value={solitaPersons}>
    //   {props.children}
    <AppContextProvider value={[solitaPersons, setSolitaPersons]}>
      {this.props.children}

      <Navigator />
    </AppContextProvider >

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

App.propTypes = {
  children: PropTypes.any
};

export default App;
