// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {

  const template=`<section class="hero-section">
  <div  class="hero-container">
      <img class="hero-image" src="./img/fondo.jpg" alt="">
  </div>
</section>

<section class="form-section">
  <div class="form-container">
      <div class="logoTitleDiv"><div class="imgLogoDiv"><img class="img-logo" src="./img/logo.png" id="imgLogo"></div></div>
      <form class="formHome"><button class="btn-register">Registrate</button><button class="btn-login">Inicia Sesion</button></form>
  </div>
</section>`


  //const HomeDiv = document.createElement('div');

  const HomeDiv=document.createElement('main')

  HomeDiv.classList = 'homeDiv';
  HomeDiv.classList ="main-content";

  HomeDiv.innerHTML=template
  /* -----
  ----- */
  /*

    const logoTitleDiv = document.createElement('div');
  logoTitleDiv.className = 'logoTitleDiv';
  const imgLogoDiv = document.createElement('div');
  imgLogoDiv.className = 'imgLogoDiv';

  const imgLogo = document.createElement('img');
  imgLogo.src = '../img/logo.png';
  imgLogo.id = 'imgLogo';
  const formHome = document.createElement('form');
  formHome.className = 'formHome';
  
  */ 

  const buttonRegister = HomeDiv.querySelector('.btn-register');
  const buttonLogin = HomeDiv.querySelector('.btn-login');

  //buttonRegister.textContent = 'Registrate';
  //buttonLogin.textContent = 'Inicia Sesion';

  //const formDiv = document.createElement('div');
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  //imgLogoDiv.appendChild(imgLogo);
  //logoTitleDiv.appendChild(imgLogoDiv);
  //HomeDiv.appendChild(logoTitleDiv);
  //formHome.appendChild(buttonRegister);
  //formHome.appendChild(buttonLogin);
  //HomeDiv.appendChild(formHome);
  //HomeDiv.appendChild(formDiv);

  return HomeDiv;
};
