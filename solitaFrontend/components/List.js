'use strict'

import React from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {useLoadMedia} from '../hooks/APIhooks';

const List = () => {
  const personArray = useLoadMedia();

  return (
    <FlatList
      data={personArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singlePerson={item} />}
    />
  );
};

export default List;


