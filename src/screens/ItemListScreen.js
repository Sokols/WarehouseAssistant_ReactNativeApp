import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import mainStyle from '../styles/style';

import DefaultButton from '../components/DefaultButton';
import ProvideItemOverlay from '../components/ProvideItemOverlay';
import DefaultItemListItem from '../components/DefaultItemListItem';
import DefaultSearchBar from '../components/DefaultSearchBar';

import { connect } from 'react-redux';
import { addItem, removeItem, setItemsBySearch } from '../redux/actions/itemsActions';
import { MAIN_COLOR } from '../styles/colors';
import EmptyInfoText from '../components/EmptyInfoText';

const ItemListScreen = ({ items, addItem, removeItem, setItemsBySearch }) => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={mainStyle.viewStyle}>
            <View style={styles.structureStyle}>
                <DefaultSearchBar 
                    onUpdate={search => setItemsBySearch(search)}
                />
                {
                    items.length > 0
                        ? <FlatList
                            data={items}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => (
                                <DefaultItemListItem 
                                    item={item}
                                    onItemClick={(item) => removeItem(item)}
                                />
                            )}
                        />
                        : <EmptyInfoText
                            text={'There is nothing here.\nAdd new item!'}
                        />
                }
               
                <View style={styles.buttonsContainerStyle}>
                    <DefaultButton
                        buttonText="ADD AN ITEM"
                        isClickable
                        onClick={toggleOverlay}
                    />
                </View>
                <ProvideItemOverlay
                    isVisible={visible}
                    toggleOverlay={toggleOverlay}
                    onSubmit={data => addItem(data)}
                />
            </View>
        </View>
    )
}

const mapStateToProps = ({ items }) => {
    const data = items.items;
    return { items: data };
}

export default connect(
    mapStateToProps,
    { addItem, removeItem, setItemsBySearch }
)(ItemListScreen);

const styles = StyleSheet.create({
    structureStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: MAIN_COLOR
    },
    buttonsContainerStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingVertical: 20
    },
});
