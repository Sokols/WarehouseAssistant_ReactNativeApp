import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { setNavigator } from './src/navigationRef';

import store from './src/redux/store/index';
import { Provider } from 'react-redux';

import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';
import StartEmptyScreen from './src/screens/StartEmptyScreen';

const mainFlow = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {

            }
        },
        Account: {
            screen: AccountScreen
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: '#4f4f4f'
        }
    }
)

const switchNavigator = createSwitchNavigator({
    StartEmpty: StartEmptyScreen,
    loginFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
    mainFlow
})

const App = createAppContainer(switchNavigator);

export default () => (
    <Provider store={store}>
        <App ref={(navigator) => setNavigator(navigator)} />
    </Provider>
)
