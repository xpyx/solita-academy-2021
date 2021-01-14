// resource: https://blog.logrocket.com/introduction-to-react-native-maps/

import React, {useContext, useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';

const MyMap = ({navigation}) => {

  const [region, setRegion] = useState({
    latitude: 60.1733244,
    longitude: 24.9410248,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <MapView
      style={{flex: 1}}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
    >
    </MapView>
  )
};

MyMap.propTypes = {
  navigation: PropTypes.object,
};

export default MyMap;
