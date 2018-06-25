const content = document.querySelector('#content');

init();

// Регулируем видимость карточки
function toggleCardVisible() {
  document.getElementById('content').classList.toggle('hidden');
  document.getElementById('card').classList.toggle('hidden');
}

function addBook(book) {
  const li = document.createElement('li');

  li.dataset.title = book.title;
  li.dataset.author = book.author.name;
  li.dataset.info = book.info;
  li.dataset.price = book.price;

  const img = document.createElement('img');
  img.src = book.cover.small;
  li.appendChild(img);
  content.appendChild(li);
}

function init() {
  // clear books
  content.innerHTML = '';

  document.getElementById('close').addEventListener('click', toggleCardVisible);

  document.getElementById('content').addEventListener('click', event => {
    let target = null;
    if (event.target.tagName === 'LI') {
      target = event.target;
    } else if (event.target.parentNode.tagName === 'LI') {
      target = event.target.parentNode;
    } else {
      return;
    }

    toggleCardVisible();
    document.getElementById('card-title').innerHTML = target.dataset.title;
    document.getElementById('card-author').innerHTML = target.dataset.author;
    document.getElementById('card-info').innerHTML = target.dataset.info;
    document.getElementById('card-price').innerHTML = target.dataset.price;
  });

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://neto-api.herokuapp.com/book/');
  xhr.addEventListener('load', event => {
    const books = Array.from(JSON.parse(xhr.responseText));
    books.forEach(addBook);
  });
  xhr.send();
}