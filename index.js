const myLibrary = [];

function Book() {

}

function addBookToLibrary() {

}

function showForm() {
    document.getElementById("add-book").style.display = "block";
}




let addButton = document.querySelector(".btn-add");

addButton.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    console.log(name);
    let author = document.getElementById("author").value;
    console.log(author);
    let pages = document.getElementById("pages").value;
    console.log(pages);
    myLibrary.push({
        name: name,
        author: author,
        pages: pages
    })
    document.getElementById("add-book").style.display = "none";
    console.log(myLibrary);
})