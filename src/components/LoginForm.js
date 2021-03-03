import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { connect } from 'react-redux';
import { signin, signup, completeAllFields } from '../redux/actions/loginActions';
import { initMainNode } from '../redux/actions/structureActions';
import DefaultButton from './DefaultButton';
import DefaultInput from './DefaultInput';

const LoginForm = ({ signup, signin, completeAllFields, initMainNode, titleText, errorMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _onEmailChanged = email => {
        setEmail(email);
    };

    const _onPasswordChanged = password => {
        setPassword(password);
    };

    const _onSubmit = () => {
        email && password
            ? (titleText === "Sign Up"
                ? signup({ email, password, initMainNode })
                : signin({ email, password }))
            : completeAllFields();
    }

    return (
        <View style={styles.viewStyle}>
            <Text h1 style={styles.titleStyle}>{titleText}</Text>
            <DefaultInput
                placeholder="Email"
                value={email}
                onChangeText={_onEmailChanged}
                secureTextEntry={false}
            />
            <DefaultInput
                placeholder="Password"
                value={password}
                onChangeText={_onPasswordChanged}
                secureTextEntry={true}
            />
            <Text style={styles.errorStyle}>{errorMessage}</Text>
            <DefaultButton
                buttonText="OKAY"
                onClick={_onSubmit}
            />
            <Image
                style={styles.imageStyle}
                source={require('../../assets/logo.png')}
            />
        </View>
    );
}

const mapStateToProps = ({ login }) => {
    const { errorMessage } = login;
    return { errorMessage };
}

export default connect(
    mapStateToProps,
    { signin, signup, completeAllFields, initMainNode }
)(LoginForm);

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center',
        margin: 50
    },
    titleStyle: {
        color: 'white',
        marginBottom: 25
    },
    errorStyle: {
        color: 'white',
        marginBottom: 10
    },
    imageStyle: {
        marginTop: 50,
        height: 150,
        width: 150,
        borderRadius: 90,
        borderWidth: 1,
        borderColor: 'white'
    }
})
