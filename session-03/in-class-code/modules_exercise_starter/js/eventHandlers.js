// Moularisation Exercise.js

// Method to handle the Click Me button click event
function handleClickMeButton() {
  const button = document.getElementById("button1");
  button.addEventListener("click", function () {
    alert("Button Clicked!");
  });
}

// Method to handle the Hover Over Me button hover event
function handleHoverButton() {
  const button = document.getElementById("button2");
  button.addEventListener("mouseover", function () {
    alert("Button Hovered Over!");
  });
}

// Method to handle the Double Click Me button double click event
function handleDoubleClickButton() {
  const button = document.getElementById("button3");
  button.addEventListener("dblclick", function () {
    alert("Button Double Clicked!");
  });
}
