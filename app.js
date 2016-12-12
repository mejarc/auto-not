/*eslint-env browser */
/**
 * @fileOverview Main script for the Auto-not Chrome extension
 * @author Melanie Archer
 * @version 0.3
 */

/**
* Finds all elements with the `autoplay` attribute
*  @returns {Array} NodeList of elements
*/

const findAutoplay = () => {
  "use strict";
  let items = document.querySelectorAll("*[autoplay]");
  return items;
}

/**
* Iterates through all elements with the `autoplay` attribute
* and removes those nodes using DOM Level 4 method.
* @param {Array} items
*/

const removeAutoplay = (items) => {
  "use strict";
  for (let i = 0; i < items.length; i++){
    items[i].remove();
  }
}

/**
* Verifies that the ESC key was pressed,
* and calls the functions for removing autoplaying nodes.
*  @param  {document#event:keydown} event
*/

const keyHandler = (e) => {
  "use strict";
  if (!e){
    e = event;
  }
  if (e.keyCode === 27){
    let items = findAutoplay();
    removeAutoplay(items);
  }
}

/**
* Attachs removal to onKeydown of the ESC key
*/
document.addEventListener("keydown", keyHandler, true);
