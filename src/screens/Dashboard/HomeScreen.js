//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../../reducer/userReducer';

// create a component
const HomeScreen = () => {

    const userDetails = useSelector((state) => state.user);

    return (
        <View style={styles.container}>
            <Text >HomeScreen</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
    },
});

//make this component available to the app
export default HomeScreen;
