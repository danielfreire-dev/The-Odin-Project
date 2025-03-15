/*function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return title + " by " + author + ", " + pages + " pages, " + read;
  };

  this.sayTitle = function () {
    console.log(this.title);
  };
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read");
theHobbit.sayTitle();
theHobbit.info();
*/
let myLibrary = [];

function Book() {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages, " + read;
  };
  let book = [this.title, this.author, this.pages, this.read];
  myLibrary = myLibrary.push(book);
  return myLibrary;
}
let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read");
//theHobbit.sayTitle();
theHobbit.info();

function addBookToLibrary() {
  let newBook = [this.title, this.author, this.pages, this.read];
  myLibrary = myLibrary.push(newBook);
  console.log(myLibrary);
}
