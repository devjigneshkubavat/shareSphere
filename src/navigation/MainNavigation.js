//import liraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import { routeName } from '../helper/globalConstant';
import { navigationRef } from '../helper/navigationRef';
import HomeScreen from '../screens/Dashboard/HomeScreen';

const Stack = createNativeStackNavigator();

// create a component
const MainNavigation = () => {
    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName={routeName.welcomeScreen} >
                <Stack.Screen name={routeName.welcomeScreen} component={WelcomeScreen} />
                <Stack.Screen name={routeName.loginScreen} component={LoginScreen} />
                <Stack.Screen name={routeName.homeScreen} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

//make this component available to the app
export default MainNavigation;
