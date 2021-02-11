import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Image } from 'react-native-elements';

const LoginForm = ({ titleText, callback }) => {
    return (
        <View style={styles.viewStyle}>
            <Text h1 style={styles.titleStyle}>{titleText}</Text>
            <Input
                placeholder="Email"
                placeholderTextColor="#FFFFFF88"
                inputContainerStyle={styles.inputStyle}
                style={styles.inputStyle}
            />
            <Input
                placeholder="Password"
                placeholderTextColor="#FFFFFF88"
                style={styles.inputStyle}
                inputContainerStyle={styles.inputStyle}
                secureTextEntry={true}
            />
            <TouchableOpacity
                onPress={callback}
            >
                <Text h4 style={styles.buttonStyle}>OKAY</Text>
            </TouchableOpacity>
            <Image
                style={styles.imageStyle}
                source={require('../../assets/logo.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center',
        margin: 50
    },
    titleStyle: {
        color: 'white',
        margin: 50
    },
    inputStyle: {
        borderColor: 'white',
        color: 'white'
    },
    imageStyle: {
        marginVertical: 50,
        height: 150,
        width: 150
    },
    buttonStyle: {
        color: 'white'
    }
})

export default LoginForm;
