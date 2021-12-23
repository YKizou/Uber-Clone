// Import the functions you need from the SDKs you need
import {GoogleAuthProvider, getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgidF3TgEbRk2zxNpcp5mgZNXCFa8tD_A",
  authDomain: "uber-clone-931b2.firebaseapp.com",
  projectId: "uber-clone-931b2",
  storageBucket: "uber-clone-931b2.appspot.com",
  messagingSenderId: "66108433315",
  appId: "1:66108433315:web:5083f5227dc55bb3f1f016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth } 