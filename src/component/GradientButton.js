//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {fontSize, hp, wp} from '../helper/utils';
import LinearGradient from 'react-native-linear-gradient';

// create a component
const GradientButton = ({
  colors,
  onPress,
  containerStyle,
  title,
  titleStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0.6, y: 1}}
        colors={ colors || ['#7237EB', '#5658EC', '#4D86DB']}
        style={[styles.container, containerStyle]}>
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(6),
    width: wp(80),
    borderRadius: 30,
    marginVertical : 5
  },
  titleStyle: {
    color: '#fff',
    fontSize: fontSize(20),
    fontWeight: '400',
  },
});

//make this component available to the app
export default GradientButton;
