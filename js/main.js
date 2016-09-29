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

function validate(form) {
  var elems = form.elements;
  var offerName = elems.offerName.value;
  var offerTel = elems.offerTel.value;
  var offerCar = elems.offerCar.value;

  var allInput = document.getElementsByClassName('offer-sign__form-input_error');
  for (i=0; i < allInput.length; i++) {
    allInput[i].classList.remove('offer-sign__form-input_error');
  }

  if (!offerName) {
    document.getElementsByClassName("offer-sign__form-error")[0].classList.add('offer-sign__form-error_active');
    elems.offerName.classList.add('offer-sign__form-input_error');
  }

  if (!offerTel) {
    document.getElementsByClassName("offer-sign__form-error")[0].classList.add('offer-sign__form-error_active');
    elems.offerTel.classList.add('offer-sign__form-input_error');
  }

  if (!offerCar) {
    document.getElementsByClassName("offer-sign__form-error")[0].classList.add('offer-sign__form-error_active');
    elems.offerCar.classList.add('offer-sign__form-input_error');
  }
}
