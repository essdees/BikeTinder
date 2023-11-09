import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../screens/LandingPage';
import ChatScreen from '../screens/ChatScreen';
import { NavigationConstants } from '../constants/ApplicationEnums';
import { RootStackParamList } from './Navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={NavigationConstants.LANDING_PAGE}
                component={LandingPage}
            />
            <Stack.Screen
                name={NavigationConstants.CHAT_SCREEN}
                component={ChatScreen}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
