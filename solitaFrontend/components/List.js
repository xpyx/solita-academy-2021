'use strict'

import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import AppContext from '../contexts/AppContext';
import useLoadMedia from '../hooks/APIhooks'

const List = () => {

  // const myContext = useContext(AppContext);
  const personArray = useLoadMedia();

  return (
    <FlatList
      // data={myContext.solitaPersons}
      data={personArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singlePerson={item} />}
    />
  );
};

export default List;


