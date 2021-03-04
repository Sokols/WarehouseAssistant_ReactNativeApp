import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import mainStyle from '../styles/style';

import auth from '@react-native-firebase/auth';

import { connect } from 'react-redux';

import { setData, setMainRef } from '../redux/actions/structureActions';
import { SET_PLACES, SET_PLACES_TO_DISPLAY } from '../redux/actions/types';

const HomeScreen = ({ setData, setMainRef }) => {
  const { email } = auth().currentUser;

  useEffect(() => {
    // SET UP DATA IN APP
    setMainRef();
    setData(SET_PLACES);
    setData(SET_PLACES_TO_DISPLAY);
  })

  return (
    <View style={mainStyle.viewStyle}>
      <Text style={{ color: 'white' }}>Hello, {email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default connect(
  null,
  { setData, setMainRef }
)(HomeScreen);
