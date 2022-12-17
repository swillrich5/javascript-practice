// Event Bubbling & Event Delegation

const ul = document.querySelector('ul');
const button = document.querySelector('button');

// add event listener
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'New Task to Complete';
    // ul.append(li);
    ul.prepend(li);
})

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         // console.log(e.target);
//         // e.target.style.textDecoration = 'line-through';
//         console.log('event in <li>');
//         e.stopPropagation();
//         e.target.remove();
//     });
// });

ul.addEventListener('click', e => {
    // console.log('event in <ul>');
    console.log(e.target);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})