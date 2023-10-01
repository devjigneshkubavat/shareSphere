//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from './src/reducer/store';

// create a component
const App = () => {

  const toastConfig = {
    tomatoToast: ({text1, props}) => (
      <View style={styles.toastContainer}>
        <Text style={styles.toastText}>{text1}</Text>
      </View>
    ),
  };

  return (
    <Provider store={store} >
      <MainNavigation />
      <Toast config={toastConfig} />
    </Provider>
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
  toastContainer: {
    height: 60,
    width: '90%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  toastText : {
    color : 'white'
  }
});

//make this component available to the app
export default App;
