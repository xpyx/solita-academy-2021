
import React from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {useLoadMedia} from '../hooks/APIhooks';


const List = () => {
  const mediaArray = useLoadMedia();

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;



// const mediaArray = [
//   {
//     id: 1,
//     name: "Ville",
//     amount: 24,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 2,
//     name: "Anna",
//     amount: 6,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 3,
//     name: "Antti",
//     amount: 22,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 4,
//     name: "Sanna",
//     amount: 5,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 5,
//     name: "Mikko",
//     amount: 19,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 6,
//     name: "Minna",
//     amount: 5,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 7,
//     name: "Timo",
//     amount: 18,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 8,
//     name: "Satu",
//     amount: 5,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 9,
//     name: "Tuomas",
//     amount: 16,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 10,
//     name: "Tiina",
//     amount: 5,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 11,
//     name: "Tero",
//     amount: 15,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 12,
//     name: "Kati",
//     amount: 5,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 13,
//     name: "Sami",
//     amount: 15,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 14,
//     name: "Henna",
//     amount: 4,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 15,
//     name: "Mika",
//     amount: 12,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 16,
//     name: "Liisa",
//     amount: 4,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 17,
//     name: "Janne",
//     amount: 12,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 18,
//     name: "Paula",
//     amount: 4,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 19,
//     name: "Petri",
//     amount: 11,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
//   {
//     id: 20,
//     name: "Suvi",
//     amount: 4,
//     createdat: "2021-01-12T18:42:05.570Z",
//     updatedat: "2021-01-12T18:42:05.570Z"
//   },
// ];


