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
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    myLibrary.push({
        name: name,
        author: author,
        pages: pages
    })
    document.getElementById("add-book").style.display = "none";
    document.getElementById("name").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";

    console.log(myLibrary);
})






