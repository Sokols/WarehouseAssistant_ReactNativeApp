import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const NavLink = ({ navLinkText, callback }) => {
    return (
        <View>
            <TouchableOpacity onPress={callback} >
                <Text style={styles.textStyle}>{navLinkText}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'white',
        fontSize: 16,
        fontStyle: 'italic'
    }
});

export default NavLink;