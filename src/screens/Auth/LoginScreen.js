//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
import {PrimaryButton, PrimaryInput} from '../../component';
import {fontSize, hp, wp} from '../../helper/utils';
import Toast from 'react-native-toast-message'
import { login, signup } from '../../api/authAPI';
import { showToast, validateEmail } from '../../helper/globalFunction';
import { resetStackNavigation } from '../../helper/navigationRef';
import { routeName } from '../../helper/globalConstant';

// create a component
const LoginScreen = ({route}) => {
  const {signupMethod} = route?.params || '';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(
    signupMethod === 'Login' ? false : true,
  );
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const onEmailChange = txt => {
    setEmail(txt);
  };
  const onPasswordChange = txt => {
    setPassword(txt);
  };
  const onUsernameChange = txt => {
    setUsername(txt);
  };

  const onLoginPress = () => {
    if(email === ''){
      showToast('Please enter email')
    }else if(!validateEmail(email)){
      showToast("Please enter valid email")
    }else if( isSignup && username === ''){
      showToast("Please enter username")
    }else if(password === ''){
      showToast('Please enter password')
    }else{
      let request = {
        data : {
          email, password
        },
        onSuccess : (res) => {
          // console.log("response at screen : ",res);
          resetStackNavigation(routeName.homeScreen)
        },
        onFail : (error) => {
          console.log("Error.code :: ",error.code);
          if (error.code === 'auth/email-already-in-use') showToast('That email address is already in use!')
          if (error.code === 'auth/invalid-email') showToast('That email address is invalid!')
          if (error.code === 'auth/invalid-login') showToast('Invalid Credentials!')
        }
      }
    if(isSignup){
      request.data.username = username
      signup(request)
    }else{
      login(request)
    }
  }
  };

  const onAlreadyHaveAnAccPress = () => {
    setIsSignup(!isSignup);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Welcome back!</Text>
      <PrimaryInput
        value={email}
        onChangeText={onEmailChange}
        placeholder={'Email'}
        containerStyle={styles.inputContainer}
      />
      {isSignup && (
        <PrimaryInput
          value={username}
          onChangeText={onUsernameChange}
          placeholder={'Username'}
          containerStyle={styles.inputContainer}
        />
      )}
      <PrimaryInput
        value={password}
        onChangeText={onPasswordChange}
        placeholder={'Password'}
        isRightIcon
        secureTextEntry
      />
      <PrimaryButton
        title={isSignup ? 'Signup' : 'Login'}
        onPress={onLoginPress}
        containerStyle={styles.loginBtnContainer}
      />
      <TouchableOpacity activeOpacity={0} onPress={onAlreadyHaveAnAccPress}>
      <Text style={styles.alreadyHaveAnAcc} >
        {isSignup
          ? 'Already have an ccount? Signin'
          : 'Don‘t have an coount? Signup'}
      </Text>
      </TouchableOpacity>
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
  inputContainer: {
    marginBottom: hp(2),
  },
  loginText: {
    fontSize: fontSize(35),
    fontWeight: '700',
    marginBottom: hp(5),
    color: '#3F3F3F',
  },
  loginBtnContainer: {
    width: wp(85),
    marginTop: hp(5),
  },
  alreadyHaveAnAcc: {
    color: '#3F3F3F',
    marginTop: hp(3),
  },
  toastStyle: {
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});

//make this component available to the app
export default LoginScreen;
