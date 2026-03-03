// Challenge - Stage 5 UserObject manipulate
// https://github.com/NM-TAFE/dip-web-application-development-classes/blob/2026S1/session-05/in-class-code/intro_to_state/js_starter/user_component.js
import data from "./userobjects.js";


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
UserComponent.prototype.render = function(){
    this.element.innerHTML = this.template(this.data);
}

// The list of users
let app = new UserComponent("#app", {
    data,
//     template: function (props) {
//         console.log(props);
//    let html =
//       '<ul>' +
//            props.
//            map(function (prop) {
//                 return '<li>' + prop.firstName + '</li>';
//                     })
//                     .join('') +
//                 '</ul>';
//             return html;
//         },

        template: (props)=> {
            const items = props.map((prop) => `<li>${prop.firstName} ${prop.lastName}</li>`).join("");
            return `<section class="news-article"><ol>${items}</ol></section>`;
        },
});

// Render the list
app.render();

// Update the UI
// app.data.books.push("Hurry Potter 4");
// app.data.books.push("Hurry Potter 5");
// app.render();
