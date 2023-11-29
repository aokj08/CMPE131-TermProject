// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBHtEEnNHld4sFznmwQryW3Z4jIJ2skQxg",
  authDomain: "cmpe-131-auth.firebaseapp.com",
  databaseURL: "https://cmpe-131-auth-default-rtdb.firebaseio.com",
  projectId: "cmpe-131-auth",
  storageBucket: "cmpe-131-auth.appspot.com",
  messagingSenderId: "986580025727",
  appId: "1:986580025727:web:5c1648458578bd2d8eda4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
