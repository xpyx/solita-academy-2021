'use strict'

import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import AppContext from '../contexts/AppContext';
import {AppContextProvider} from '../contexts/AppContext';
import useLoadMedia from '../hooks/APIhooks'

const List = () => {

  const [solitaPersons, setSolitaPersons] = useContext(AppContextProvider);

  return (
    <FlatList
      data={solitaPersons}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singlePerson={item} />}
    />

  );
};

export default List;


