// Method to initialise the app
function initialiseApp() {
  handleClickMeButton();
  handleHoverButton();
  handleDoubleClickButton();

  // Add some sample posts
  addPost("First Post", "This is the content of the first post.");
  addPost("Second Post", "This is the content of the second post.");

  // Add some sample books
  const books = ["Harry Potter I", "Harry Potter II", "Harry Potter III"];
  addBooks(books);
}

// Initialise the app when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initialiseApp);
