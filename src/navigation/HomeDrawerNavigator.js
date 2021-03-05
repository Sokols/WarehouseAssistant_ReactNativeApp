import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { SECONDARY_COLOR } from '../styles/colors';

import HomeScreen from '../screens/HomeScreen';
import StructureScreen from '../screens/StructureScreen';
import ItemListScreen from '../screens/ItemListScreen';
import AddItemScreen from '../screens/AddItemScreen';
import PickItemScreen from '../screens/PickItemScreen';
import AccountScreen from '../screens/AccountScreen';

import DefaultSidebarMenu from '../components/DefaultSidebarMenu';

import { Icon } from 'react-native-elements';

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: SECONDARY_COLOR
                },
                headerTintColor: 'white'
            }}
            drawerType='slide'
            drawerContentOptions={{
                labelStyle: {
                    color: 'white',
                    fontSize: 16                    
                },
                activeTintColor: SECONDARY_COLOR
            }}
            drawerContent={(props) => <DefaultSidebarMenu {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    drawerIcon: () => (<Icon name='home' type='font-awesome' color='white' />)                  
                }}
            />
            <Drawer.Screen
                name="Structure"
                component={StructureScreen}                
                options={{
                    title: 'Warehouse structure',
                    drawerIcon: () => (<Icon name='archive' type='font-awesome' color='white' />)     
                }}
            />
            <Drawer.Screen
                name="ItemList"
                component={ItemListScreen}                
                options={{
                    title: 'Item list',
                    drawerIcon: () => (<Icon name='list' type='font-awesome' color='white' />)     
                }}
            />
            <Drawer.Screen
                name="AddItem"
                component={AddItemScreen}
                options={{
                    title: 'Add item',
                    drawerIcon: () => (<Icon name='download' type='font-awesome' color='white' />)     
                }}
            />
            <Drawer.Screen
                name="PickItem"
                component={PickItemScreen}
                options={{
                    title: 'Pick item',
                    drawerIcon: () => (<Icon name='upload' type='font-awesome' color='white' />)                     
                }}
            />
            <Drawer.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    title: 'Account',
                    drawerIcon: () => (<Icon name='user' type='font-awesome' color='white' />)                     
                }}
            />
        </Drawer.Navigator>
    )
}

export default HomeDrawerNavigator;
