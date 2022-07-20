const btnLangMenu = document.getElementById('lang-menu');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('lang-inner-menu');
  const lastLink = document.getElementById('last-link-menu');
  nav.classList.toggle('active');
  lastLink.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnLangMenu.addEventListener('click', toggleMenu);
btnLangMenu.addEventListener('touchstart', toggleMenu);