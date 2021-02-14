import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './src/navigationRef';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import store from './src/redux/store/index';
import { Provider } from 'react-redux';

import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';
import StartEmptyScreen from './src/screens/StartEmptyScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';

const mainFlow = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: () => <Icon size={24} name="home" color="white" />
            }
        },
        Account: {
            screen: AccountScreen,
            navigationOptions: {
                tabBarIcon: () => <Icon size={24} name="person" color="white" />
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            inactiveBackgroundColor: '#1E1D1D',
            activeBackgroundColor: '#141414'
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
