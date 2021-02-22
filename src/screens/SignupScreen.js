import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import NavLink from '../components/NavLink';
import { removeErrorMessage } from '../redux/actions/loginActions';
import mainStyle from '../styles/style';

const SignupScreen = ({ navigation, removeErrorMessage }) => {
    useFocusEffect(
        useCallback(() => {
            removeErrorMessage();
        })
    );

    return (
        <View style={mainStyle.viewStyle}>
            <LoginForm
                titleText="Sign Up"
            />
            <NavLink
                navLinkText="Already have an account? Sign in!"
                callback={() => navigation.navigate('Signin')}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default connect(
    null,
    { removeErrorMessage }
)(SignupScreen);

