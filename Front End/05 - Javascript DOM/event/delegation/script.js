//  Event delegation =>

const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // mencegah behaviour dari suatu elemen

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

list.addEventListener('click', (e) => {
    // e.target.remove(); // mengincar elemen (chlidren) yang ditarget melalui objek event
    e.target.nodeName == 'LI' && e.target.remove();
    console.log('elemen li dihapus');
});