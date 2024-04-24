

// Book Constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


function UI() {

    UI.prototype.addBookToList = function (book) {

        const lists = document.getElementById("book-list");

        // Create a tr element
        const row = document.createElement("tr");

        row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td class="delete">
           <button class="btn btn-danger">x</button>
         </td>
        `;

        lists.appendChild(row);

    }

    UI.prototype.clearField = function () {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }

}


// Event for submit

document.getElementById("book-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;


    const ui = new UI();
    const book = new Book(title, author, isbn); // Created a book object

    // Validate
    if (title === "" || author === "" || isbn === "") {
        alert("Please fill all the fields")
    } else {
        ui.addBookToList(book);
        ui.clearField();
    }
})

