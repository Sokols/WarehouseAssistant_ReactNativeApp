import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import mainStyle from '../styles/style';

const AddItemScreen = () => {
    return (
      <View style={mainStyle.viewStyle}>
        <Text style={{ color: 'white'}}>Add Item</Text>  
      </View>
    );
}

const styles = StyleSheet.create({
  
});

export default AddItemScreen;
