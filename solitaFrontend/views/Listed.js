
import {StatusBar} from "expo-status-bar";
import React, {useContext} from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import List from "../components/List";
import PropTypes from "prop-types";
import {Button, Container, Text, View} from "native-base";
import AppContext from "../contexts/AppContext";

const Listed = ({navigation}) => {

  const [setting1value, setSetting1value] = useContext(AppContext);

  const orderAlphabetically = () => {
    const newArray = setting1value.sort((a, b) => {
      return a.name > b.name;
    })
    setSetting1value(newArray);
    console.log('ALPHA', setting1value);
    console.log("Nyt on järjestetty aakkosjärjestyksen mukaan");
  };

  const orderCountwise = () => {
    const newArray = setting1value.sort((a, b) => {
      return a.count > b.count;
    })
    setSetting1value(newArray);
    console.log('COUNTWISE', setting1value);
    console.log("Nyt on järjestetty määrän mukaan, laskeva järjestys");
  };

  return (
    <Container>
      <SafeAreaView style={styles.container}>
        <View style={styles.box1}>
          <List navigation={navigation}></List>
        </View>
        <View style={styles.box2}>
          <Button onPress={() => orderCountwise()}>
            <Text>Order by amount</Text>
          </Button>
          <Button onPress={() => orderAlphabetically()}>
            <Text>Alphabetical order</Text>
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
