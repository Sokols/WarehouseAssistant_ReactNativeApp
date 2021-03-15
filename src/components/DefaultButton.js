import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const DefaultButton = ({ isClickable, buttonText, onClick }) => (
    <TouchableOpacity
        disabled={!isClickable}
        style={styles.touchStyle}
        onPress={onClick}
    >
        <Text 
            style={isClickable 
                ? styles.enabledButtonStyle 
                : styles.disabledButtonStyle}
        >
            {buttonText}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    enabledButtonStyle: {
        fontSize: 20,
        color: 'white'
    },
    disabledButtonStyle: {
        fontSize: 20,
        color: 'gray'
    },
    touchStyle: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10 
    }
});

export default DefaultButton;
