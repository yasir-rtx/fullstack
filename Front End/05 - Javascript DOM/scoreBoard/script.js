const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const resetButton = document.querySelector('#reset');
const pointOption = document.querySelector('#winPoint');

let p1Score = 0;
let p2Score = 0;
let winPoint = 3;
let isGameOver = false;

// this merujuk kepada variabel yang diberi fungsi
pointOption.addEventListener('change', function () {
    winPoint = parseInt(this.value);
    reset();
});

// Jika ingin menggunakan arrow function, maka tidak bisa menggunakan this
// pointOption.addEventListener('change', (e) => {
//     winPoint = parseInt(pointOption.value);
//     console.log(winPoint);
//     reset();
// });

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winPoint) {
            isGameOver = true;
            console.log('P1 WIN');
        }
    }
    p1Display.textContent = p1Score;
});

p2Button.addEventListener('click', (e) => {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winPoint) {
            isGameOver = true;
            console.log('P2 WIN');
        }
    }
    p2Display.textContent = p2Score;
});

function reset () {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    isGameOver = false;
    console.log('Score reset');
}

resetButton.addEventListener('click', reset);