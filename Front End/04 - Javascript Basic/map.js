// map => mengembalikan array baru yang telah dimodifikasi melalui callback function dari suatu array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const books = [
    {
        title : "Lord of The Rings",
        author : "J.R.R. Tolkien",
    },
    {
        title : "Hyouka",
        author : "Yonezawa Honobu",
    },
    {
        title : "Origin",
        author : "Dan Brown",
    },
    {
        title : "Harry Potter",
        author : "J.K. Rowling",
    }
];

const numbersDouble = numbers.map(function(number) {
    if (number % 2 != 0) {
        return number * number;
    } else {
        return 'even';
    }
});

const titles = books.map(function(book) {
    return book.title;
})

const authors = books.map(function(book) {
    return book.author;
})