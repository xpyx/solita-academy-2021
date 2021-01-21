'use strict'

import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import AppContext from '../contexts/AppContext';


const List = () => {

  const myContext = useContext(AppContext);

  return (
    <FlatList
      data={myContext.solitaPersons}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singlePerson={item} />}
    />
  );
};

export default List;


