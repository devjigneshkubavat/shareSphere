import firestore from '@react-native-firebase/firestore';
import { setUserDetails } from '../reducer/userReducer';

export const addUserToCollection = (uid, payload) => {
  firestore()
    .collection('Users')
    .doc(uid)
    .set(payload)
    .then(() => {
      console.log('User added!');
    });
};

export const getUserData =  (uid, callback) => async (dispatch) => {
  const user = await firestore().collection('Users').doc(uid).get();
  dispatch(setUserDetails(user.data()));

  if (callback) {
    callback();
  }
  return user.data()
};
 