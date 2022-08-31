// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByuhD5KIFGJ_YlUpcFOgHoGdfW8z7y0Gw",
  authDomain: "smile-d231b.firebaseapp.com",
  projectId: "smile-d231b",
  storageBucket: "smile-d231b.appspot.com",
  messagingSenderId: "143637064090",
  appId: "1:143637064090:web:6f71f431d3663e7065b223",
  measurementId: "G-ED0W2B6ZE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export{createUserWithEmailAndPassword,auth,signInWithEmailAndPassword,signOut}