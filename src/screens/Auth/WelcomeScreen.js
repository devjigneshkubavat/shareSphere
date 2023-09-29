//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fontSize, hp} from '../../helper/utils';
import {GradientButton, PrimaryButton} from '../../component';
import {navigate, resetStackNavigation} from '../../helper/navigationRef';
import {asyncConst, routeName} from '../../helper/globalConstant';
import {getItemFromAsync, setItemToAsync} from '../../helper/globalFunction';
import { getUserData } from '../../api/firebaseServices';

// create a component
const WelcomeScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    (async () => {
        try {
            const isLogedIn = await getItemFromAsync(asyncConst.uid);
            if (isLogedIn) {
                const userData = await getUserData(isLogedIn);
                setItemToAsync(asyncConst.userDetails, userData)
                resetStackNavigation(routeName.homeScreen);
              }
              else{
                setIsLoggedIn(false)
              }
            
        } catch (error) {
            console.log("err :: ",error);
        }
      
    })();
  }, []);

  const onLoginPress = () => {
    navigate(routeName.loginScreen, {signupMethod: 'Login'});
  };

  const onSignupPress = () => {
    navigate(routeName.loginScreen, {signupMethod: 'Signup'});
  };

  return (
    <View style={styles.container}>
      {!isLoggedIn ? (
        <>
          <Text style={styles.welcomeText}>Welcome !</Text>
          <GradientButton
            title={'Create Account'}
            containerStyle={styles.gradientBtnStyle}
            onPress={onSignupPress}
          />
          <PrimaryButton title={'Login'} onPress={onLoginPress} />
        </>
      ) : null}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: fontSize(30),
    fontWeight: '600',
    color: '#3F3F3F',
  },
  gradientBtnStyle: {
    marginTop: hp(3),
    marginBottom: hp(1.5),
  },
  alreadyAccText: {
    fontSize: fontSize(15),
    fontWeight: '500',
    color: 'grey',
    marginTop: hp(3),
  },
});

//make this component available to the app
export default WelcomeScreen;
