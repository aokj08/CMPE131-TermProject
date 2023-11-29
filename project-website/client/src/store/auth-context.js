import React from "react";

const AuthContext = React.createContext({
  currentUser: "",
  signUp: () => {},
  logIn: () => {},
  logInWithGoogle: () => {},
  logOut: () => {},
  resetPassword: () => {},
  sendEmailVerification: () => {},
});

export default AuthContext;
