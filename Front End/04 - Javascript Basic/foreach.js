//  foreach ==> mengembalikan callback function yang berarti dapan memanggil sebuah fungsi sebanyak jumlah element yang dimiliki array

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

numbers.forEach(function(number) {
    if (number % 2 != 0) {
        // console.log(number);
    }
});

books.forEach(function(book) {
    console.log(`${book.title} written by ${book.author}`);
})