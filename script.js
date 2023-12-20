const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// destructuring
/*
const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;
// obj destructoring, name your variables using the keys in the object

const { author, title, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// array destructuring
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

//spread operator
const newGenres = ["epic fantasy", ...genres];

newGenres;

// in objects the spread operator to add new properties
const updatedBook = {
  ...book,
  //adding a new property
  moviePublicationDate: "2001-12-19",
  //overiding an existing property
  // pages: 1300,
};
updatedBook;

const getYear = (str) => str.split("-")[0];

// template literals
const summary = `${title} is a ${pages}-page long book, that was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

//ternary operator - used instead of if-else
const pagesRange = pages > 1000 ? "over a 1000" : "less than a 1000";
pagesRange;

console.log(`The book has ${pagesRange} pages`);

// short circuiting and logical operators
console.log(false && "some string");
console.log(hasMovieAdaptation && "This book has a movie");
//falsy value: 0, '', null, undefined
console.log("banele" && "Some string");
console.log(null && "some string");

console.log(true || "some string");
console.log(false || "some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSALATED";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;



console.log(getTotalReviewCount(book));
*/

function getTotalReviewCount(book) {
  const goodReads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodReads + librarything;
}

// functional array methods
const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
x;

//use map to get the titles of the books
const titlesArr = books.map((book) => book.title);
titlesArr;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

// array filter meethod

const biggerBooksWothMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
biggerBooksWothMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

// array reduce method

const allPages = books.reduce((sum, book) => sum + book.pages, 0);
allPages;

// array sort method - mutates the original array
// use slice to make a copy of the array so that the original stays the same
const someArr = [3, 1, 4, 5, 6, 9, 2];
const sortedAsc = someArr.slice().sort((a, b) => a - b); // sort ascendingly but
const sortedDec = someArr.slice().sort((a, b) => b - a); // sort ascendingly
someArr;

const pageNums = books.map((book) => book.pages).sort((a, b) => a - b);
pageNums;

sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

// working with immutable arrays
// 1- add a book object to array
const newBook = {
  id: 6,
  title: "The Adventures of Mzala",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2 - delete a book obj from array
const booksAfterDel = booksAfterAdd.filter((book) => book.id !== 6);
booksAfterDel;

// 3 - update a book obj from the array
const booksAfterUpdate = booksAfterDel.map((book) =>
  book.id === 1 ? { ...book, pages: 1500 } : book
);
booksAfterUpdate;
