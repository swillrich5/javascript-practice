const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector(".quiz-form");
const displayScore = document.querySelector('.score');
const result = document.querySelector('.result');
console.log(displayScore);

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        } 
    });
    // output the score
    result.classList.remove("d-none");
    displayScore.textContent = score + '%';
    console.log(score);
});