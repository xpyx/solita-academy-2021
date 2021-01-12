import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={{uri: 'http://placekitten.com/160/300'}}
        style={styles.img} />
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    zIndex: 3,
    elevation: 10,
    height: 200,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,

  },
  img: {
    flex: 1,
    width: 400,
    height: 220,
    borderWidth: 1,
    borderColor: 'black'
  },
  text: {
    color: 'white',
    fontSize: 20,
  }

});


export default Header;
