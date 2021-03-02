import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import mainStyle from '../styles/style';

const PickItemScreen = () => {
    return (
      <View style={mainStyle.viewStyle}>
        <Text style={{ color: 'white'}}>Pick Item</Text>  
      </View>
    );
}

const styles = StyleSheet.create({
  
});

export default PickItemScreen;
