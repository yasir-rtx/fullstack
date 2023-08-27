// Library pihak ketiga untuk melakukan request HTTP

// axios.get('https://swapi.dev/api/people/1s')
//     .then((response) => {
//         // console.log(response);
//         const data = response.data;
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log(e.message);
//     });

const getPeople = async (id) => {
    try {
        const request = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(request.data.name);
    } catch (error) {
        // console.log(error);
        console.log(error.message);
        // console.log(error.response.status);
        // console.log(error.response.data);
    }
};

// getPeople(1);

for (let i = 1; i <= 10; i++) {
    getPeople(i);
}