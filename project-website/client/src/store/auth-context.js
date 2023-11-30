import React from "react";

const AuthContext = React.createContext({
  currentUser: {},
  isLogIn: false,
  signUp: () => {},
  logIn: () => {},
  logOut: () => {},
  resetPassword: () => {},
  sendEmailVerification: () => {},
});

export default AuthContext;
