// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import {
  getFirestore, collection, addDoc, getDocs, query, orderBy, onSnapshot, doc, deleteDoc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyByuhD5KIFGJ_YlUpcFOgHoGdfW8z7y0Gw',
  authDomain: 'smile-d231b.firebaseapp.com',
  projectId: 'smile-d231b',
  storageBucket: 'smile-d231b.appspot.com',
  messagingSenderId: '143637064090',
  appId: '1:143637064090:web:6f71f431d3663e7065b223',
  measurementId: 'G-ED0W2B6ZE2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Variable para obtener la autenciación de usuario
export const auth = getAuth();
// Variable para obtener autenticación con Google
const provider = new GoogleAuthProvider();

// Variable que nos conecta con la database de Firebase
const db = getFirestore(app);

/* ----- FireStore ----- */
export function stateChangedUser(callback) { return onAuthStateChanged(auth, callback); }

// Función para crear posts
export function addPost(publicacion) { return addDoc(collection(db, 'post'), publicacion); }


export const postRef = collection(db, 'post');

const queryPost = query(postRef, orderBy('dateDescription', 'desc'));

export function getPost() { return getDocs(queryPost); }

export const onGetPost = (callback) => onSnapshot(collection(db, 'post'), callback);

// Eliminar post
export function deletePost(idPost) { return deleteDoc(doc(db, 'post', idPost)); }

export function editPost(idpost, editText) {
  return updateDoc(doc(db, 'post', idpost), {
    description: editText,
  });
}
// eslint-disable-next-line max-len
export { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, provider, signInWithPopup, GoogleAuthProvider, signOut };