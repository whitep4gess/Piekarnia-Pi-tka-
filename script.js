Exit code: 0
Wall time: 0.9 seconds
Output:
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

function setMenu(open) {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  const label = menuButton.querySelector('.sr-only');
  if (label) label.textContent = open ? 'Zamknij menu' : 'Otwórz menu';
}

menuButton?.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();

