import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Account"
            screenOptions={{ 
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#2B2B2B'
                },
                headerTintColor: 'white'
            }}
            drawerType='slide'
            drawerStyle={{
                backgroundColor: '#2B2B2B'
            }}
            drawerContentOptions={{
                labelStyle: {
                    color: 'white'
                },
                activeTintColor: 'gray'
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
            />
            <Drawer.Screen
                name="Account"
                component={AccountScreen}
            />
        </Drawer.Navigator>
    )
}

export default MainDrawerNavigator;


/*
import Icon from 'react-native-vector-icons/MaterialIcons';
navigationOptions: {
    tabBarIcon: () => <Icon size={24} name="home" color="white" />
}
tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    inactiveBackgroundColor: '#1E1D1D',
    activeBackgroundColor: '#141414'
}
*/