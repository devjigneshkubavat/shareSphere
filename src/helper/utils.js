// const { heightPercentageToDP, widthPercentageToDP } = require("react-native-responsive-screen");
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize';

export const hp = (val) => heightPercentageToDP(val);

export const wp = (val) => widthPercentageToDP(val);

export const fontSize = (val) => RFValue(val, 812);