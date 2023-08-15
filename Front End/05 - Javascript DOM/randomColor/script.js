const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');
// for (let button of buttons) {
//     button.addEventListener('click', () => {
//         button.style.backgroundColor = generateRandomColor();
//         button.style.color = generateRandomColor();
//     });
// }
for (let button of buttons) {
    button.addEventListener('click', colorize);
}

const headings = document.querySelectorAll('h1');
// for (let heading of headings) {
//     heading.addEventListener('click', () => {
//         heading.style.backgroundColor = generateRandomColor();
//         heading.style.color = generateRandomColor();
//     });
// }
for (let heading of headings) {
    heading.addEventListener('click', colorize);
}

//  Karena buttons dan headings akan menjalankan fungsi yang sama dan memiliki output serupa, lebih baik fungsi nya digabung
// Agar objek yang diseleksi fleksibel dapat menggunakan keyword 'this' untuk merepresentasikan objek yang diplih
function colorize() {
    this.style.backgroundColor = generateRandomColor();
    this.style.color = generateRandomColor();
}