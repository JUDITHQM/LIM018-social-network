// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

import { getFirestore, addDoc, collection, getDocs,doc , getDoc } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js"

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
// Variable para obtener la autenciación de usuario
const auth = getAuth(app);
// Variable para obtener autenticación con Google
const provider = new GoogleAuthProvider();
// Variable que nos conecta con la database de Firebase
const db = getFirestore(app);

// Función para crear posts
export const createPost = async(user, description) =>  {
  const createPostColecction = await addDoc(collection(db, 'posts'), {
   description,
   user,
})
return createPostColecction;
};

export const getPost =  async (id) =>{
 const docRef = doc(db, "posts",id);
const docSnap = await getDoc(docRef);
return docSnap;
}
export const onGetPost = async (callback) => {
  const currentPost = await onSnapshot(query(collection(db, "posts"),
      (callback))
)};

export const getPosts = await getDocs(collection(db, "posts"));


export { createUserWithEmailAndPassword, auth, signInWithEmailAndPassword, provider, signInWithPopup, GoogleAuthProvider, signOut }