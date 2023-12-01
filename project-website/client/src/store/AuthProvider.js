import { useState } from "react";
import AuthContext from "./auth-context";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

// const provider = new GoogleAuthProvider();

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [isLogIn, setIsLogIn] = useState(false);

  const navigate = useNavigate();

  // onAuthStateChanged(auth, (user) => {
  //   console.log(user);
  //   setCurrentUser(user);
  // });

  const signUp = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.displayName = name;
        console.log(user);
        setIsLogIn(true);
        setCurrentUser(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
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
          setCurrentUser(user);
          console.log(user);

          setIsLogIn(true);
          navigate("/");
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
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log(result);
          const user = result.user;
          console.log("Login with " + user);
          setIsLogIn(true);
          setCurrentUser(user);
          console.log(user);

          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
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
          setCurrentUser(user);
          console.log(user);

          setIsLogIn(true);
          navigate("/");
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
    } else if (method === "GitHub") {
      const provider = new GithubAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          setCurrentUser(user);
          setIsLogIn(true);
          console.log(user);

          navigate("/");
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error);
          // ...
        });
    }
  };

  const logOut = () => {
    setCurrentUser({});
    setIsLogIn(false);
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
    currentUser: currentUser,
    isLogIn: isLogIn,
    signUp: signUp,
    logIn: logIn,
    logOut: logOut,
    resetPassword: () => {},
    sendEmailVerification: () => {},
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
