import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import StartEmptyScreen from '../screens/StartEmptyScreen';

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
                name="Start"
                component={StartEmptyScreen}
            />
            <Stack.Screen
                name="Signin"
                component={SigninScreen}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
            />
        </Stack.Navigator>
    )
}

export default LoginStackNavigator;
