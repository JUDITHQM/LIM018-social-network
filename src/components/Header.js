export default function (div, callback) {
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logoDiv';

  const titleLogo = document.createElement('h1');
  titleLogo.textContent = 'SMILE';
  titleLogo.className = 'headerTitle';

  const logOut = document.createElement('div');
  logOut.className = 'logOut';
  logOut.id = 'logOut';

  logOut.addEventListener('click', callback);

  div.appendChild(logoDiv);
  div.appendChild(titleLogo);
  div.appendChild(logOut);
}
