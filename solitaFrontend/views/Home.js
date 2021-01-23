
import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, SafeAreaView, View, Dimensions, Image} from "react-native";
import PropTypes from "prop-types";

import {
  Card,
  CardItem,
  Container,
  Content,
  Text,
} from 'native-base';

const screenWidth = Dimensions.get("window").width * 1.1;

const Home = ({navigation}) => {


  return (
    <Container style={styles.container}>
      <Content padder>

        <Image source={{uri: 'https://www.siqni.fi/wp-content/uploads/2018/03/solita.png'}}
          style={{width: 40, height: 40}} />
        <Card>
          <View>
            <Text style={styles.title}>
              Application to Solita Dev Academy
            </Text>
          </View>
        </Card>
        <Card>
          <CardItem>
            <View style={styles.text}>
              <Text>
                This application is a demostration of my coding skills. The content is:
          </Text>
            </View>
          </CardItem>
          <CardItem>
            <View style={styles.text}>
              <Text>
                - Frontpage: this page
          </Text>
            </View>
          </CardItem>
          <CardItem>
            <View style={styles.text}>
              <Text>
                - List of Solitians: shows a list of people with buttons to sort the list in different ways
          </Text>
            </View>
          </CardItem>
          <CardItem>
            <View style={styles.text}>
              <Text>
                - Map: a map that shows your location for no reason
          </Text>
            </View>
          </CardItem>
          <CardItem>
            <View style={styles.text}>
              <Text>
                - My profile: my details and some links
          </Text>
            </View>
          </CardItem>
        </Card>

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
    padding: 0,
    marginLeft: 20,
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
