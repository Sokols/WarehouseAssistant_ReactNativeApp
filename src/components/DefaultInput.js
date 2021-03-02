import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const DefaultInput = ({ placeholder, value, onChangeText, secureTextEntry}) => (
    <Input
        style={styles.inputStyle}
        inputContainerStyle={styles.inputStyle}
        placeholder={placeholder}
        placeholderTextColor="#FFFFFF88"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
    />
);

const styles = StyleSheet.create({
    inputStyle: {
        borderColor: 'white',
        color: 'white',
        alignSelf: 'center'
    }
});

export default DefaultInput;
