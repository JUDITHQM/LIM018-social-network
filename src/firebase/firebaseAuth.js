import{
    auth,createUserWithEmailAndPassword,signInWithEmailAndPassword
} from "../firebase/firebaseconfig.js"
import { onNavigate } from "../main.js";

// Funcion de registro para crear cuenta
 export const crearCuenta = (email,password) =>{
    createUserWithEmailAndPassword(auth, email ,password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
           onNavigate ('/login'); 
        }      
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
 }
// Funcion de registro para iniciar sesion
export const iniciarSesion =(email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    if (user) {
        onNavigate('/timeline'); }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}
