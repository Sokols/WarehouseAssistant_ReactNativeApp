import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Overlay, Text, Image } from 'react-native-elements';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { MAIN_COLOR } from '../styles/colors';

import DefaultButton from './DefaultButton';
import DefaultInput from './DefaultInput';
import PhotoBottomSheet from './PhotoBottomSheet';

const ProvideItemOverlay = ({ onSubmit, isVisible, toggleOverlay }) => {
    const [bottomSheetVisibility, setBottomSheetVisibility] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [image, setImage] = useState(null);
    const [code, setCode] = useState('');
    const [name, setName] = useState('');

    const _onSubmit = () => {
        if (name !== '' && code !== '') {
            const id = code;
            const data = { 
                name, 
                fileUri: image.uri ? image.uri : null, 
                fileName: image.fileName ? image.fileName : null};
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
        setImage(null);
    };

    const _onNameChanged = name => {
        setName(name);
    };

    const _onCodeChanged = code => {
        setCode(code);
    };

    const _handleBottomSheet = {
        launchCamera: () => {
            launchCamera(
                {
                    mediaType: 'photo'
                },
                newImage => !newImage.didCancel ? setImage(newImage) : null
                // newImage => console.log(newImage)
            );
            setBottomSheetVisibility(false)
        },
        launchImageLibrary: () => {
            launchImageLibrary(
                {
                    mediaType: 'photo'
                },
                newImage => !newImage.didCancel ? setImage(newImage) : null
            );
            setBottomSheetVisibility(false)
        },
        cancel: () => setBottomSheetVisibility(false)
    }


    return (
        <Overlay
            overlayStyle={styles.overlayStyle}
            isVisible={isVisible}
            onBackdropPress={_onToggleOverlay}
        >
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Provide item:</Text>
                <View style={styles.dataFieldsStyle}>
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
                        image
                            ? <Image
                                source={{ uri: image.uri }}
                                style={styles.imageStyle}
                            />
                            : null
                    }
                    <TouchableOpacity onPress={() => setBottomSheetVisibility(true)}>
                        <Text style={styles.textButtonStyle}>ADD PHOTO</Text>
                    </TouchableOpacity>
                    {
                        errorMessage === ''
                            ? null
                            : <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
                    }
                </View>
                <DefaultButton
                    buttonText="OKAY"
                    onClick={_onSubmit}
                    isClickable
                />
                <PhotoBottomSheet
                    handleBottomSheet={_handleBottomSheet}
                    visibility={bottomSheetVisibility}
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
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    dataFieldsStyle: {
        padding: 10,
        alignItems: 'center',
    },
    textButtonStyle: {
        padding: 10,
        fontSize: 16,
        color: 'white',
    },
    imageStyle: {
        resizeMode: 'center',
        width: 200,
        height: 200
    },
    errorMessageStyle: {
        fontSize: 14,
        color: 'white',
        paddingBottom: 15
    }
});

export default ProvideItemOverlay;
