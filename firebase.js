// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCZGFBzFK03riRb37xaba931hlJZsvzs4",
  authDomain: "flashcardsaas-baf75.firebaseapp.com",
  projectId: "flashcardsaas-baf75",
  storageBucket: "flashcardsaas-baf75.appspot.com",
  messagingSenderId: "919283925146",
  appId: "1:919283925146:web:78ce16cbc20f395f5a5f23",
  measurementId: "G-L6CS6W2218"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
