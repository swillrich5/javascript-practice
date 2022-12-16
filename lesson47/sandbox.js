// get am element by ID
const title = document.getElementById('page-title');
console.log(title);
// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);
console.log(errors[1]);


// get elements by their tag name
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
});

const content = document.querySelector('.content');

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});