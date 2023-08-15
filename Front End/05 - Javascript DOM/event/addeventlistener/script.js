const btn = document.querySelector('button');

const h1 = document.querySelector('h1');

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', () => {
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    console.log(newColor);
})