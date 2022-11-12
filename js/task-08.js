const form = document.querySelector('.login-form');


form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (password.value === "" || email.value === "") {
      alert('Please fill in all fields!')
    }
    const colectedData = { email: email.value, password: password.value };

    console.log(colectedData);
  
    event.currentTarget.reset();
}