import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import mainStyle from '../styles/style';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={mainStyle.viewStyle}>
        <Text> HomeScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({})

export default HomeScreen;
