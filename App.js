import React from 'react';

import { setNavigator } from './src/navigationRef';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/Routes';

import store from './src/redux/store/index';
import { Provider } from 'react-redux';

export default () => (
    <Provider store={store}>
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    </Provider>
)
