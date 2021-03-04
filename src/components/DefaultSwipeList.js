import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';

import { MAIN_COLOR } from '../styles/colors';

const DefaultSwipeList = ({ data, onItemClick, onHiddenItemClick }) => (
    <SwipeListView
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View>
                <TouchableHighlight
                    onPress={() => onItemClick(item.id)}
                >
                    <ListItem
                        bottomDivider
                        containerStyle={styles.rowFrontStyle}
                    >
                        <ListItem.Content>
                            <ListItem.Title style={styles.listItemStyle}>{item.id}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron size={24} />
                    </ListItem>
                </TouchableHighlight>
            </View>
        )}
        renderHiddenItem={({ item }) => (
            <View style={styles.rowBackStyle}>
                <TouchableOpacity
                    style={styles.backButtonStyle}
                    onPress={() => onHiddenItemClick(item.id)}
                >
                    <Text style={styles.backTextStyle}>DELETE</Text>
                </TouchableOpacity>
            </View>
        )}
        rightOpenValue={-75}
    />
);

export default DefaultSwipeList;

const styles = StyleSheet.create({
    rowFrontStyle: {
        backgroundColor: MAIN_COLOR
    },
    listItemStyle: {
        color: 'white',
        fontSize: 20
    },
    rowBackStyle: {
        alignItems: 'center',
        backgroundColor: MAIN_COLOR,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backButtonStyle: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        backgroundColor: '#a81f00',
        right: 0,
    },
    backTextStyle: {
        color: 'white',
        fontSize: 16
    }
});