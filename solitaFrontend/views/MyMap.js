/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import * as Location from 'expo-location';

const MyMap = ({navigation}) => {
  const [region, setRegion] = useState({
    latitude: 60.1933244,
    longitude: 24.9410248,
    latitudeDelta: 0.252,
    longitudeDelta: 0.251,
  });

  const [location, setLocation] = useState({
    'coords': {
      'accuracy': 14.145999908447266,
      'altitude': 57.099998474121094,
      'altitudeAccuracy': 2,
      'heading': 0,
      'latitude': 10.204747,
      'longitude': 10.9238416,
      'speed': 0,
    },
    'mocked': false,
    'timestamp': 1602312496746,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const {status} = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  return (
    <MapView
      style={{flex: 1}}
      region={region}
      onRegionChangeComplete={(region) => setRegion(region)}>
      {location.coords.latitude && (

        <MapView.Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title={'You'}
          description={'& your position in the world according to your mobile device'}
        />
      )}
    </MapView>
  );
};

MyMap.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    backgroundColor: '#ecf0f1',
  },
});

export default MyMap;
