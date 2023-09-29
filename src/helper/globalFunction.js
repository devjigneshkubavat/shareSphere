import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncConst} from './globalConstant';
import axios from 'axios';
import Toast  from 'react-native-toast-message';

export const getItemFromAsync = async key => {
  const result = await AsyncStorage.getItem(key);
  return JSON.parse(result);
};

export const setItemToAsync = async (key, val) => {
  await AsyncStorage.setItem(key, JSON.stringify(val));
};

export const makeAPIRequest = ({
  url,
  method,
  header,
  token = true,
  data,
  params,
}) => {
  return new Promise(async (resolve, reject) => {
    const accessToken = await getItemFromAsync(asyncConst.accessToken);

    const headers = {
      ...header,
      ...(token && `Bearer ${accessToken}`),
    };

    const options = {
      url: url,
      method: method,
      header: headers,
      data: data,
      params: params,
    };

    return axios(options)
      .then(response => {
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};


export const validateEmail = (email) => {
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  return emailRegex?.test(email);
}

export const showToast = (text) => {
  Toast.show({type: 'tomatoToast',text1 : text})
}