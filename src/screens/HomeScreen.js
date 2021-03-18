import React, { useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList } from 'react-native';
import { Image, Card, Divider } from 'react-native-elements';

import { connect } from 'react-redux';

import { setPlaces, setMainRef } from '../redux/actions/structureActions';
import { setItemsBySearch } from '../redux/actions/itemsActions';

import { SET_PLACES } from '../redux/actions/types';
import { LIGHT_COLOR, MAIN_COLOR, SECONDARY_COLOR } from '../styles/colors';

const HomeScreen = ({ setPlaces, setMainRef, setItemsBySearch }) => {

  const steps = [
    {
      id: 1,
      title: '1. Create your warehouse structure',
      message: 'Consider what your warehouse should look like, and then add its appropriate zones, rows, shelves etc. to the structure.'
    },
    {
      id: 2,
      title: '2. Create list of your items',
      message: 'Catalog your items that you want to put in warehouse and add information about them to the database.'
    },
    {
      id: 3,
      title: '3. Assign the item\'s location',
      message: 'After adding items to the database, you can assign them to a selected location in the warehouse.'
    },
    {
      id: 4,
      title: '4. Pick up the selected item',
      message: 'Now you can pick up items from the selected place. Your warehouse will take care of updating the stock itself.'
    }
  ]

  useEffect(() => {
    // SET UP DATA IN APP
    setMainRef();
    setPlaces();
    setItemsBySearch('');
  })

  const cardFlatList = () => (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={steps}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <Card containerStyle={styles.cardContainerStyle}>
          <View>
            <Card.Title style={styles.cardTitleStyle}>{item.title}</Card.Title>
            <Divider style={styles.cardDividerStyle} />
            <Text style={styles.cardSubtitleStyle}>{item.message}</Text>
          </View>
        </Card>
      )}
    />
  );

  return (
    <ScrollView style={styles.scrollViewStyle}>
      <View style={styles.containerStyle}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.imageStyle}
        />
        <Text style={styles.titleStyle}>Welcome to Warehouse Assistant!</Text>
        <Divider style={styles.dividerStyle} />
        <Text style={styles.subtitlStyle}>How it's working?</Text>
        {cardFlatList()}
      </View>
    </ScrollView>
  );
}

export default connect(
  null,
  { setPlaces, setMainRef, setItemsBySearch }
)(HomeScreen);

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
  },
  containerStyle: {
    alignItems: 'center',
  },
  imageStyle: {
    height: 125,
    width: 125,
    margin: 20,
  },
  titleStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 20
  },
  subtitlStyle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingHorizontal: 20
  },
  dividerStyle: {
    height: 1,
    backgroundColor: LIGHT_COLOR,
    alignSelf: 'stretch',
    margin: 20,
  },
  cardTitleStyle: {
    color: 'white',
    fontSize: 20
  },
  cardSubtitleStyle: {
    color: SECONDARY_COLOR,
    fontSize: 18,
  },
  cardContainerStyle: {
    backgroundColor: LIGHT_COLOR,
    borderColor: SECONDARY_COLOR,
    borderRadius: 15,
    width: 250,
    paddingLeft: 20,
    paddingRight: 20
  },
  cardDividerStyle: {
    height: 0.75,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    marginBottom: 10
  },
});
