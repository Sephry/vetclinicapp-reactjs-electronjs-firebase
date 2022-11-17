// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt7KrwnAw73GIGZjDYDWFv66poER9lino",
  authDomain: "vetclinicapp-72762.firebaseapp.com",
  projectId: "vetclinicapp-72762",
  storageBucket: "vetclinicapp-72762.appspot.com",
  messagingSenderId: "129481173577",
  appId: "1:129481173577:web:daf0631eeb0e5aff8cad98",
  measurementId: "G-E0S0GYCK9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
