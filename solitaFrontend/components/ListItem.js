'use strict'
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.pic}>
        <Image
          style={styles.img}
          source={{uri: props.singlePerson.cat_url}}
        />
      </View>

      <View style={styles.textarea}>
        <View style={styles.header}>
          <Text style={styles.listItemText}>Name: </Text>
          <Text style={styles.listItemTextHeader}>{props.singlePerson.name}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.listItemText}>Amount</Text>
          <Text style={styles.listItemTextHeader}>{props.singlePerson.amount}</Text>
        </View>

      </View>
    </TouchableOpacity >
  )
};

const styles = StyleSheet.create({

  textarea: {
    paddingLeft: 10,
    flex: 2,
    flexDirection: 'row',
  },
  pic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  header: {
    flex: 1,
  },
  text: {
    flex: 1,
  },
  listItem: {
    zIndex: 1,
    elevation: 5,
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  listItemText: {
    padding: 10,
    fontSize: 12,
  },
  listItemTextHeader: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  img: {
    borderRadius: 13,
    borderWidth: 1,
    borderColor: 'black',
    width: 70,
    height: 70
    ,
  },
});

ListItem.propTypes = {
  singlePerson: PropTypes.object,
};

export default ListItem;
