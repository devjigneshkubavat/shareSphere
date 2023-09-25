//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from '../screens/Auth/LoginScreen';

const Stack = createNativeStackNavigator();

// create a component
const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false}} >
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

//make this component available to the app
export default MainNavigation;
