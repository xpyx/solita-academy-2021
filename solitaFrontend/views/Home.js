
import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, SafeAreaView, ImageBackground, View, Dimensions} from "react-native";
import PropTypes from "prop-types";
import HorizontaBarChartWithYAxis from '../components/HorizontalBarChart'

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

const screenWidth = Dimensions.get("window").width * 1.1;

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
        </View>


        <View style={styles.pie}>
          <HorizontaBarChartWithYAxis />
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
  title: {
    flex: 1,
    padding: 20,
    margin: 20,
    fontSize: 40,
  },
  text: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
  pie: {
    flex: 1,
    padding: 20,
    margin: 5,
  },

});

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
