import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import mainStyle from '../styles/style';

const HomeScreen = () => {
    return (
      <View style={mainStyle.viewStyle}>
        <Text style={{ color: 'white'}}>Home</Text>  
      </View>
    );
}

const styles = StyleSheet.create({
  
});

export default HomeScreen;
