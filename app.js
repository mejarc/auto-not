/** 
* Finds all elements with the `autoplay` attribute
*  @returns {Array} NodeList of elements
*/

function findAutoplay(){
  var items = document.querySelectorAll('*[autoplay]')
  return items;
}

/** 
* Iterates through all elements with the `autoplay` attribute
* and removes those nodes using DOM Level 4 method.
* @param {Array} items
*/

function removeAutoplay(items){
  var i = 0,
      len = items.length;
  for (; i < len; i++){
    items[i].remove();
  }
}

/** 
* Verifies that the ESC key was pressed,
* and calls the functions for removing autoplaying nodes.
*  @param  {document#event:keydown} event
*/

function keyHandler(e){
  if (!e){
    e = event;
  }
  if (e.keyCode === 27){
    var items = findAutoplay();
    removeAutoplay(items);
  }
}

/** 
* Attachs removal to onKeydown of the ESC key
*/
document.addEventListener('keydown', keyHandler, true);
