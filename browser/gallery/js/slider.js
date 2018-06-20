const slider = new Slider(
  document.querySelector('#currentPhoto'),
  document.querySelector('#prevPhoto'),
  document.querySelector('#nextPhoto')
);

function Slider(imgEl, prevBtn, nextBtn) {
  const imgs = [
    'i/breuer-building.jpg',
    'i/guggenheim-museum.jpg',
    'i/headquarters.jpg',
    'i/IAC.jpg',
    'i/new-museum.jpg'
  ];

  // current image index
  let index;
  init();

  function init() {
    index = 0;
    setCurrentSlide(index);
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
  };

  function setCurrentSlide() {
    index = index >= imgs.length
      ? index % imgs.length
      : index < 0
      ? imgs.length - 1
      : index;
    imgEl.src = imgs[index];
  }

  function nextSlide() {
    index++;
    setCurrentSlide();
  }

  function prevSlide() {
    index--;
    setCurrentSlide();
  }

  this.clear = () => {
    prevBtn.removeEventListener('click', prevSlide);
    nextBtn.removeEventListener('click', nextSlide);
  }
}