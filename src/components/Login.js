//import { signInWithEmail } from "../firebase/firebaseconfig.js";
import { iniciarSesion } from "../firebase/firebaseAuth.js";
import { onNavigate } from "../main.js";


export const Login = () => {
    const HomeDiv = document.createElement('div');
    HomeDiv.className = 'homeDiv';
    HomeDiv.textContent = 'Bienvenido al Login';

    /* ---------- */

    const logoTitleDiv = document.createElement('div');
    logoTitleDiv.className = 'logoTitleDiv';

    const imgLogoDiv = document.createElement('div');
    imgLogoDiv.className = 'imgLogoDiv';

    const imgLogo = document.createElement('img');
    imgLogo.src = '../img/logo.png';
    imgLogo.id = 'imgLogo';


    /* ---------- */
    const formLogin = document.createElement('form');
    formLogin.className = 'formLogin';


    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.placeholder = 'Ingresa tu correo';

    const inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.placeholder = 'Ingresa tu contraseña';

    const buttonLogin = document.createElement('button');
    buttonLogin.type = 'button';
    buttonLogin.textContent = 'Inicia sesion';
    buttonLogin.id = 'buttonLogin';
    

    imgLogoDiv.appendChild(imgLogo);
    logoTitleDiv.appendChild(imgLogoDiv);
    HomeDiv.appendChild(logoTitleDiv);

    
    formLogin.appendChild(inputEmail);
    formLogin.appendChild(inputPassword);
    formLogin.appendChild(buttonLogin);
    
    HomeDiv.appendChild(formLogin);
    
    buttonLogin.addEventListener("click", (e) => {
      e.preventDefault();
        const email = inputEmail.value;
        const password = inputPassword.value;
    
        iniciarSesion(email, password)
          
      });

    return HomeDiv;

}