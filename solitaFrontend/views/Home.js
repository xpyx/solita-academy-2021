
import React from "react";
import {StyleSheet, View, Dimensions, Image} from "react-native";
import PropTypes from "prop-types";
import PieChartWithCenteredLabels from '../components/PieChart'

import {
  Card,
  CardItem,
  Container,
  Content,
  Left,
  Right,
  Text,
} from 'native-base';

const screenWidth = Dimensions.get("window").width * 1.1;

const Home = ({navigation}) => {


  return (
    <Container style={styles.container}>
      <Content padder>
        {/*
        <Image source={{uri: 'https://www.siqni.fi/wp-content/uploads/2018/03/solita.png'}}
          style={{width: 40, height: 40}} /> */}
        <Card>
          <View>
            <Text style={styles.title}>
              Application to Solita Dev Academy
            </Text>
          </View>
        </Card>
        <Card>
          <CardItem>
            <View>
              <Text style={styles.text}>
                This application is a demostration of my coding skills. The content is:
          </Text>
            </View>
          </CardItem>
          <CardItem>
            <View>
              <Text style={styles.text}>
                - Frontpage: this page
          </Text>
            </View>
          </CardItem>
          <CardItem>
            <View>
              <Text style={styles.text}>
                - List of Solitians: shows a list of people with buttons to sort the list in different ways
          </Text>
            </View>
          </CardItem>
          <CardItem>
            <View>
              <Text style={styles.text}>
                - Map: a map that shows your location for no reason
          </Text>
            </View>
          </CardItem>
          <CardItem>
            <View>
              <Text style={styles.text}>
                - My profile: my details and some links
          </Text>
            </View>
          </CardItem>
        </Card>
        <Card>
          <Text style={styles.pieTitle}>According to Github, the codebase of this application contains:</Text>
          <View style={styles.pieContainer}>
            <View style={styles.pie}>
              <PieChartWithCenteredLabels />
            </View>

            <View style={styles.pieTextContainer}>
              <View>
                <Text style={styles.pieText}>Javascript 96.5%</Text>
              </View>

              <View>
                <Text style={styles.pieText}>Shell 1.6%</Text>
              </View>

              <View >
                <Text style={styles.pieText}>Dockerfile 1.9%</Text>
              </View>

            </View>
          </View>
        </Card>
        <View >
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
    marginLeft: 20,
    fontSize: 35,
    textAlign: 'center',
  },
  text: {
    flex: 1,
    padding: 0,
    marginLeft: 20,
  },
  pie: {
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
  pieText: {
    flex: 1,
    padding: 0,
    marginTop: 20,
  },
  pieTitle: {
    flex: 1,
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  pieContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 0,

  },
  pieTextContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 15,
    padding: 20,
  },

});

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
