
// Method to add a post to the post container
function addPost(title, content) {
  const postContainer = document.getElementById("postContainer");
  const post = document.createElement("div");
  post.className = "post";

  const postTitle = document.createElement("h3");
  postTitle.textContent = title;

  const postContent = document.createElement("p");
  postContent.textContent = content;

  post.appendChild(postTitle);
  post.appendChild(postContent);
  postContainer.appendChild(post);
}

// Method to dynamically add a list of books to the sidebar
function addBooks(books) {
  const booksContainer = document.createElement("aside");
  booksContainer.className = "section subtitle is-5 has-text-primary";

  const bookList = document.createElement("ul");
  bookList.id = "list";

  books.forEach(function (book) {
    const listItem = document.createElement("li");
    listItem.textContent = book;
    bookList.appendChild(listItem);
  });

  booksContainer.appendChild(bookList);
  const container = document.querySelector(".container");
  container.appendChild(booksContainer);
}