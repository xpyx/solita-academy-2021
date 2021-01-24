import React from 'react'
import {PieChart} from 'react-native-svg-charts'

class PieChartWithCenteredLabels extends React.PureComponent {

  render() {

    const data = [
      {
        key: 1,
        amount: 96.5,
        svg: {fill: 'lightblue'},
      },
      {
        key: 2,
        amount: 1.6,
        svg: {fill: 'lightgreen'}
      },
      {
        key: 3,
        amount: 1.9,
        svg: {fill: 'pink'}
      },

    ]


    return (
      <PieChart
        style={{height: 200}}
        valueAccessor={({item}) => item.amount}
        data={data}
        spacing={0}
        outerRadius={'95%'}
      >
      </PieChart>
    )
  }

}

export default PieChartWithCenteredLabels
