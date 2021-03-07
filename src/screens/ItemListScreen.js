import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import mainStyle from '../styles/style';

import DefaultButton from '../components/DefaultButton';
import DefaultSwipeList from '../components/DefaultSwipeList';
import ProvideItemOverlay from '../components/ProvideItemOverlay';
import DefaultItemListItem from '../components/DefaultItemListItem';

import { connect } from 'react-redux';
import { addItem } from '../redux/actions/itemsActions';

const ItemListScreen = ({ items, addItem }) => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    }

    return (
        <View style={mainStyle.viewStyle}>
            <View style={styles.structureStyle}>
                <DefaultSwipeList
                    data={items}
                    onItemClick={() => { }}
                    onHiddenItemClick={(id) => {/*removePlace(id)*/ }}
                    listItem={(item) => (<DefaultItemListItem item={item} />)}
                />
                <View style={styles.buttonsContainerStyle}>
                    <DefaultButton
                        buttonText="ADD AN ITEM"
                        isClickable
                        onClick={toggleOverlay}
                    />
                </View>
                <ProvideItemOverlay
                    warehouseLevel="Area"
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
      alignSelf: 'stretch'
    },
    buttonsContainerStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingVertical: 20
    },
});
