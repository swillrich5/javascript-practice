// example 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort();
console.log(names);
names.reverse();
console.log(names);

// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];

scores.sort();
console.log(scores);

// example 3 - sorting objects
const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
];

// players.sort((a,b) => {
//     if (a.score > b.score) {
//         return -1;   // a will come first in sorted array
//     } else if (b.score > a.score) {
//         return 1;    // b will be swapped with a and come first
//     } else {
//         return 0;  // no changes is needed
//     }
// });

players.sort((a, b) => {
    return b.score - a.score    // same result as commented out code above
});

console.log(players);