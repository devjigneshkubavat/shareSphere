//import liraries
import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import {hp, wp} from '../helper/utils';
import { icons } from '../helper/iconConstant';

// create a component
const PrimaryInput = ({
  value,
  placeholder,
  onChangeText,
  containerStyle,
  textInputStyle,
  secureTextEntry,
  isRightIcon
}) => {

    const [isPassVisible, setIsPassVisible] = useState(secureTextEntry);

    const onEyePress = () => {
        setIsPassVisible(!isPassVisible)
    }

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={'#8C8C8C'}
        placeholder={placeholder}
        style={[styles.inputStyle, textInputStyle]}
        secureTextEntry= {isPassVisible}
      />
      { isRightIcon && 
      <TouchableOpacity onPress={onEyePress} >
          <Image source={ isPassVisible ? icons.openEye : icons.closeEye} style = {styles.rightIconStyle}  />
        </TouchableOpacity> }
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    width: wp(85),
    height: hp(7),
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: hp(10),
    flexDirection: 'row',
    paddingHorizontal: wp(5),
    backgroundColor : '#F7F7F7'
  },
  inputStyle: {
    flex: 1,
    height : hp(5),
  },
  rightIconStyle : {
    height : hp(3),
    width : hp(3),
    tintColor : 'grey'
  }
});

//make this component available to the app
export default PrimaryInput;
