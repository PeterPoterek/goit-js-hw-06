let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

const decrement = () => {
  counterValue--;
  value.innerHTML = counterValue;
};
const increment = () => {
  counterValue++;
  value.innerHTML = counterValue;
};
decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);

value.innerHTML = counterValue;
