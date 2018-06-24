const fullView = document.querySelector('#view');
const gallery = document.querySelector('#nav');

gallery.addEventListener('click', event => {
  const img = event.target;
  
  // if clicked not the image
  if (img.tagName !== 'IMG') {
   return;
  }

  const a = img.parentNode;
  // do not open link
  event.preventDefault();
  // set current thumb
  gallery.querySelector('a.gallery-current').classList.remove('gallery-current');
  a.classList.add('gallery-current');
  // set full image
  fullView.src = a.href;
});