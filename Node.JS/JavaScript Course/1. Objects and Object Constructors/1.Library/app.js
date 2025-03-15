let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    //console.log(myLibrary[i]);
    let book = myLibrary[i];
    let bookCard = document.createElement("div");
    bookCard.setAttribute("class", "book-card");
    bookCard.innerHTML = `
    <div class="card-reader">
    <h3 class="title">${book.title}</h3>
    <h5 class=author">by ${book.author}</h5>
    </div>
    <div class="card-body">
    <p>${book.pages} pages</p>
    <p class = "read-status">${book.read ? "Read" : "Not read yet"}</p>
    <button class="remove-btn" onClick="removeBook(${i})">Remove</button>
    <button class="toggle-read-btn" onClick="toggleRead(${i})">Toggle Read</button>
    </div>
    `;
    libraryEl.appendChild(bookCard);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  //console.log(newBook);
  myLibrary.push(newBook);
  //console.log(myLibrary);
  render();
}

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function () {
  //alert("Hello World");
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    //alert("Hello");
    addBookToLibrary();
  });
