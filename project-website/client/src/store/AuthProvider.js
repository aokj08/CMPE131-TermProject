import { useEffect, useState } from "react";
import AuthContext from "./auth-context";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

// const provider = new GoogleAuthProvider();

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // auth.signOut();
        // navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const logInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const logIn = (method, email, password) => {
    if (method === "Google") {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } else if (method === "Email") {
      console.log("In progress");
    } else if (method === "Facebook") {
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);
          // ...
        });
    }
  };

  const logOut = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    // .env use case      url: process.env.REACT_APP_MAIL_URL + '?email=' + email,
    // local dev case     url: "http://localhost:3000/?email=" + email,
    // product case     url: "https://you-domain/?email=' + email,
    const actionCodeSettings = {
      url: "",
    };
    //return auth.sendPasswordResetEmail(email, actionCodeSettings);
    return auth.sendPasswordResetEmail(email, actionCodeSettings);
  };

  function sendEmailVerification() {
    // .env use case      url: process.env.REACT_APP_MAIL_URL + 'dashboard'
    // local dev case     url: "http://localhost:3000/dashboard"
    // product case     url: "https://you-domain/dashboard'

    const actionCodeSettings = {
      url: "",
    };
    return currentUser.sendEmailVerification(actionCodeSettings);
  }

  const value = {
    currentUser: "",
    isLogin: false,
    signUp: signUp,
    logIn: logIn,
    logInWithGoogle: logInWithGoogle,
    logOut: () => {},
    resetPassword: () => {},
    sendEmailVerification: () => {},
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
