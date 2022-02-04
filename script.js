let book = document.querySelector("#book");
let author = document.querySelector("#author");
let submitBtn = document.querySelector("#submit");
let library = document.querySelector(".library");
let deleteBook = document.querySelector(".delete");
let bookAdded = document.querySelector(".remove-added");

let storedBooks = [];

function Book(name, author){
    this.name = name;
    this.author = author;
}

function addBookToLibrary(){
    library.innerHTML = "";
    storedBooks.forEach(book => {
        return(
            library.innerHTML += `<tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
        </tr>`
        )
    });
}

function handleSubmit(e){
    e.preventDefault();

    if(book.value == "" || author.value == ""){
        bookAdded.style.display = "block";
        bookAdded.textContent = "Ahhh... Incomplete details, Book can't be added!"
        bookAdded.style.backgroundColor = "red";
        setTimeout(() => {
            bookAdded.style.display = "none";
        }, 2000)
        return;
    }

    let newBook = new Book(`${book.value}`, `${author.value}`)
    storedBooks.push(newBook);

    addBookToLibrary();
    bookAdded.style.display = "block";
    bookAdded.textContent = "Book Added! Scroll down to see"
    bookAdded.style.backgroundColor = "green";
    setTimeout(() => {
        bookAdded.style.display = "none";
    }, 1500)

    book.value = "";
    author.value = "";
}

submitBtn.addEventListener("click", handleSubmit);

