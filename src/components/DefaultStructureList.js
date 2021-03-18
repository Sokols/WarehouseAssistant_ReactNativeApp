import React from 'react';
import { FlatList, View, TouchableHighlight } from 'react-native';
import DefaultDivider from './DefaultDivider';

const DefaultStructureList = ({ data, onItemClick, listItem }) => (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View>
                <TouchableHighlight
                    onPress={() => onItemClick(item.id)}
                >
                    {listItem(item)}
                </TouchableHighlight>
                <DefaultDivider />
            </View>
        )}
    />
);

export default DefaultStructureList;
