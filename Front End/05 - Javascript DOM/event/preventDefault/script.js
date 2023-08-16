const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // mencegah behaviour dari suatu elemen

    const noteValue = input.value; // properti value berfungsi mengambil value dari form
    const newList = document.createElement('li');
    newList.innerText = noteValue;
    // console.log(newList);
    list.appendChild(newList);
    input.value = '';
});