// open nav pane with hotkeys
const nav = document.querySelector('nav');
document.addEventListener('keydown', event => {
  // 84 - T key
  if (event.altKey && event.ctrlKey && event.code === 'KeyT') {
    event.preventDefault();
    nav.classList.toggle('visible');
  }
});

// easterEgg
const easterEgg = new EasterEgg();
function EasterEgg() {
  // нетология
  const pass = ['KeyY', 'KeyT', 'KeyN', 'KeyJ',
    'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ', ];
  // current index in passphrase
  let i = 0;

  document.addEventListener('keydown', event => {
    i = pass[i] === event.code ? i + 1 : 0;
    if (i >= pass.length) {
      document.querySelector('div.secret').classList.toggle('visible');
      i = 0;
    }
  });
}