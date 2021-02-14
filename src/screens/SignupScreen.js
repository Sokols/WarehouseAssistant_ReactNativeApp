import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import NavLink from '../components/NavLink';
import { removeErrorMessage } from '../redux/actions/loginActions';
import mainStyle from '../styles/style';

class SignupScreen extends Component {
    static navigationOptions = {
        headerShown: false
    };

    constructor(props) {
        super(props);
    };

    render() {
        const { navigation } = this.props;

        return (
            <View style={mainStyle.viewStyle}>
                <NavigationEvents
                    onWillFocus={this.props.removeErrorMessage}
                />
                <LoginForm
                    titleText="Sign Up"
                />
                <NavLink
                    navLinkText="Already have an account? Sign in!"
                    callback={() => navigation.navigate('Signin')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default connect(
    null,
    { removeErrorMessage }
)(SignupScreen);

