'use strict'

import React from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import personArray from './PersonArray';

// import {useLoadMedia} from '../hooks/APIhooks';

const List = () => {
  // const mediaArray = useLoadMedia();

  return (
    <FlatList
      data={personArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;


