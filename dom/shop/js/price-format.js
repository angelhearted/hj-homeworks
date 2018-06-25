function getPriceFormatted(value) {
  return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

const cart = new Cart();

function Cart() {
  const container = document.querySelector('#container');
  const countEl = container.querySelector('#cart-count');
  const sumEl = container.querySelector('#cart-total-price');
  let count = 0;
  let sum = 0;

  container.addEventListener('click', event => 
    event.target.tagName === 'BUTTON' && this.addItem(event.target.parentElement)
  );

  this.addItem = prodParent => {
    const product = parseProduct(prodParent);

    sum += product.price;
    sumEl.textContent = getPriceFormatted(sum);

    count++;
    countEl.textContent = count;
  }

  function parseProduct(prodParent) {
    const name = prodParent.querySelector('h3').textContent;
    // don't need it here, but created anyway
    const price = +prodParent.querySelector('button').dataset.price;
    return { name: name, price: price };
  }
}