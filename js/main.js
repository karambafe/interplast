function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset
  };
}

var navbar = document.getElementsByClassName('navbar')[0];
var forNavbarItem = document.getElementsByClassName('offer')[0];
var navbarCoords = getCoords(forNavbarItem);

window.onscroll = function() {
  if (navbarCoords.top < pageYOffset + 50 ) {
    navbar.classList.add('navbar_fixied');
  } else {
    navbar.classList.remove('navbar_fixied');
  }
};
