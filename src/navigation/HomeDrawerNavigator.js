import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import StructureScreen from '../screens/StructureScreen';
import AddItemScreen from '../screens/AddItemScreen';
import PickItemScreen from '../screens/PickItemScreen';
import AccountScreen from '../screens/AccountScreen';

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {
    return (
        <Drawer.Navigator
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
                name="Structure"
                component={StructureScreen}
                options={{
                    title: 'Warehouse structure'
                }}
            />
            <Drawer.Screen
                name="AddItem"                
                component={AddItemScreen}
                options={{
                    title: 'Add item'
                }}
            />
            <Drawer.Screen
                name="PickItem"
                component={PickItemScreen}
                options={{
                    title: 'Pick item'
                }}
            />
            <Drawer.Screen
                name="Account"
                component={AccountScreen}
            />
        </Drawer.Navigator>
    )
}

export default HomeDrawerNavigator;
