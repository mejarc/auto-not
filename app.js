// use strict;

/** 
* Finds all elements with the `autoplay` attribute
*  @returns {Array} NodeList of elements
*/

function findAutoplay(){
  var items = document.querySelectorAll('*[autoplay]');
  return items;
}

// /**
// * Remove the `autoplay` attribute from all elements,
// * whether or not it's set to true
// * @param {Array} items
// */

// function removeAutoplayAttribute(items){
//   for (var i = 0; i < items.length; i++){
//     items[i].removeAttribute('autoplay');
//   }
// }

/**
* Gets the current value of `paused` on
* a given node
* @returns {Boolean}
**/

function reportPlaybackStatus(item){
  return item.paused;
}

/** 
* Toggles the playback of a given video or audio element
* @param {Object} item
*/

function toggleAutoplay(item){
  var isPlaying = reportPlaybackStatus(item);
  console.log('item' + item);
  console.log('item paused?' + isPlaying);
  isPlaying === false? item.pause() : item.play();
  console.log('item playing?' + isPlaying);
}
/** 
* Verifies that the ESC key was pressed,
* and calls the functions for removing `autoplay` and pausing/resuming
* playback.
*  @param  {document#event:keydown} event
*/

function keyHandler(e){
  if (!e){
    e = event;
  }
  if (e.keyCode === 27){
    var items = findAutoplay();
    // removeAutoplayAttribute(items);
    toggleAutoplay(items[0]);
  }
}

/** 
* Attachs removal to onKeydown of the ESC key
*/
document.addEventListener('keydown', keyHandler, true);
