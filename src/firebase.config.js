// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc_DAlpAlsRfQ-6iXMKry8d7_F_BN2KdY",
  authDomain: "realtor-clone-react-test.firebaseapp.com",
  projectId: "realtor-clone-react-test",
  storageBucket: "realtor-clone-react-test.appspot.com",
  messagingSenderId: "705381310241",
  appId: "1:705381310241:web:26c6270989059cc05ea860"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()