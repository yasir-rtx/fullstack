const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');

// Event Change => mendeteksi perubagan pada bagian input
// input.addEventListener('change', (e) => {
//     console.log('Terjadi Perubahan');
// });

// Event Input => Mendeteksi setiap perubahan yang terjadi pada form / menghitung setiap karakter yang masuk ke input
// input.addEventListener('input', (e) => {
//     // document.querySelector('h1').innerText = input.value;
//     console.log('New Input');
// });

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value !== '') {
        console.log('Process input');
        const noteValue = input.value;
        const newList = document.createElement('li');
        newList.innerText = noteValue;
        list.appendChild(newList);
        input.value = '';
    } else {
        console.log('Empty Input');
    }
});