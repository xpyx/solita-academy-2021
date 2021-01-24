import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {useLoadPersons} from '../hooks/APIhooks';
import AppContext from "../contexts/AppContext";

const List = () => {
  useLoadPersons();
  const [personArray, setPersonArray] = useContext(AppContext);

  return (
    <FlatList
      data={personArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singlePerson={item} />}
    />
  );
};

export default List;


