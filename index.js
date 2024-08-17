const myLibrary = [{
    name: "peter",
    author: "lo querdo",
    pages: 222,
    read: true
}];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



function removeBook(arr, book) {
    let index = arr.indexOf(book);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

function readTheBook(arr, book) {
    let index = arr.indexOf(book);

}


function showTheBook(arr) {
    const bookContainer = document.querySelector(".book-container");
    bookContainer.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {

        const books = document.createElement("div");
        books.classList.add("books");
        bookContainer.appendChild(books);

        const bookName = document.createElement("div");
        bookName.classList.add("book-name");
        bookName.textContent = `Name: ${arr[i].name}`;
        books.appendChild(bookName);

        const bookAuthor = document.createElement("div");
        bookAuthor.classList.add("book-author");
        bookAuthor.textContent = `Author: ${arr[i].author}`;
        books.appendChild(bookAuthor);

        const bookPages = document.createElement("div");
        bookPages.classList.add("book-pages");
        bookPages.textContent = `Pages: ${arr[i].pages}`;
        books.appendChild(bookPages);

        const bookRead = document.createElement("div");
        bookRead.classList.add("book-read");
        bookRead.textContent = arr[i].read ? "read" : "not read yet";
        books.appendChild(bookRead);


        let removeButton = document.createElement("button");
        removeButton.textContent = "remove the book";

        removeButton.addEventListener("click", () => {
            removeBook(myLibrary, arr[i]);
            showTheBook(myLibrary);
        });


        books.appendChild(removeButton);


        let readButton = document.createElement("button");
        readButton.textContent = "read";

        readButton.addEventListener("click", () => {
            if (bookRead.textContent === "read") {
                bookRead.textContent = "not read yet";
            } else if (bookRead.textContent === "not read yet") {
                bookRead.textContent = "read";
            }
        })

        books.appendChild(readButton);
    }
}


showTheBook(myLibrary);


function addBookToLibrary() {
    let addButton = document.querySelector(".btn-add");
    addButton.addEventListener("click", () => {
        let name = document.getElementById("name").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let read = document.getElementById("read").checked;


        if (!name || !author || !pages) {
            alert("Please fill out all required fields.")
            return;
        }

        const newBook = new Book(name, author, pages, read);

        myLibrary.push(newBook);
        document.getElementById("add-book").style.display = "none";
        document.getElementById("name").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
        document.getElementById("read").checked = false;
        showTheBook(myLibrary);

    })

}
addBookToLibrary();

function showCard() {
    document.getElementById("add-book").style.display = "block";
}


