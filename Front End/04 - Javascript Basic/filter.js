// filter => mengembalikan nilai array sesuai kriteria yang ditetapkan

const numbers = [1,2,3,4,5,6,7,8,9];

const books = [
    {
        title : "Lord of The Rings",
        author : "J.R.R. Tolkien",
        rating : 10,
    },
    {
        title : "Hyouka",
        author : "Yonezawa Honobu",
        rating : 9,
    },
    {
        title : "Origin",
        author : "Dan Brown",
        rating : 9,
    },
    {
        title : "Harry Potter",
        author : "J.K. Rowling",
        rating : 10,
    }
];

const odd = numbers.filter(number => {
    return number % 2 !== 0;
});

const best = books.filter(book => book.rating === 10);