// scroll top on the document window
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop

var scrollElement = document.documentElement; // returns the element that is the root element of the document, for a
// webpage this the <html> element.

// This will colour the whole page background purple
// If you don't colour the HTML background the body background will become the full background colour
// Otherwise if the HTML background is coloured then the body becomes a block element and the body background is
// only on part of the screen that contains the child elements. note* child elements can also effect the height of
// the body
//scrollElement.style.backgroundColor = 'purple';

// for other elements use an event listener
window.onscroll = function() { myFunction() };

function myFunction() {

  // https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
  // Check the html element
  var intElemScrollTop = document.documentElement.scrollTop; // document.documentElement Firefox
  console.log('Body Scroll Up: ' + intElemScrollTop);

  // This is where the magic happens, it checks when body or documentElement is greater than the header.
  // body is different here, documentElement is the root element of the document which in this case it is the HTML element,
  // as it would be with most HTML documents.

  // Note that using the header element won't always work, so you might be better to create a variable from using an
  // ID
  if /*(document.body.scrollTop > 128){ } ||*/ (scrollElement.scrollTop > 128) {
      header.style.backgroundColor = "rgba(128,255,255,0.7)";
      header.classList.add('small');
    } else {
      header.style.backgroundColor = "transparent";
      header.classList.remove('small')
    }

}