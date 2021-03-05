import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { MAIN_COLOR } from '../styles/colors';

const DefaultItemListItem = ({ item }) => (
    <ListItem
        containerStyle={styles.rowFrontStyle}
    >
        <ListItem.Content>
            <ListItem.Title style={styles.titleStyle}>{item.name}</ListItem.Title>
            <ListItem.Subtitle style={styles.subtitleStyle}>ID: {item.id}</ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
)

export default DefaultItemListItem;

const styles = StyleSheet.create({
    rowFrontStyle: {
        backgroundColor: MAIN_COLOR
    },
    titleStyle: {
        color: 'white',
        fontSize: 20
    },
    subtitleStyle: {
        color: 'gray',
        fontSize: 16
    }
});
