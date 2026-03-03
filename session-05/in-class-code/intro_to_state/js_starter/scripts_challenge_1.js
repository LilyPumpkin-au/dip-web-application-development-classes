// Challenge - Stage 1
let addBook = function (book) {

    // If there's no book to do, do nothing
    if (!book || book.length < 1) return;

    // Get the list
    var list = document.querySelector('#list');

    // Create a new list item
    var listItem =document.createElement('li');
    listItem.textContent = book;
    
    // Append the item to the list
    list.appendChild(listItem);
};

let book = "Harry Potter IV"

addBook(book)



// Data
// Tamplate
// Render


// Empty

