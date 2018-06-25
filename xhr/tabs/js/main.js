const menu = document.querySelector('nav');
const content = document.querySelector('#content');
const preloader = document.querySelector('#preloader');

menu.addEventListener('click', clickMenuLink);

function clickMenuLink(event) {
  console.log(event);
  const a = event.target;
  if (a.tagName !== 'A' || a.classList.contains('active')) return;
  console.log(1);

  event.preventDefault();
  menu.querySelector('a.active').classList.remove('active');
  a.classList.add('active');

  const xhr = new XMLHttpRequest();
  xhr.open('GET', a.href);

  xhr.addEventListener('loadstart', () => {
    preloader.classList.remove('hidden');
  });
  xhr.addEventListener('load', () => {
    preloader.classList.add('hidden');
    content.innerHTML = xhr.responseText;
  });
  xhr.send();
}

// set email tab as default
const event = {
  target: menu.querySelector('a'),
  preventDefault: () => {}
};
clickMenuLink(event);