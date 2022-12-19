const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// const username = document.querySelector('#username');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
    console.log(form.username.value);

    // validation
    const username = form.username.value;

    if (usernamePattern.test(username)) {
        // feedback good info
        feedback.textContent = 'that username is valid!';
    } else {
        // feedback help info
        feedback.textContent = 'username must contain only letters and be between 6 and 12 characters long';
    }
});

form.username.addEventListener("keyup", e => {

    console.log(e)
    // console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute("class", "success");
        console.log('passed');
    } else {
        form.username.setAttribute("class", "error");
        console.log('failed');
    }
});