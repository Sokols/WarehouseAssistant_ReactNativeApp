import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import mainStyle from '../styles/style';

import DefaultButton from '../components/DefaultButton';
import DefaultSwipeList from '../components/DefaultSwipeList';
import ProvideItemOverlay from '../components/ProvideItemOverlay';
import DefaultItemListItem from '../components/DefaultItemListItem';

import { connect } from 'react-redux';
import { addItem } from '../redux/actions/itemsActions';
import { SECONDARY_COLOR } from '../styles/colors';
import EmptyInfoText from '../components/EmptyInfoText';

const ItemListScreen = ({ items, addItem }) => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    }

    return (
        <View style={mainStyle.viewStyle}>
            <View style={styles.structureStyle}>
                {
                    items.length > 0
                        ?  <FlatList
                            data={items}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => (<DefaultItemListItem item={item} />)}
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
    { addItem }
)(ItemListScreen);

const styles = StyleSheet.create({
    structureStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: SECONDARY_COLOR
    },
    buttonsContainerStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingVertical: 20
    },
});
