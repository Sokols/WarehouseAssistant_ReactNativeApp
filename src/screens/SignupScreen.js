import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LoginForm from '../components/LoginForm'

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.viewStyle}>
            <LoginForm
                titleText="Sign Up"
                callback={() => { navigation.navigate('Signin') }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#2B2B2B'
    }
})

export default SignupScreen;
