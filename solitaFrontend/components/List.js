'use strict'

import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {useLoadMedia} from '../hooks/APIhooks';
import AppContext from "../contexts/AppContext";

const List = () => {
  // const personArray = useLoadMedia();
  useLoadMedia();
  const [setting1value, setSetting1value] = useContext(AppContext);

  console.log('LIST.js personList', setting1value);


  return (
    <FlatList
      data={setting1value}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singlePerson={item} />}
    />
  );
};

export default List;


