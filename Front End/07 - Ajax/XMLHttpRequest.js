// Metode ini tidak mendukung promises sehingga memungkinkan terjadinya callback hell

let data; // Agar kita dapat mengakses data dari luar scope
try {
    const request = new XMLHttpRequest();

    request.onload = function () {
        // console.log(this);
        // const data = this.response; // Mendapatkan data plain
        // const data = JSON.parse(this.response); // Data tidak bisa diakses diluat scope onload
        data = JSON.parse(this.response); // Jangan dideklarasikan ulang tipe data jika ingin dapat memanipulasi data dari luar scope
        // console.log(data);
    };

    request.onerror = function () {
        console.log(this);
    };

    request.open('GET', 'https://swapi.dev/api/people/1');
    request.send();
} catch (error) {
    console.log("Pesan Error : ", error);
}