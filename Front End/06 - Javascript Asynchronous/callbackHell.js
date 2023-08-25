// Multi thread function => Fungsi akan dieksekusi dalam waktu yang bersamaan
// setTimeout(function () {
//     document.body.style.backgroundColor = 'red';
// }, 1000);
// setTimeout(function () {
//     document.body.style.backgroundColor = 'green';
// }, 1000);
// setTimeout(function () {
//     document.body.style.backgroundColor = 'blue';
// }, 1000);

// Single thread function => Fungsi akan dieksekusi setelah fungsi sebelumnya dieksekusi
// setTimeout(function () {
//     document.body.style.backgroundColor = 'red';
// }, 1000);
// setTimeout(function () {
//     document.body.style.backgroundColor = 'green';
// }, 2000);
// setTimeout(function () {
//     document.body.style.backgroundColor = 'blue';
// }, 3000);

// Callback Hell fungsi yang memiliku fungsi didalamnya dan seterusnya dengan tujuan membuat fungsi jalan satu persatu
setTimeout(function () {
    document.body.style.backgroundColor = 'red';
    setTimeout(function () {
        document.body.style.backgroundColor = 'green';
        setTimeout(function () {
            document.body.style.backgroundColor = 'blue';
        }, 1000);
    }, 1000);
}, 1000);