import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';

import { MAIN_COLOR } from '../styles/colors';
import { Icon } from 'react-native-elements';

import { signout } from '../redux/actions/loginActions';
import { connect } from 'react-redux';

const DefaultSidebarMenu = (props) => {
    const { signout } = props;
    return (
        <View style={styles.viewStyle}>
            <Image
                style={styles.imageStyle}
                source={require('../../assets/logo.png')}
            />
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <DrawerItem
                icon={() => (<Icon name='power-off' type='font-awesome' color='white' />)}
                label="Log out"
                labelStyle={styles.logoutStyle}
                onPress={signout}
            />
        </View>
    );
}

export default connect(
    null,
    { signout }
)(DefaultSidebarMenu);

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
    },
    logoutStyle: {
        color: 'white',
        fontSize: 16
    }
});