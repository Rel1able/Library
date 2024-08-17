const myLibrary = [];

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    let addButton = document.querySelector(".btn-add");
    addButton.addEventListener("click", () => {
        let name = document.getElementById("name").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;

        const newBook = new Book(name, author, pages);

        myLibrary.push(newBook);
        document.getElementById("add-book").style.display = "none";
        document.getElementById("name").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
        showTheBook(myLibrary);

        console.log(myLibrary);
    })


}
addBookToLibrary();

function showCard() {
    document.getElementById("add-book").style.display = "block";
}




function showTheBook(arr) {
    const bookContainer = document.querySelector(".book-container");
    bookContainer.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {


        const bookName = document.createElement("div");
        bookName.classList.add("book-name");
        bookName.textContent = `Name: ${arr[i].name}`;
        bookContainer.appendChild(bookName);

        const bookAuthor = document.createElement("div");
        bookAuthor.classList.add("book-author");
        bookAuthor.textContent = `Author: ${arr[i].author}`;
        bookContainer.appendChild(bookAuthor);

        const bookPages = document.createElement("div");
        bookPages.classList.add("book-pages");
        bookPages.textContent = `Pages: ${arr[i].pages}`;
        bookContainer.appendChild(bookPages);
    }
}






