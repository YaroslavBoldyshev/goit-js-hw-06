function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const button = body.querySelector('.change-color');
const text = body.querySelector('.color')
button.addEventListener('click', changeColor);
function changeColor() {
  const hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
  text.textContent = hexColor;
}
