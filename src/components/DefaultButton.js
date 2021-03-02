import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const DefaultButton = ({ buttonText, onClick }) => (
    <TouchableOpacity
        style={styles.touchStyle}
        onPress={onClick}
    >
        <Text style={styles.buttonStyle}>{buttonText}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonStyle: {
        fontSize: 18,
        color: 'white'
    },
    touchStyle: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10
    }
});

export default DefaultButton;
