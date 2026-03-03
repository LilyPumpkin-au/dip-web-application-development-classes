// Challenge - Stage 4
/**
 * State-based UI Component
* @param {String} selector The selector for the target elementent
* @param {Object} options  Component options
*/
let MyListComponent = function (selector, options) {
    this.element = document.querySelector(selector);
    this.data = options.data;
    this.template = options.template;
};

/**
 * Render a new UI
*/


// The list of books
let app = new MyListComponent("#app", {
    data: {
     books: ['Harry Potter I', 'Harry Potter II', 'Harry Potter III'],
    },
    template: function (props) {
   let html =
      '<ul>' +
           props.books.map(function (book) {
                return '<li>' + book + '</li>';
                    }).join('') +
                '</ul>';
            return html;
        },
});

// Render the list
app.render();

// Update the UI
app.data.books.push("Hurry Potter 4");
app.data.books.push("Hurry Potter 5");
app.render();
