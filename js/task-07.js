const rangeInput = document.querySelector('#font-size-control');
const resultText = document.querySelector('#text');
const handleInput = (event)=>{
    let value = rangeInput.value + 'px';
    resultText.style.fontSize = value;
}
rangeInput.addEventListener('input', handleInput);