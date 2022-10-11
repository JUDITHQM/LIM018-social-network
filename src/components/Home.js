// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.classList = 'homeDiv';
  /* ---------- */
  const logoTitleDiv = document.createElement('div');
  logoTitleDiv.className = 'logoTitleDiv';
  const imgLogoDiv = document.createElement('div');
  imgLogoDiv.className = 'imgLogoDiv';

  const imgLogo = document.createElement('img');
  imgLogo.src = '../img/logo.png';
  imgLogo.id = 'imgLogo';
  const formHome = document.createElement('form');
  formHome.className = 'formHome';

  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia Sesion';

  const formDiv = document.createElement('div');
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  imgLogoDiv.appendChild(imgLogo);
  logoTitleDiv.appendChild(imgLogoDiv);
  HomeDiv.appendChild(logoTitleDiv);
  formHome.appendChild(buttonRegister);
  formHome.appendChild(buttonLogin);
  HomeDiv.appendChild(formHome);
  HomeDiv.appendChild(formDiv);
  return HomeDiv;
};
