import { crearCuenta } from "../firebase/firebaseAuth.js";
import { onNavigate } from "../main.js";

export const Register = () => {
    const HomeDiv = document.createElement('div');
    HomeDiv.className = 'homeDiv';
    HomeDiv.textContent = 'Bienvenido al registro';

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
    buttonRegister.value = 'Registrarse';
    buttonRegister.id = 'buttonRegister';
    buttonRegister.setAttribute("type", "submit");

    const buttonHome = document.createElement('button');
    buttonHome.textContent = 'Regresar al Home';

    buttonHome.addEventListener('click', () => onNavigate('/'));


    imgLogoDiv.appendChild(imgLogo);
    logoTitleDiv.appendChild(imgLogoDiv);
    HomeDiv.appendChild(logoTitleDiv);

    formLogin.appendChild(inputName);
    formLogin.appendChild(inputEmail);
    formLogin.appendChild(inputPassword);
    formLogin.appendChild(buttonRegister);
    HomeDiv.appendChild(formLogin);
    HomeDiv.appendChild(buttonHome);

    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        crearCuenta( inputEmail.value , inputPassword.value)
            
    })

    return HomeDiv;

}