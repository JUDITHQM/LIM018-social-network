import {
  auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, provider, signOut, updateProfile,
} from './firebaseconfig.js';
// Función para crear usuarios en Firebase con correo y contraseña
// eslint-disable-next-line max-len
export const createUserWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// Funcion de registro para iniciar sesion

// eslint-disable-next-line max-len
export const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Funcion de registro para iniciar sesion con Google

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export function signOutLogin() { return signOut(auth); }

/* ----- Update Profile */
export function updateProfileUser(userName, userId) {
  return updateProfile(auth.currentUser, {
    displayName: userName,
    uid: userId,
  });
}
