import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

import mainStyle from '../styles/style';

import auth from '@react-native-firebase/auth';

import { connect } from 'react-redux';
import { resetData } from '../redux/actions/structureActions';

const SplashScreen = ({ navigation, resetData }) => {
    useEffect(() => {
        resetData();
        navigateToScreens();
    }, [navigation]);

    function navigateToScreens() {
        const { currentUser } = auth();
        setTimeout(() => {
            if (!currentUser) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }]
                });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }]
                });
            }
        }, 2000);
    };

    return (
        <View style={mainStyle.viewStyle} >
            <Image
                style={styles.imageStyle}
                source={require('../../assets/logo.png')}
            />
        </View>
    );
}

export default connect(
    null,
    { resetData }
)(SplashScreen);

const styles = StyleSheet.create({
    imageStyle: {
        height: 300,
        width: 300
    }
});
