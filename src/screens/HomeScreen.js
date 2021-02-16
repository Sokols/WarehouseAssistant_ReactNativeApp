import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import mainStyle from '../styles/style';

class HomeScreen extends Component {
  render() {
    return (
      <View style={mainStyle.viewStyle}>
        <Text>Home</Text>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default HomeScreen;
