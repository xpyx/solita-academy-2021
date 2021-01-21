
import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, SafeAreaView, ImageBackground, View, Dimensions} from "react-native";
import PropTypes from "prop-types";

import {
  Card,
  CardItem,
  Container,
  Content,
  Left,
  Right,
  Thumbnail,
  Text,
  Footer,
  Button,
} from 'native-base';

const Home = ({navigation}) => {

  return (
    <Container style={styles.container}>
      <Content padder>
        <View>
          <Text style={styles.title}>
            Tämä on otsikko
          </Text>
        </View>

        <View style={styles.text}>
          <Text>
            Tämän sovelluksen tarkoitus on demonstroida osaamistani.
          </Text>
          <Text>
            Mites toi rivinvaihto?
          </Text>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postCardItem: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    padding: 20,
    margin: 20,
    fontSize: 40,
  },
  text: {
    padding: 20,
    margin: 20,
  },

});

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
