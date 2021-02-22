import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { tryLocalSignin } from '../redux/actions/loginActions';
import { connect } from 'react-redux';
import mainStyle from '../styles/style';

const StartEmptyScreen = ({ tryLocalSignin }) => {
    useEffect(() => {
        setTimeout(() => {
            tryLocalSignin();
        }, 2000);
    })

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
    { tryLocalSignin }
)(StartEmptyScreen);

const styles = StyleSheet.create({
    imageStyle: {
        height: 300,
        width: 300
    }
});
