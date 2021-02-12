import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import NavLink from '../components/NavLink';
import { removeErrorMessage } from '../redux/actions/loginActions';

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
            <View style={styles.viewStyle}>
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

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#2B2B2B',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect(
    null,
    { removeErrorMessage }
)(SignupScreen);

