import auth from '@react-native-firebase/auth';
import {addUserToCollection} from './firebaseServices';
import {setItemToAsync} from '../helper/globalFunction';
import {asyncConst} from '../helper/globalConstant';

export const signup = request => {
  console.log("Request :: ",request?.data, request);
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
      setItemToAsync(asyncConst.uid, uid);
      if (request?.onSuccess) request?.onSuccess(res);
    })
    .catch(error => {
      console.log("Error :: ",error);
      if (request?.onFail) request?.onFail(error);
    });
  } catch (error) {
    console.log("Signup error : ",error);
  }
  
};

export const login = request => {
  auth()
    .signInWithEmailAndPassword(request?.data?.email, request?.data?.password)
    .then(res => {
      const {uid} = res?.user;
      setItemToAsync(asyncConst.uid, uid);
      if (request?.onSuccess) request?.onSuccess(res);
    })
    .catch(error => {
      if (request?.onFail) request?.onFail(error);
    });
};
