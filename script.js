const price = document.querySelector('.usdt-price');
const amount = document.querySelector('.amount');
const result = document.querySelector('.php');
const button = document.querySelector('button');

button.addEventListener('click', () => result.value = times(price.value, amount.value))

function times(price, amount){
  return price * amount;
}