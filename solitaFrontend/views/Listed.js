
import {StatusBar} from "expo-status-bar";
import React, {useContext, useState, useEffect} from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import List from "../components/List";
import PropTypes from "prop-types";
import {Button, Container, Text, View} from "native-base";
import AppContext from "../contexts/AppContext";

const Listed = ({navigation}) => {

  const [setting1value, setSetting1value] = useContext(AppContext);

  const orderAlphabeticallyAsc = () => {
    const sorted = [...setting1value].sort((a, b) => b.name - a.name);
    setSetting1value(sorted);
  };

  const orderAlphabeticallyDesc = () => {
    const sorted = [...setting1value].sort((a, b) => a.name - b.name);
    setSetting1value(sorted);
  };

  const orderCountwiseAsc = () => {
    const sorted = [...setting1value].sort((a, b) => a.amount - b.amount);
    setSetting1value(sorted);
  };

  const orderCountwiseDesc = () => {
    const sorted = [...setting1value].sort((a, b) => b.amount - a.amount);
    setSetting1value(sorted);
  };

  return (
    <Container>
      <SafeAreaView style={styles.container}>
        <View style={styles.box1}>
          <List navigation={navigation}></List>
        </View>
        <View style={styles.box2}>
          <Button onPress={() => orderCountwiseAsc()}>
            <Text>Order by amount, asc</Text>
          </Button>
          <Button onPress={() => orderAlphabeticallyAsc()}>
            <Text>Alphabetical, asc</Text>
          </Button>
        </View>

        <View style={styles.box2}>
          <Button onPress={() => orderCountwiseDesc()}>
            <Text>Order by amount, desc</Text>
          </Button>
          <Button onPress={() => orderAlphabeticallyDesc()}>
            <Text>Alphabetical, desc</Text>
          </Button>
        </View>
        <View style={styles.box3}>
          <Text>Total amount of all the names: {setting1value.length}</Text>

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
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 5
    ,
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
