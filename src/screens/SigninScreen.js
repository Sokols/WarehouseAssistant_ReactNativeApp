import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LoginForm from '../components/LoginForm'

const SigninScreen = ({ navigation }) => {
    return (
        <View style={styles.viewStyle}>
            <LoginForm
                titleText="Sign In"
                callback={() => { navigation.navigate('Signup') }}
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

export default SigninScreen; 
