import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import mainStyle from '../styles/style';
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
  const { email } = auth().currentUser;

  return (
    <View style={mainStyle.viewStyle}>
      <Text style={{ color: 'white' }}>Hello, {email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default HomeScreen;
