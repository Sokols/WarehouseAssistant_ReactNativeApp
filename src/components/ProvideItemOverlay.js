import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Overlay, Text } from 'react-native-elements';

import { MAIN_COLOR } from '../styles/colors';

import DefaultButton from './DefaultButton';
import DefaultInput from './DefaultInput';

const ProvideItemOverlay = ({ onSubmit, isVisible, toggleOverlay }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [code, setCode] = useState('');
    const [name, setName] = useState('');

    const _onSubmit = () => {
        if (name !== '' && code !== '') {
            const id = code;
            const data = { name };
            onSubmit({ id, data });
            _onToggleOverlay();
        } else {
            setErrorMessage('Values cannot be null!');
        }
    }

    const _onToggleOverlay = () => {
        toggleOverlay();
        setErrorMessage('');
        setName('');
        setCode('');
    };

    const _onNameChanged = name => {
        setName(name);
    };

    const _onCodeChanged = code => {
        setCode(code);
    };

    return (
        <Overlay
            overlayStyle={styles.overlayStyle}
            isVisible={isVisible}
            onBackdropPress={_onToggleOverlay}
        >
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Provide item:</Text>
                <DefaultInput
                    placeholder='Name'
                    secureTextEntry={false}
                    value={name}
                    onChangeText={_onNameChanged}
                />
                <DefaultInput
                    placeholder='Code'
                    secureTextEntry={false}
                    value={code}
                    onChangeText={_onCodeChanged}
                />
                {
                    errorMessage === ''
                        ? null
                        : <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
                }
                <DefaultButton
                    buttonText="OKAY"
                    onClick={_onSubmit}
                    isClickable
                />
            </View>
        </Overlay>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 22,
        color: 'white',
        padding: 10,
        alignSelf: 'flex-start'
    },
    overlayStyle: {
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MAIN_COLOR
    },
    viewStyle: {
        alignItems: 'center'
    },
    errorMessageStyle: {
        fontSize: 14,
        color: 'white',
        paddingBottom: 15
    }
});

export default ProvideItemOverlay;
