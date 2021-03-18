import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { LIGHT_COLOR, MAIN_COLOR, SECONDARY_COLOR } from '../styles/colors';

const DefaultSearchBar = ({ onUpdate }) => {
    const [search, setSearch] = useState('');

    const _updateSearch = (search) => {
        setSearch(search)
        onUpdate(search)
    }

    return (
        <SearchBar
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Type here..."
            onChangeText={_updateSearch}
            value={search}
            selectionColor={LIGHT_COLOR}
        />
    )
}

export default DefaultSearchBar;

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: MAIN_COLOR
    },
    inputContainerStyle: {
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10,
    },
    inputStyle: {
        color: 'white',
    }
});