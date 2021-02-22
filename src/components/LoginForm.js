import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Image } from 'react-native-elements';
import { connect } from 'react-redux';
import { test, signin, signup } from '../redux/actions/loginActions';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    };

    _onEmailChanged = email => {
        this.setState({ email });
    };

    _onPasswordChanged = password => {
        this.setState({ password });
    };

    _onSubmit = () => {
        const { email, password } = this.state;
        this.props.titleText === "Sign Up"
            ? this.props.signup({ email, password })
            : this.props.signin({ email, password });
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text h1 style={styles.titleStyle}>{this.props.titleText}</Text>
                <Input
                    placeholder="Email"
                    placeholderTextColor="#FFFFFF88"
                    value={this.state.email}
                    inputContainerStyle={styles.inputStyle}
                    onChangeText={this._onEmailChanged}
                    style={styles.inputStyle}
                />
                <Input
                    placeholder="Password"
                    placeholderTextColor="#FFFFFF88"
                    value={this.state.password}
                    style={styles.inputStyle}
                    inputContainerStyle={styles.inputStyle}
                    onChangeText={this._onPasswordChanged}
                    secureTextEntry={true}
                />
                <Text style={styles.errorStyle}>{this.props.errorMessage}</Text>
                <TouchableOpacity
                    style={styles.touchStyle}
                    onPress={this._onSubmit}
                >
                    <Text h4 style={styles.buttonStyle}>OKAY</Text>
                </TouchableOpacity>
                <Image
                    style={styles.imageStyle}
                    source={require('../../assets/logo.png')}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ login }) => {
    const { errorMessage, token } = login;
    return { errorMessage, token };
}

export default connect(
    mapStateToProps,
    { test, signin, signup }
)(LoginForm);

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center',
        margin: 50
    },
    titleStyle: {
        color: 'white',
        marginBottom: 25
    },
    inputStyle: {
        borderColor: 'white',
        color: 'white',
        alignSelf: 'center'
    },
    errorStyle: {
        color: 'white',
        marginBottom: 10
    },
    imageStyle: {
        marginTop: 50,
        height: 150,
        width: 150,
        borderRadius: 90,
        borderWidth: 1,
        borderColor: 'white'
    },
    buttonStyle: {
        color: 'white'
    },
    touchStyle: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10
    }
})
