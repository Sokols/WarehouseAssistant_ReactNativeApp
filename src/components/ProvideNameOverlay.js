import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Overlay, Text } from 'react-native-elements';
import mainStyle from '../styles/style';
import DefaultButton from './DefaultButton';
import DefaultInput from './DefaultInput';

const ProvideNameOverlay = ({ warehouseLevel, isVisible, toggleOverlay }) => {
    const [name, setName] = useState('');

    const _onNameChanged = name => {
        setName(name);
    };

    return (
        <Overlay
            overlayStyle={styles.overlayStyle}
            isVisible={isVisible}
            onBackdropPress={toggleOverlay}
        >
            <View>
                <Text style={styles.textStyle}>Provide {warehouseLevel}:</Text>
                <DefaultInput
                    placeholder={warehouseLevel}
                    secureTextEntry={false}
                    value={name}
                    onChangeText={_onNameChanged}
                />
                <DefaultButton
                    buttonText="OKAY"
                />
            </View>
        </Overlay>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 22,
        color: 'white'
    },

    overlayStyle: {
        padding: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainStyle.viewStyle.backgroundColor
    }
});

export default ProvideNameOverlay;
