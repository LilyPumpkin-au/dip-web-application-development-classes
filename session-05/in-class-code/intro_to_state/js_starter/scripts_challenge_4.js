import data from "./userobjects.js";
// Challenge - Stage 4

/**
 * State-based UI Component
 * @param {String} selector The selector for the target elementent
 * @param {Object} options  Component options
 */
let UserComponent = function (selector, options) {
  this.element = document.querySelector(selector);
  this.data = options.data;
  this.template = options.template;
};

/**
 * Render a new UI
 */
UserComponent.prototype.render = function () {
  this.element.innerHTML = this.template(this.data);
};

console.log(`The data I have is : ${data}`);

// The list of books
let app = new UserComponent("#app", {
  data,
  //   : {
  //     books: ["Harry Potter I", "Harry Potter II", "Harry Potter III"],
  //   },
  //   template: function (props) {
  //     let html =
  //       "<ul>" +
  //       props.books
  //         .map(function (book) {
  //           return "<li>" + book + "</li>";
  //         })
  //         .join("") +
  //       "</ul>";
  //     return html;
  //   },

  template: (props) => {
    const items = props
      .map((prop) => `<li>${prop.firstName} ${prop.lastName}</li>`)
      .join("");
    return `<section class="news-article"><ol>${items}</ol></section>`;
  },
});

// Render the list
app.render();

// Update the UI
app.data.push({ firstName: "Hurry", lastName: "Potter" });
app.data.push({ firstName: "Harm", lastName: "yoney" });
app.render();
