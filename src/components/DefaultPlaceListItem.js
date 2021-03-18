import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { MAIN_COLOR } from '../styles/colors';

const DefaultPlaceListItem = ({ item }) => (
    <ListItem
        containerStyle={styles.rowFrontStyle}
    >
        <ListItem.Content>
            <ListItem.Title style={styles.listItemStyle}>{item.id}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron size={24} />
    </ListItem>
)

export default DefaultPlaceListItem;

const styles = StyleSheet.create({
    rowFrontStyle: {
        backgroundColor: MAIN_COLOR
    },
    listItemStyle: {
        color: 'white',
        fontSize: 20
    },
});
