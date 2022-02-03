let book = document.querySelector("#book");
let author = document.querySelector("#author");
let submitBtn = document.querySelector("#submit");
let library = document.querySelector(".library");

let storedBooks = [];

function Book(name, author){
    this.name = name;
    this.author = author;
}

function addBookToLibrary(){
    storedBooks.forEach(book => {
        return(
            library.innerHTML += `<tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td><button>Delete</button></td>
        </tr>`
        )
    });
}

function handleSubmit(e){
    e.preventDefault();

    let newBook = new Book(`${book.value}`, `${book.name}`)
    storedBooks.push(newBook);

    addBookToLibrary();
    
    book.value = "";
    author.value = "";
}



submitBtn.addEventListener("click", handleSubmit);