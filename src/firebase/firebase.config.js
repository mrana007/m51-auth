// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOQuRTh3DAMZGj3It1NzyqqkP7ZYvp2Ss",
  authDomain: "auth-moha-milon-23c66.firebaseapp.com",
  projectId: "auth-moha-milon-23c66",
  storageBucket: "auth-moha-milon-23c66.appspot.com",
  messagingSenderId: "80134902064",
  appId: "1:80134902064:web:e3dff3a4e4f2d656bbf8f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;