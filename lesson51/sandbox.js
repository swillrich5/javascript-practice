// const content = document.querySelector('p');
// console.log(content.classList);

// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const content = document.querySelectorAll('p');

content.forEach(para => {
    if (para.innerText.includes('error')) {
        para.classList.add('error')
    } else if (para.innerText.includes('success')) {
        para.classList.add('success');
    }
})