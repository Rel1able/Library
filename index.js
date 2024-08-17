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







