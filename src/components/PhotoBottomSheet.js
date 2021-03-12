import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheet, ListItem } from 'react-native-elements';

import { MAIN_COLOR } from '../styles/colors';


const PhotoBottomSheet = ({ handleBottomSheet, visibility }) => {
    const { launchCamera, launchImageLibrary, cancel } = handleBottomSheet;
    const list = [
        {
            title: 'Take a photo...',
            containerStyle: { backgroundColor: MAIN_COLOR },
            titleStyle: { color: 'white' },
            onPress: () => launchCamera()
        },
        {
            title: 'Select photo from library...',
            containerStyle: { backgroundColor: MAIN_COLOR },
            titleStyle: { color: 'white' },
            onPress: () => launchImageLibrary()
        },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: MAIN_COLOR },
            titleStyle: { color: 'white' },
            onPress: () => cancel()
        },
    ];

    return (
        <BottomSheet
            isVisible={visibility}
        >
            {list.map((l, i) => (
                <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}
        </BottomSheet>
    )
}

export default PhotoBottomSheet;

const styles = StyleSheet.create({

});