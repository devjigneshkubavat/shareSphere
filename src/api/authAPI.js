import auth from '@react-native-firebase/auth';
import {addUserToCollection, getUserData} from './firebaseServices';
import {setItemToAsync} from '../helper/globalFunction';
import {asyncConst} from '../helper/globalConstant';

export const signup = request => async (dispatch) => {
  try {
    auth()
    .createUserWithEmailAndPassword(
      request?.data?.email,
      request?.data?.password,
    )
    .then(res => {
      const {uid} = res?.user;
      addUserToCollection(uid, {
        email: request?.data?.email,
        uid: res?.user?.uid,
        username: request?.data?.username,
      });
       dispatch(getUserData(res?.user?.uid, () => {
        setItemToAsync(asyncConst.uid, uid);
        if (request?.onSuccess) request?.onSuccess(res);
       }))
    })
    .catch(error => {
      console.log("Error :: ",error);
      if (request?.onFail) request?.onFail(error);
    });
  } catch (error) {
    console.log("Signup error : ",error);
  }
  
};

export const login = request => async (dispatch) => {
  auth()
    .signInWithEmailAndPassword(request?.data?.email, request?.data?.password)
    .then(res => {
      const {uid} = res?.user;
      // setItemToAsync(asyncConst.uid, uid);
        dispatch(getUserData(res?.user?.uid, () => {
          setItemToAsync(asyncConst.uid, uid);
          if (request?.onSuccess) request?.onSuccess(res);
         }))
      // if (request?.onSuccess) request?.onSuccess(res);
    })
    .catch(error => {
      if (request?.onFail) request?.onFail(error);
    });
};
