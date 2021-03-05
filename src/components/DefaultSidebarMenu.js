import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';

import { MAIN_COLOR } from '../styles/colors';

const DefaultSidebarMenu = (props) => (
    <View style={styles.viewStyle}>
        <Image
            style={styles.imageStyle}
            source={require('../../assets/logo.png')}
        />
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    </View>
);

export default DefaultSidebarMenu;

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: MAIN_COLOR
    },
    imageStyle: {
        marginVertical: 30,
        width: 150,
        height: 150,
        alignSelf: 'center',
    }
});