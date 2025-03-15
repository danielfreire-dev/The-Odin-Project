/*let myLibrary = [];

function Book(title, author, pages, read) {
  let title = document.querySelector("#bookTitle");
  let author = document.querySelector("#bookauthor");
  let pages = document.querySelector("#bookpages");
  let read = document.querySelector("#bookread");

  this.info = function () {
    return title + " by " + author + ", " + pages + " pages, " + read;
  };
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read");
//theHobbit.sayTitle();
//theHobbit.info();
theHobbit.createArray();

function addBookToLibrary() {
  let newBook = [this.title, this.author, this.pages, this.read];
  myLibrary = myLibrary.push(newBook);
  console.log(myLibrary);
}
*/

//#####################################################################

/*
window.addEventListener("load", () => {
  var form = document.querySelector("newBookForm");
  var input = document.querySelector("newBookSubmit");
  var list_el = document.querySelector("books");

  FormData.addEventListener("submit", (e) => {
    e.preventDefault();

    var book = input.value;

    if (!book) {
      alert("Do tell us about the book");
      return;
    }

    var book_el = document.createElement("div");
    book_el.classList.add("book");

    var book_content_el = document.createElement("div");
    book_content_el.classList.add("content");

    book_el.appendChild(book_content_el);

    var book_input_el = document.createElement("input");
    book_input_el.classList.add("text");
    book_input_el.type = "text";
    book_input_el.input = book;
    book_input_el.setAttribute("readonly", "readonly");

    book_content_el.appendChild(book_input_el);

    var book_actions_el = document.createElement("div");
    book_actions_el.classList.add("library");

    var book_edit_el = document.createElement("div");
    book_edit_el.classList.add("edit");
    book_edit_el.innerHTML = "Edit";

    var book_delete_el = document.createElement("button");
    book_delete_el.classList.add("delete");
    book.innerHTML = "Delete";

    book_actions_el.appendChild(book_edit_el);
    book_actions_el.appendChild(book_delete_el);

    book_el.appendChild(book_actions_el);

    library.appendChild(book_el);

    book_edit_el.addEventListener("click", () => {
      if (book_edit_el.innerText.toLowerCase() = "edit") {
        book_input_el.removeAttribute("readonly")
        book_input_el.focus()
        book_edit_el.innerText = "Save"
      } else {
        book_input_el.removeAttribute("readonly")
        book_edit_el.innerText = "Edit"
      }
    });
    book_delete_el.addEventListener("click", () => {
      library_el.removeChild(book_el)
    })
  });
})
*/
