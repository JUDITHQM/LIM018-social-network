//import { signInWithEmail } from "../firebase/firebaseconfig.js";
import { iniciarSesion, loginwithGoogle } from "../firebase/firebaseAuth.js";
import { onNavigate } from "../main.js";


export const Login = () => {
    const HomeDiv = document.createElement('div');
    HomeDiv.className = 'homeDiv';
    /* ---------- */

    const logoTitleDiv = document.createElement('div');
    logoTitleDiv.className = 'logoTitleDiv';

    const imgLogoDiv = document.createElement('div');
    imgLogoDiv.className = 'imgLogoDiv';

    const imgLogo = document.createElement('img');
    imgLogo.src = '../img/logo.png';
    imgLogo.id = 'imgLogo';
    const TitleLogin =document.createElement('h3')
    TitleLogin.textContent = 'BIENVENIDOS ';
    TitleLogin.className='TitleLogin'


    /* ---------- */
    const pLogin = document.createElement('h3');
    pLogin.textContent = 'INICIAR SESION ';


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

    HomeDiv.appendChild(TitleLogin);
    imgLogoDiv.appendChild(imgLogo);
    logoTitleDiv.appendChild(imgLogoDiv);
    HomeDiv.appendChild(logoTitleDiv);

    ;
    formLogin.appendChild(inputEmail);
    formLogin.appendChild(inputPassword);
    formLogin.appendChild(buttonLogin);
    formLogin.appendChild(buttonLoginGoogle)
    formLogin.appendChild(buttonHome);
    
    HomeDiv.appendChild(formLogin);
    HomeDiv.appendChild(pLogin);
    HomeDiv.appendChild(formLogin);
    HomeDiv.appendChild(formDiv);

    
    buttonLogin.addEventListener("click", (e) => {
      e.preventDefault();
        const email = inputEmail.value;
        const password = inputPassword.value;
    
        iniciarSesion(email, password)
          
      });
      
      buttonLoginGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        loginwithGoogle();
      });

    return HomeDiv;

}