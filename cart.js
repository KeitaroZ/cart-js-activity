const addButton = document.querySelector('.add-to-cart');
const cart = document.querySelector('.cart');

let cartTotal = 0;

addButton.addEventListener('click', function() {
  const productTitle = this.parentElement.querySelector('h2').innerText;
  const productPrice = parseFloat(this.parentElement.querySelector('p').innerText.replace('$', ''));
  
  const cartItem = document.createElement('li');
  cartItem.innerText = `${productTitle} - $${productPrice}`;
  
  cart.querySelector('ul').appendChild(cartItem);

  cartTotal += productPrice;
  cart.querySelector('p').innerText = `Total: $${cartTotal.toFixed(2)}`;
});