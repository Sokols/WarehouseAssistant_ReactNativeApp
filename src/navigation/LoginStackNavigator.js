import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { SIGNUP, SIGNIN } from '../navigation/constants';

import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <Stack.Screen
                name={SIGNIN}
                component={SigninScreen}
            />
            <Stack.Screen
                name={SIGNUP}
                component={SignupScreen}
            />
        </Stack.Navigator>
    )
}

export default LoginStackNavigator;
