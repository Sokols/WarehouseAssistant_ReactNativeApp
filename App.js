import React from 'react';

import { navigationRef } from './src/navigation/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';

import store from './src/redux/store/index';
import { Provider } from 'react-redux';

export default () => (
    <Provider store={store}>
        <NavigationContainer ref={navigationRef} >
            <MainNavigator />
        </NavigationContainer>
    </Provider>
)
