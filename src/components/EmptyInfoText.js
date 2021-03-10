import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const EmptyInfoText = ({ text }) => (
    <View style={styles.infoStyle}>
        <Text style={styles.textInfoStyle}>
            {text}
        </Text>
    </View>
);

export default EmptyInfoText;

const styles = StyleSheet.create({
    infoStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    textInfoStyle: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    }
});
