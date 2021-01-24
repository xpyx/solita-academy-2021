
import {StatusBar} from "expo-status-bar";
import React, {useContext} from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import List from "../components/List";
import PropTypes from "prop-types";
import {Button, Container, Text, View} from "native-base";
import AppContext from "../contexts/AppContext";

const Listed = ({navigation}) => {

  const [personArray, setPersonArray] = useContext(AppContext);

  const orderAlphabeticallyAsc = () => {
    const sorted = [...personArray].sort((a, b) => a.name.localeCompare(b.name));
    setPersonArray(sorted);
  };

  const orderAlphabeticallyDesc = () => {
    const sorted = [...personArray].sort((a, b) => b.name.localeCompare(a.name));
    setPersonArray(sorted);

  };

  const orderCountwiseAsc = () => {
    const sorted = [...personArray].sort((a, b) => a.amount - b.amount);
    setPersonArray(sorted);
  };

  const orderCountwiseDesc = () => {
    const sorted = [...personArray].sort((a, b) => b.amount - a.amount);
    setPersonArray(sorted);
  };

  const calcTotalAmount = () => {
    var total = 0
    for (let i = 0; i < personArray.length; i++) {
      total += personArray[i].amount
    }
    return total;
  };

  const total = calcTotalAmount();

  return (
    <Container>
      <SafeAreaView style={styles.container}>
        <View style={styles.listBox}>
          <List navigation={navigation}></List>
        </View>
        <View style={styles.textBox}>
          <Text>Total amount of all the names: {total}</Text>
        </View>
        <View style={styles.textBox}>
          <Text>Amount of unique names: {personArray.length}</Text>
        </View>
        <View style={styles.buttonBox}>
          <Button onPress={() => orderCountwiseAsc()}>
            <Text>Amount:  asc</Text>
          </Button>
          <Button onPress={() => orderAlphabeticallyAsc()}>
            <Text>Alphabetical:  asc</Text>
          </Button>
        </View>
        <View style={styles.buttonBox}>
          <Button onPress={() => orderCountwiseDesc()}>
            <Text>Amount: desc</Text>
          </Button>
          <Button onPress={() => orderAlphabeticallyDesc()}>
            <Text>Alphabetical: desc</Text>
          </Button>
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
  listBox: {
    backgroundColor: "transparent",
    flex: 7,
    margin: 0,
    padding: 0,
  },
  buttonBox: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  textBox: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
});

Listed.propTypes = {
  navigation: PropTypes.object,
};

export default Listed;
