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

const jokes = document.querySelector('#jokes');
const btn = document.querySelector('button');

const addJoke = async () => {
    const jokeText = await getJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
};

const getJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        };
        const response = await axios.get(`https://icanhazdadjoke.com`, config);
        console.log(response.data.joke);
        return response.data.joke;
        // console.log(response.status);
    } catch (error) {
        return "No Jokes Available!";
    }
};

btn.addEventListener('click', addJoke);