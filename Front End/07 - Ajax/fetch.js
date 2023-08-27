// Mendukung promises

// Metode Promises
// fetch('https://swapi.dev/api/people/1')
//     .then((res) => { // parameter res menyimpan data hasil fetch
//         if (!res.ok) {
//             throw Error('Could not fetch the data for that resource');
//         } else {
//             console.log('Fetching is success');
//         }
//         // console.log(res);
//         return res.json();
//     })
//     .then((data) => { // parameter data menyimpan data hasil .then sebelumnya
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("Error : ", err);
//     })

// Metode Async
const loadPeople = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/people/1');
        if (!res.ok) {
            throw Error('fetching data failed')
        } else {
            console.log('Fetching is success');
            const data = await res.json();
            console.log(data);
        }
    } catch (e) {
        // Proses lainnya (redirect/popout)
        console.log("Pesan", e);
    }
};

loadPeople();