import { crearCuenta } from "../firebase/firebaseAuth.js";
import { onNavigate } from "../main.js";

export const Register = () => {
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

    const TitleRegister =document.createElement('h3')
    TitleRegister.textContent = 'FORMULARIO DE REGISTRO';
    TitleRegister.className='TitleRegister'


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
    
    const formDiv = document.createElement('div');

    const buttonRegister = document.createElement('button')
    buttonRegister.textContent = 'REGISTRARSE';
    buttonRegister.value = 'Registrarse';
    buttonRegister.setAttribute("type", "submit");

    const buttonHome = document.createElement('button');
    buttonHome.textContent = 'REGRESAR';

    buttonHome.addEventListener('click', () => onNavigate('/'));


HomeDiv.appendChild(TitleRegister);   imgLogoDiv.appendChild(imgLogo);
    logoTitleDiv.appendChild(imgLogoDiv);
    
    HomeDiv.appendChild(logoTitleDiv);

    formRegister.appendChild(inputName);
    formRegister.appendChild(inputEmail);
    formRegister.appendChild(inputPassword);
    formRegister.appendChild(buttonRegister);
    formRegister.appendChild(buttonHome);
    
    formDiv.appendChild(pRegister);
    formDiv.appendChild(formRegister);
    
    
    HomeDiv.appendChild(pRegister);
    HomeDiv.appendChild(formRegister);
    HomeDiv.appendChild(formDiv);

    formRegister.addEventListener("submit", (e) => {
        e.preventDefault();
        crearCuenta(inputEmail.value, inputPassword.value)

    })

    return HomeDiv;

}