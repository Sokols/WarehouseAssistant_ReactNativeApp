import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { MAIN_COLOR, SECONDARY_COLOR } from '../styles/colors';
import { getPhotoUrl } from '../data/storage';

const DefaultItemListItem = ({ item }) => {
    const [imageUrl, setImageUrl] = useState(undefined);

    useEffect(() => {
        getPhotoUrl(item.fileName)
            .then(url => setImageUrl(url));
    });

    return(
    <Card containerStyle={styles.containerStyle}>
        <View style={styles.mainCardStyle}>
            <View>
                <Card.Image
                    style={styles.imageStyle}
                    source={{ uri: imageUrl }}
                />
            </View>
            <View
                style={styles.dividerStyle}
            />
            <View>
                <Card.Title style={styles.titleStyle}>{item.name}</Card.Title>
                <Text style={styles.subtitleStyle}>ID: {item.id}</Text>
            </View>
        </View>
    </Card>
)}

export default DefaultItemListItem;

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: MAIN_COLOR,
        borderColor: SECONDARY_COLOR,
        borderRadius: 15
    },
    mainCardStyle: {
        flexDirection: 'row',
    },
    rowFrontStyle: {
        backgroundColor: MAIN_COLOR
    },
    titleStyle: {
        color: 'white',
        fontSize: 20,
    },
    subtitleStyle: {
        color: 'gray',
        fontSize: 16,
    },
    imageStyle: {
        height: 175,
        width: 130
    },
    dividerStyle: {
        borderLeftWidth: 1.5,
        borderLeftColor: SECONDARY_COLOR,
        marginHorizontal: 10
    }
});
