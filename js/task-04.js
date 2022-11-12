const counter = document.querySelector('#value');
let counterValue = Number(counter.textContent);

console.log(counterValue);
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementmentButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener("click", () => {
    counter.textContent = counterValue -= 1;
    console.log(counterValue);
});
incrementmentButton.addEventListener("click", () => {
    counter.textContent = counterValue += 1;
    console.log(counterValue);
});