import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { LIGHT_COLOR } from '../styles/colors';

const DefaultDivider = () => (
    <Divider 
        style={styles.dividerStyle}
    />
);

export default DefaultDivider;

const styles = StyleSheet.create({
  dividerStyle: {
    height: 1,
    backgroundColor: LIGHT_COLOR,
    alignSelf: 'stretch',
  },
});