// aqui exportaras las funciones que necesites
import { signOutLogin } from '../firebase/firebaseAuth.js';
import { onNavigate } from '../main.js';

export function signOutUser() {
  return signOutLogin().then(() => {
    onNavigate('/');
  });
};
