// Este es el punto de entrada de tu aplicacion

// eslint-disable-next-line import/no-cycle
import { Home } from './components/Home.js';
// eslint-disable-next-line import/no-cycle
import { Register } from './components/Register.js';
// eslint-disable-next-line import/no-cycle
import { Login } from './components/Login.js';
// eslint-disable-next-line import/no-cycle
import { Timeline } from './components/Timeline.js';

const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
  '/timeline': Timeline,
};
// const rootDiv = document.getElementById('root');

export const onNavigate = (pathname) => {
  const rootDiv = document.getElementById('root');
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  const rootDiv = document.getElementById('root');
  // rootDiv.appendChild(component());
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('load', () => {
  const rootDiv = document.getElementById('root');
  rootDiv.appendChild(routes[window.location.pathname]());
});
