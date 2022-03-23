import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';

import theme from "../global/styles/theme";
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                tabBarInactiveTintColor: theme.colors.text,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 88
                }
            }}
        >
            <Screen name="Listagem"
                component={Dashboard}
                options={{ 
                    headerShown: false, 
                    tabBarIcon:(({size, color}) => (
                        <MaterialIcons size={size} color={color} 
                        name="format-list-bulleted" />
                    )) 
                }} />
            <Screen name="Cadastrar"
                component={Register}
                options={{ 
                    headerShown: false, 
                    tabBarIcon:(({size, color}) => (
                        <MaterialIcons size={size} color={color} 
                        name="attach-money" />
                    )) 
                    }}/>
            <Screen name="Resumo"
                component={Register}
                options={{ 
                    headerShown: false, 
                    tabBarIcon:(({size, color}) => (
                        <MaterialIcons size={size} color={color} 
                        name="pie-chart" />
                    ))  
                    }}/>
        </Navigator>
    );
}