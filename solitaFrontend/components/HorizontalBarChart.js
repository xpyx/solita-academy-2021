
import React from 'react'
import {View} from 'react-native'
import {BarChart, Grid, YAxis} from 'react-native-svg-charts'
import * as scale from 'd3'

class HorizontaBarChartWithYAxis extends React.PureComponent {


  render() {

    const sortData = () => {

      const data1 = [
        {
          label: "Ville",
          value: 24
        },
        {
          label: "Anna",
          value: 6
        },
        {
          label: "Antti",
          value: 22
        },
        {
          label: "Sanna",
          value: 5
        },
        {
          label: "Mikko",
          value: 19
        },
        {
          label: "Minna",
          value: 5
        },
        {
          label: "Timo",
          value: 18
        },
        {
          label: "Satu",
          value: 5
        },
        {
          label: "Tuomas",
          value: 16
        },
        {
          label: "Tiina",
          value: 5
        },
        {
          label: "Tero",
          value: 15
        },
        {
          label: "Kati",
          value: 5
        },
        {
          label: "Sami",
          value: 15
        },
        {
          label: "Henna",
          value: 4
        },
        {
          label: "Mika",
          value: 12
        },
        {
          label: "Liisa",
          value: 4
        },
        {
          label: "Janne",
          value: 12
        },
        {
          label: "Paula",
          value: 4
        },
        {
          label: "Petri",
          value: 11
        },
        {
          label: "Suvi",
          value: 4
        }
      ]

      const sorted = data1.sort((a, b) => b.amount - a.amount);
      return sorted;
    };

    const data = sortData();
    console.log('SORTED', data);


    return (
      <View style={{flexDirection: 'row', height: 400}}>
        <YAxis
          data={data}
          yAccessor={({index}) => index}
          scale={scale.scaleLinear}
          contentInset={{top: 10, bottom: 10}}
          spacing={0.2}
          formatLabel={(_, index) => data[index].label}
        />
        <BarChart
          style={{flex: 1, marginLeft: 8}}
          data={data}
          horizontal={true}
          yAccessor={({item}) => item.value}
          svg={{fill: 'lightgreen'}}
          contentInset={{top: 10, bottom: 10}}
          spacing={1}
          gridMin={0}
        >
          <Grid direction={Grid.Direction.VERTICAL} />
        </BarChart>
      </View>
    )
  }

}

export default HorizontaBarChartWithYAxis;
