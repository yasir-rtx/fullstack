// Event bubbling => javascript akan mengeksekusi fungsi yang dimiliki oleh element parent

const btn = document.querySelector('#changeColor');
const container = document.querySelector('#container');

btn.addEventListener('click', (e) => {
    console.log(generateRandomColor());
    container.style.backgroundColor = generateRandomColor();
    e.stopPropagation(); // menghentikan proses/event/fungsi yang dimiliki elemen parent dalam hal ini container
});

container.addEventListener('click', (e) => {
    container.classList.toggle('hide');
});

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}