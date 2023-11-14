// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkBzu4z4XYGErMD0hkqghBO-Zj_EzQe-A",
  authDomain: "hexashop-e5ec4.firebaseapp.com",
  projectId: "hexashop-e5ec4",
  storageBucket: "hexashop-e5ec4.appspot.com",
  messagingSenderId: "537149340785",
  appId: "1:537149340785:web:1011fb672b89bd76022fd0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth();

export const googleProvider = new GoogleAuthProvider();
