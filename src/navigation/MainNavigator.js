import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

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
                name="Splash"
                component={SplashScreen}
            />
            <Stack.Screen
                name="Login"
                component={LoginStackNavigator}
            />
            <Stack.Screen
                name="Home"
                component={HomeDrawerNavigator}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator;
