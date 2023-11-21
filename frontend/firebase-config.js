// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw8fjvct7X8ZhfcH1JtrYe1WsJ-dnArDk",
  authDomain: "hexashop-6f362.firebaseapp.com",
  projectId: "hexashop-6f362",
  storageBucket: "hexashop-6f362.appspot.com",
  messagingSenderId: "970281532207",
  appId: "1:970281532207:web:a0a3037e8a171072dc3fda",
  measurementId: "G-MNSPY61YBP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth();
export const db = getFirestore(app);


export const googleProvider = new GoogleAuthProvider();
