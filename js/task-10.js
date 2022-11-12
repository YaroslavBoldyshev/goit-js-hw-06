function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('[type="number"]');
const container = document.querySelector('#boxes');
const controls = document.querySelector('#controls');
let counter = 0;
function createBoxes(amount) {
  const markupArr = [];
  for (let i = counter; i < amount; i++){
    const width = 30 + i * 10;
    markupArr.push(`
    <div style="width: ${width}px; height: ${width}px; background-color: ${getRandomHexColor()}"></div>
    `)
    counter += 1;
  }
  const stringMarkup = markupArr.join('');
  container.insertAdjacentHTML('beforeend', stringMarkup);
}

function destroyBoxes() {
  container.innerHTML = '';
  counter = 0;
}
 
controls.addEventListener('click', (e) => {
  if (e.target.dataset.hasOwnProperty('create')) {
    const amount = input.value;
    createBoxes(amount);
  } else if (e.target.dataset.hasOwnProperty('destroy')) {
    destroyBoxes();
  }
})

