//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {fontSize, hp, wp} from '../helper/utils';

// create a component
const PrimaryButton = ({title, containerStyle, textStyle, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={[styles.titleText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4D86DB',
    height: hp(7),
    width: wp(80),
    borderRadius: 30,
    marginVertical: 5,
  },
  titleText: {
    color: '#7237EB',
    fontSize: fontSize(17),
    fontWeight: '400',
  },
});

//make this component available to the app
export default PrimaryButton;
