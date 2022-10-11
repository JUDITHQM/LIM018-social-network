import { signInWithEmail, signInWithGoogle } from '../firebase/firebaseAuth.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Login = () => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDiv';
  /* ---------- */

  const logoTitleDiv = document.createElement('div');
  logoTitleDiv.className = 'logoTitleDiv';

  const imgLogoDiv = document.createElement('div');
  imgLogoDiv.className = 'imgLogoDiv imgLogo';

  const imgLogo = document.createElement('img');
  imgLogo.src = '../img/logo.png';
  imgLogo.id = 'imgLogo';

  const TitleLogo = document.createElement('h1');
  TitleLogo.textContent = 'BIENVENIDOS ';
  TitleLogo.className = 'TitleLogo';

  /* ---------- */
  const formLogin = document.createElement('form');
  formLogin.className = 'formLogin';

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Ingresa tu correo';

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Ingresa tu contraseña';

  const formDiv = document.createElement('div');

  const buttonLogin = document.createElement('button');
  buttonLogin.type = 'button';
  buttonLogin.textContent = 'INICIAR SESION';
  buttonLogin.id = 'buttonLogin';

  /* ----- Boton para iniciar sesion con Google ----- */
  const buttonLoginGoogle = document.createElement('input');
  buttonLoginGoogle.type = 'button';
  buttonLoginGoogle.value = 'Inicia sesion Google';
  buttonLoginGoogle.id = 'buttonLoginGoogle';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'REGRESAR';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(TitleLogo);
  imgLogoDiv.appendChild(imgLogo);
  logoTitleDiv.appendChild(imgLogoDiv);
  homeDiv.appendChild(logoTitleDiv);

  formLogin.appendChild(inputEmail);
  formLogin.appendChild(inputPassword);
  formLogin.appendChild(buttonLogin);
  formLogin.appendChild(buttonLoginGoogle);
  formLogin.appendChild(buttonHome);

  homeDiv.appendChild(formLogin);
  homeDiv.appendChild(formLogin);
  homeDiv.appendChild(formDiv);

  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPassword.value;
    signInWithEmail(email, password)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        onNavigate('/timeline');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });

  buttonLoginGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then(() => {
        onNavigate('/timeline');
      // ...
      })
      .catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
  return homeDiv;
};
