import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import mainStyle from '../styles/style';

import auth from '@react-native-firebase/auth';

import { connect } from 'react-redux';
import { setPlaces, setMainRef } from '../redux/actions/structureActions';

const HomeScreen = ({ setPlaces, setMainRef }) => {
  const { email } = auth().currentUser;

  useEffect(() => {
    // SET UP DATA IN APP
    setMainRef();
    setPlaces();
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
  { setPlaces, setMainRef }
)(HomeScreen);
