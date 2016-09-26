function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset
  };
}

var navbar = document.getElementsByClassName('navbar')[0];
var forNavbarItem = document.getElementsByClassName('fornavbar')[0];
var navbarCoords = getCoords(forNavbarItem);

window.onscroll = function() {
  console.log(navbarCoords.top);
  console.log(document.documentElement.clientHeight + pageYOffset);
  if (navbarCoords.top < document.documentElement.clientHeight + pageYOffset -350) {
    navbar.classList.add('navbar_fixied');
  } else {
    navbar.classList.remove('navbar_fixied');
  }
};
