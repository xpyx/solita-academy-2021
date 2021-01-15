
import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import List from "../components/List";
import PropTypes from "prop-types";
import {Button, Container, Text, View} from "native-base";
import {useLoadMedia} from '../hooks/APIhooks';


const Listed = ({navigation}) => {

  const personArray = useLoadMedia();


  return (
    <Container>
      <SafeAreaView style={styles.container}>
        <View style={styles.box1}>
          <List navigation={navigation}></List>
        </View>
        <View style={styles.box2}>
          <Button onPress={() => {
            navigation.navigate("Single", {file: singleMedia});
          }}>
            <Text>Order by amount</Text>
          </Button>
          <Button>
            <Text>Alphabetical order</Text>
          </Button>
        </View>
        <View style={styles.box3}>
          <Text>Total amount of all the names: {personArray.length}</Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: 'column',
  },
  box1: {
    backgroundColor: "transparent",
    flex: 7,
  },
  box2: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
  },
  box3: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

Listed.propTypes = {
  navigation: PropTypes.object,
};

export default Listed;
