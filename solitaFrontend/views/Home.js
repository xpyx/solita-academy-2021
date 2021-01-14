
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

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";



const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
};

const screenWidth = Dimensions.get("window").width * 1.1;

const Home = ({navigation}) => {
  return (
    <Container style={styles.container}>
      <Content padder>

        <Card>
          <CardItem>
            <PieChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[10, -20]}
              absolute
            />
          </CardItem>
        </Card>

        <Card>
          <CardItem style={styles.buttons}>
            <Button>
              <Text>order by amount, most popular first</Text>
            </Button>
            <Button>
              <Text>List names in alphabetical order</Text>
            </Button>
            <Button>
              <Text>Return the total amount of all the names</Text>
            </Button>
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
    width: '100%',
    fontWeight: 'bold',
    paddingBottom: 5,
  },

});

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
