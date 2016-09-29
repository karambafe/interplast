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

function validateOffer(form) {
  var elems = form.elements;
  var offerName = elems.offerName.value;
  var offerTel = elems.offerTel.value;
  var offerCar = elems.offerCar.value;

  var allInput = document.getElementsByClassName('offer-sign__form-input_error');
  for (i=0; i < (allInput.length) ; i++) {
    allInput[i].classList.remove('offer-sign__form-input_error');
    document.getElementsByClassName("offer-sign__form-error")[0].classList.remove('offer-sign__form-error_active');
  }

  if (!offerName) {
    event.preventDefault();
    document.getElementsByClassName("offer-sign__form-error")[0].classList.add('offer-sign__form-error_active');
    elems.offerName.classList.add('offer-sign__form-input_error');

  }

  if (!offerTel) {
    event.preventDefault();
    document.getElementsByClassName("offer-sign__form-error")[0].classList.add('offer-sign__form-error_active');
    elems.offerTel.classList.add('offer-sign__form-input_error');
  }

  if (!offerCar) {
    event.preventDefault();
    document.getElementsByClassName("offer-sign__form-error")[0].classList.add('offer-sign__form-error_active');
    elems.offerCar.classList.add('offer-sign__form-input_error');
  }
}

function validateContasts(form) {
  var elems = form.elements;
  var contactsName = elems.contactsName.value;
  var contactsPhone = elems.contactsPhone.value;

  var howWork = document.getElementsByClassName('how-work__form-input_error');
  for (i=0; i < (howWork.length) ; i++) {
    howWork[i].classList.remove('how-work__form-input_error');
    document.getElementsByClassName("how-work__form-error")[0].classList.remove('how-work__form-error_active');
  }

  var contacts = document.getElementsByClassName('contacts__questions-form-input_error');
  for (i=0; i < (contacts.length) ; i++) {
    contacts[i].classList.remove('contacts__questions-form-input_error');
    document.getElementsByClassName("contacts__questions-form-error")[0].classList.remove('contacts__questions-form_active');
  }

  if (!contactsName) {
    event.preventDefault();
    document.getElementsByClassName("how-work__form-error")[0].classList.add('how-work__form-error_active');
    elems.contactsName.classList.add('how-work__form-input_error');
    document.getElementsByClassName("contacts__questions-form-error")[0].classList.add('contacts__questions-form-error_active');
    elems.contactsName.classList.add('contacts__questions-form-input_error');
  }

  if (!contactsPhone) {
    event.preventDefault();
    document.getElementsByClassName("how-work__form-error")[0].classList.add('how-work__form-error_active');
    elems.contactsPhone.classList.add('how-work__form-input_error');
    document.getElementsByClassName("contacts__questions-form-error")[0].classList.add('contacts__questions-form-error_active');
    elems.contactsPhone.classList.add('contacts__questions-form-input_error');
  }
}
