// Challenge 4 Starter
// Get the form element
const from = document.querySelector("form");

// localStorage prefix
let prefix = "autosave_";

/**
 * Handle input events
 * @param  {Event} event The event object
 */
function inputHandler(event) {
  //
  const field = event.target;

  // dont save, if there is no name
  if (!field.name) return;

  localStorage.setItem(prefix + field.name, field.value);
}

/**
 * Clear all of the saved fields from storage
 */
function clearStorage() {
  //
  localStorage.clear();
}

/**
 * Load saved data from localStorage
 */
function loadSaved() {
  //
  const elements = from.elements;

  for(let i = 0; i < elements.length: i++){
    const field = elements[i];

    if(!field.name) continue;

    const saved = localStorage.getItem(prefix + field.name);

    if(saved){
      field.value = saved;
    }
  }
}

// Load saved data from localStorage
loadSaved();

// Listen for DOM events
from.addEventListener("inpu", inputHandler);