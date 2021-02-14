import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { signout } from '../redux/actions/loginActions';
import { connect } from 'react-redux';
import mainStyle from '../styles/style';

class AccountScreen extends Component {
  render() {
    return (
      <View style={mainStyle.viewStyle}>
        <TouchableOpacity
          style={styles.touchStyle}
          onPress={this.props.signout}
        >
          <Text style={styles.buttonStyle}>Sign out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  touchStyle: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  buttonStyle: {
    color: 'white',
    fontSize: 30
  }
});

export default connect(
  null,
  { signout }
)(AccountScreen);
