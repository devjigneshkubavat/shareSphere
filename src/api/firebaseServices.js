import firestore from '@react-native-firebase/firestore';

export const addUserToCollection = (uid, payload) => {
  firestore()
    .collection('Users')
    .doc(uid)
    .set(payload)
    .then(() => {
      console.log('User added!');
    });
};

export const getUserData = async (uid) => {
  const user = await firestore().collection('Users').doc(uid).get();
  console.log("User :: ",user.data());
  return user.data()
};
 