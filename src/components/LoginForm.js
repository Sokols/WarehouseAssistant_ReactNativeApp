import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { connect } from 'react-redux';
import { signin, signup, completeAllFields } from '../redux/actions/loginActions';
import DefaultButton from './DefaultButton';
import DefaultInput from './DefaultInput';

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
        email && password 
        ? (this.props.titleText === "Sign Up"
            ? this.props.signup({ email, password })
            : this.props.signin({ email, password }))
        : this.props.completeAllFields();
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text h1 style={styles.titleStyle}>{this.props.titleText}</Text>
                <DefaultInput
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={this._onEmailChanged}
                    secureTextEntry={false}
                />
                <DefaultInput
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={this._onPasswordChanged}
                    secureTextEntry={true}
                />
                <Text style={styles.errorStyle}>{this.props.errorMessage}</Text>
                <DefaultButton
                    buttonText="OKAY"
                    onClick={this._onSubmit}
                />
                <Image
                    style={styles.imageStyle}
                    source={require('../../assets/logo.png')}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ login }) => {
    const { errorMessage } = login;
    return { errorMessage };
}

export default connect(
    mapStateToProps,
    { signin, signup, completeAllFields }
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
    }
})
