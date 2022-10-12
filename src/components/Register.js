import { updateProfileUser, createUserWithEmail } from '../firebase/firebaseAuth.js';
import { onNavigate } from './main.js';

export const Register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDiv';
  /* ---------- */
  const logoTitleDiv = document.createElement('div');
  logoTitleDiv.className = 'logoTitleDiv';

  const imgLogoDiv = document.createElement('div');
  imgLogoDiv.className = 'imgLogoDiv';

  const imgLogo = document.createElement('img');
  imgLogo.src = '../img/logo.png';
  imgLogo.id = 'imgLogo';

  const titleLogo = document.createElement('h2');
  titleLogo.className = 'titleLogo';

  /* ---------- */
  const pRegister = document.createElement('h3');
  pRegister.textContent = 'INGRESA TUS DATOS Y CREA TU CUENTA';

  const formRegister = document.createElement('form');
  formRegister.className = 'formRegister';

  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.placeholder = 'Ingresa tu nombre';

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Ingresa tu correo';

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Ingresa tu contraseña';

  const buttonRegister = document.createElement('input');
  buttonRegister.type = 'button';
  buttonRegister.value = 'Registrarse';
  buttonRegister.id = 'buttonRegister';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'REGRESAR';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  imgLogoDiv.appendChild(imgLogo);
  logoTitleDiv.appendChild(pRegister);
  logoTitleDiv.appendChild(imgLogoDiv);
  logoTitleDiv.appendChild(titleLogo);
  homeDiv.appendChild(logoTitleDiv);

  formRegister.appendChild(inputName);
  formRegister.appendChild(inputEmail);
  formRegister.appendChild(inputPassword);
  formRegister.appendChild(buttonRegister);
  formRegister.appendChild(buttonHome);

  homeDiv.appendChild(formRegister);

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    createUserWithEmail(inputEmail.value, inputPassword.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const uid = user.uid;
        updateProfileUser(inputName.value, uid)
          .then(() => console.log('Nombre actualizado'));
        console.log(user);
        console.log('Registro exitoso');
      });
    onNavigate('/login');
  });
  return homeDiv;
};
