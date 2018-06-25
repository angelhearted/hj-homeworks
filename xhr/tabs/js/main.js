const menu = document.querySelector('nav');
const content = document.querySelector('#content');
const preloader = document.querySelector('#preloader');

menu.addEventListener('click', event => {
  const a = event.target;
  if (a.tagName !== 'A' || a.classList.contains('active')) return;
  
  event.preventDefault();
  menu.querySelector('a.active').classList.remove('active');
  a.classList.add('active');

  const xhr = new XMLHttpRequest();
  xhr.open('GET', a.href);

  xhr.addEventListener('loadstart', event => {
    preloader.classList.remove('hidden');
  });
  xhr.addEventListener('load', event => {
    preloader.classList.add('hidden');
    content.innerHTML = xhr.responseText;
  });
  xhr.send();
});