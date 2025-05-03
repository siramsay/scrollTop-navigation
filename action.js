// scroll top on the document window
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop

var scrollElement = document.documentElement; // returns the element that is the root element of the document

window.onscroll = function() { myFunction() };

function myFunction() {

  var intElemScrollTop = document.documentElement.scrollTop;
  console.log('Body Scroll Up: ' + intElemScrollTop);

  if  (scrollElement.scrollTop > 128) {
      header.style.backgroundColor = "rgba(128,255,255,0.95)";
      header.classList.add('small');
    } else {
      header.style.backgroundColor = "transparent";
      header.classList.remove('small')
    }

}
