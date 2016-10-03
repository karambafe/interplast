function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset
  };
}
var navbar = document.getElementsByClassName('navbar')[0];
var forNavbarItem = document.getElementsByClassName('offer')[0];
var navbarCoords = getCoords(forNavbarItem);
window.onscroll = function() {
  if (navbarCoords.top < pageYOffset + 50) {
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
  var allInput = document.getElementsByClassName('offer-sign__form-input');
  for (i = 0; i < (allInput.length); i++) {
    if (allInput[i].classList.contains('offer-sign__form-input_error')) {
      allInput[i].classList.remove('offer-sign__form-input_error');
    }
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
  console.log(elems);
  console.log(form.id);
  var contactsName = elems.contactsName.value;
  var contactsPhone = elems.contactsPhone.value;
  switch (form.id) {
    case 'howWork':
      var howWork = document.getElementsByClassName('how-work__form-input');
      for (i = 0; i < (howWork.length); i++) {
        if (howWork[i].classList.contains('how-work__form-input_error')) {
          howWork[i].classList.remove('how-work__form-input_error');
        }
        document.getElementsByClassName("how-work__form-error")[0].classList.remove('how-work__form-error_active');
      }
      if (!contactsName) {
        event.preventDefault();
        document.getElementsByClassName("how-work__form-error")[0].classList.add('how-work__form-error_active');
        elems.contactsName.classList.add('how-work__form-input_error');
      }
      if (!contactsPhone) {
        event.preventDefault();
        document.getElementsByClassName("how-work__form-error")[0].classList.add('how-work__form-error_active');
        elems.contactsPhone.classList.add('how-work__form-input_error');
      }
      break;
    case 'contacts':
      var contacts = document.getElementsByClassName('contacts__questions-form-input');
      for (i = 0; i < (contacts.length); i++) {
        if (contacts[i].classList.contains('contacts__questions-form-input_error')) {
          contacts[i].classList.remove('contacts__questions-form-input_error');
        }
        document.getElementsByClassName("contacts__questions-form-error")[0].classList.remove('contacts__questions-form-error_active');
      }
      if (!contactsName) {
        event.preventDefault();
        document.getElementsByClassName("contacts__questions-form-error")[0].classList.add('contacts__questions-form-error_active');
        elems.contactsName.classList.add('contacts__questions-form-input_error');
      }
      if (!contactsPhone) {
        event.preventDefault();
        document.getElementsByClassName("contacts__questions-form-error")[0].classList.add('contacts__questions-form-error_active');
        elems.contactsPhone.classList.add('contacts__questions-form-input_error');
      }
      break;
    default:
      break;
  }
}

function validateModal(form) {
  var elems = form.elements;
  var name = elems.name.value;
  var phone = elems.phone.value;
  var allSpan = document.getElementsByClassName("modalForm-error");
  var allInput = document.getElementsByClassName('modalForm-input');
  for (i = 0; i < (allInput.length); i++) {
    if (allInput[i].classList.contains('modalForm-input_error')) {
      allInput[i].classList.remove('modalForm-input_error');
    }
    document.getElementsByClassName("modalForm-error")[0].classList.remove('modalForm-error_active');
  }
  if (!name) {
    event.preventDefault();
    for (i = 0; i < (allSpan.length); i++) {
      allSpan[i].classList.add('modalForm-error_active');
    }
    elems.name.classList.add('modalForm-input_error');
  }
  if (!phone) {
    event.preventDefault();
    for (i = 0; i < (allSpan.length); i++) {
      allSpan[i].classList.add('modalForm-error_active');
    }
    document.getElementsByClassName("modalForm-error")[0].classList.add('modalForm-error_active');
    elems.phone.classList.add('modalForm-input_error');
  }
}

document.getElementById('ymaps1475505748508770937').classList.add('contacts__map-shadow');

function setService(id) {
  $('.modalForm__text').text(id);
  $('.modalForm-hidden').val(id);
}
$(document).ready(function() {
  $('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('img');
      }
    }
  });
});