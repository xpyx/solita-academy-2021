
import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, SafeAreaView, ImageBackground} from "react-native";
import List from "../components/List";
import PropTypes from "prop-types";
import {Container, Content} from "native-base";

const Listed = ({navigation}) => {
  return (
    <Container>
      <Content>
        <SafeAreaView style={styles.container}>
          <List navigation={navigation}></List>
          <StatusBar style="auto" />
        </SafeAreaView>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
});

Listed.propTypes = {
  navigation: PropTypes.object,
};

export default Listed;
