function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages, " + read;
  };
  /*this.sayTitle = function () {
    console.log(this.title);
  };*/
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read");
//theHobbit.sayTitle();
theHobbit.info();
