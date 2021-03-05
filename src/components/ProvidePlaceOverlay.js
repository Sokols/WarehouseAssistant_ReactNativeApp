import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Overlay, Text } from 'react-native-elements';

import { MAIN_COLOR } from '../styles/colors';

import DefaultButton from './DefaultButton';
import DefaultInput from './DefaultInput';

const ProvidePlaceOverlay = ({ onSubmit, isVisible, toggleOverlay }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [name, setName] = useState('');

    const _onSubmit = () => {
        if (name !== '') {
            const id = name;
            const data = { info: '' };
            onSubmit({ id, data});
            _onToggleOverlay();
        } else {
            setErrorMessage('Value cannot be null!');
        }
    }

    const _onToggleOverlay = () => {
        toggleOverlay();
        setErrorMessage('');
        setName('');
    };

    const _onNameChanged = name => {
        setName(name);
    };

    return (
        <Overlay
            overlayStyle={styles.overlayStyle}
            isVisible={isVisible}
            onBackdropPress={_onToggleOverlay}
        >
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Provide area:</Text>
                <DefaultInput
                    placeholder='Area'
                    secureTextEntry={false}
                    value={name}
                    onChangeText={_onNameChanged}
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

export default ProvidePlaceOverlay;
