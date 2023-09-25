//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';

// create a component
const App = () => {
  return (
      <MainNavigation/>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
