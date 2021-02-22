import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import NavLink from '../components/NavLink';
import { removeErrorMessage } from '../redux/actions/loginActions';
import mainStyle from '../styles/style';

const SigninScreen = ({ navigation, removeErrorMessage }) => {
    useFocusEffect(
        useCallback(() => {
            removeErrorMessage();
        })
    );

    return (
        <View style={mainStyle.viewStyle}>
            <LoginForm
                titleText="Sign In"
            />
            <NavLink
                navLinkText="Don't have an account yet? Sign Up!"
                callback={() => navigation.navigate('Signup')}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default connect(
    null,
    { removeErrorMessage }
)(SigninScreen);

