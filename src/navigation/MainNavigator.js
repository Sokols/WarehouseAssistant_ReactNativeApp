import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SPLASH, LOGIN, HOME } from './constants';

import SplashScreen from '../screens/SplashScreen';
import LoginStackNavigator from './LoginStackNavigator';
import HomeDrawerNavigator from './HomeDrawerNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name={SPLASH}
                component={SplashScreen}
            />
            <Stack.Screen
                name={LOGIN}
                component={LoginStackNavigator}
            />
            <Stack.Screen
                name={HOME}
                component={HomeDrawerNavigator}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator;
