import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text, Icon } from 'react-native-elements';
import { LIGHT_COLOR, SECONDARY_COLOR } from '../styles/colors';
import { getPhotoUrl } from '../data/storage';

const DefaultItemListItem = ({ item, onItemClick }) => {
    const [imageUrl, setImageUrl] = useState(undefined);

    useEffect(() => {
        getPhotoUrl(item.fileName)
            .then(url => setImageUrl(url));
    });

    return (
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
                <View style={styles.rightStyle}>
                    <Card.Title style={styles.titleStyle}>{item.name}</Card.Title>
                    <Text style={styles.subtitleStyle}>ID: {item.id}</Text>
                    <TouchableOpacity
                        style={styles.deleteStyle}
                        onPress={() => onItemClick(item)}
                    >
                        <Icon name='trash' type='font-awesome' color='white' />
                    </TouchableOpacity>
                </View>
            </View>
        </Card>
    )
}

export default DefaultItemListItem;

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: SECONDARY_COLOR,
        borderColor: LIGHT_COLOR,
        borderRadius: 15
    },
    mainCardStyle: {
        flexDirection: 'row',
    },
    rightStyle: {
        flex: 1
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
        borderLeftColor: LIGHT_COLOR,
        marginHorizontal: 10
    },
    deleteStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0
    }
});
