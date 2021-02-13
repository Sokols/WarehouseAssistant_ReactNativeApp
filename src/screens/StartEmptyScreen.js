import React, { Component } from 'react';
import { View } from 'react-native';
import { tryLocalSignin } from '../redux/actions/loginActions';
import { connect } from 'react-redux';
import mainStyle from '../styles/style';

class StartEmptyScreen extends Component {
    componentDidMount() {
        this.props.tryLocalSignin();
    }

    render() {
        return (
            <View style={mainStyle.viewStyle} />
        );
    }
}

export default connect(
    null,
    { tryLocalSignin }
)(StartEmptyScreen);
