const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

console.dir(input);
const handleInput = () => {
    output.textContent = input.value;
    if (input.value === '') {
        output.textContent = 'Anonymous';
    }
}
input.addEventListener("input", handleInput);
