"use strict";

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genres: ["southern","gothic","coming of age"],
        yearsInPublication: 59
    },
    {
        title: "No Longer Human",
        author: "Osamu Dazai",
        genres: ["autobiography","short novel"],
        yearsInPublication: 71
    },
    {
        title: "1984",
        author: "George Orwell",
        genres: ["dystopian","sci-fi","political fiction"],
        yearsInPublication: 70
    },
    {
        title: "Noruwei no Mori",
        author: "Haruki Murakami",
        genres: ["coming of age", "novel"],
        yearsInPublication: 32
    }
];


const myNumbers = [4,5,6,7,8];
const myNewNumbers = myNumbers.map(function (x) {
    return x**2;
});


const greaterThanSix = myNumbers.filter(function (x) {
    return x>6;
});

console.log(myNewNumbers);
console.log(greaterThanSix);

/*
    MAP
    using .map, create an array that returns all author names.
 */

const bookTitles = books.map(function (bookTitle) {
    return bookTitle.title;
});
console.log(bookTitles);

const bookAuthors = books.map(bookAuthor=> {
    return bookAuthor.author;
});
console.log(bookAuthors);

const bookGenres = books.map (bookgenre=>{
    return bookgenre.genres;
});
console.log(bookGenres);
/*
    FILTER
    using .filter, create an array that returns all books with at least 3 genres
 */
const greaterThanThree = books.filter(num=>{
    return num.genres.length>=3
});
console.log(greaterThanThree);

/*
    REDUCE
    using .reduce, return the total years between all books.
 */
