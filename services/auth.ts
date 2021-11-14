// import firebase from "firebase/auth";
import firebase from "firebase";

import * as Google from "expo-google-app-auth";
import store from "../state/store";
import { createNewUserRecord, getUserRecord } from "./firestore";
import { firebaseConfig } from "./firebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// Listen for authentication state to change.

export async function loginWithGoogle() {
  firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      store.dispatch({
        type: "LOGIN",
        name: "user?.displayName",
        uid: "user?.uid",
        // isNewUser: result.additionalUserInfo?.isNewUser ?? false,
      });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  // const { idToken, accessToken } = await Google.logInAsync({
  //   androidClientId:
  //     "257815512478-n6a6cqoputhcv7t6dkoaouq5pbflums9.apps.googleusercontent.com",
  //   iosClientId:
  //     "257815512478-p64p6u8jfgibuo92d4gaj018gn1aqmf3.apps.googleusercontent.com",
  //   scopes: ["profile", "email"],
  // });
  // const credential = firebase.auth.GoogleAuthProvider.credential(
  //   idToken,
  //   accessToken
  // );
  // firebase
  //   .auth()
  //   .signInWithCredential(credential)
  //   .then((result) => {
  //     var credential = result.credential;
  //     var user = result.user;
  //     if (result.additionalUserInfo?.isNewUser) {
  //       createNewUserRecord(user?.displayName!, user?.email!, result.user!.uid);
  //     }
  //     store.dispatch({
  //       type: "LOGIN",
  //       name: user?.displayName,
  //       uid: user?.uid,
  //       isNewUser: result.additionalUserInfo?.isNewUser ?? false,
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

export async function login(email: string, password: string) {
  const result = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  store.dispatch({
    type: "LOGIN",
    name: result.user?.displayName,
    uid: result.user?.uid,
  });
}

export async function register(name: string, email: string, password: string) {
  console.log("clicked");
  const result = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  await result.user?.updateProfile({ displayName: name });
  await createNewUserRecord(name, email, result.user!.uid);
  getUserRecord(result.user!.uid, true);
}

export async function logout() {
  console.log("Logging out");
  await firebase.auth().signOut();
  store.dispatch({ type: "LOGOUT" });
}
