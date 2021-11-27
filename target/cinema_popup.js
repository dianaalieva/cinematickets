"use strict";

var prizeForm = document.getElementById('prize-popup');
var openButton = document.querySelector('#popup-open');
var closeButton = document.querySelector('#popup-close');
var nameInputWrapper = document.querySelector('.form__popup');
var emailInputWrapper = document.querySelector('.form__popup2');
var prizeSelect = document.querySelector('#prize');
var POPUP_ERROR_CLASS = 'form__popup-error';
var POPUP_FOCUS_CLASS = 'form__popup-focus';

function popupToggle() {
  prizeForm.classList.toggle('hidden');
}

function clearErrors(input) {
  input.classList.remove(POPUP_ERROR_CLASS);
}

function initializeField(popupInput) {
  var pInput = popupInput.getElementsByTagName('input')[0];
  var popupErrorText = popupInput.querySelector('.form__popup-error-msg');

  function pRemError() {
    popupInput.classList.remove(POPUP_ERROR_CLASS);
    popupErrorText.innerText = '';
  }

  ;
  pRemError();

  function pRemFocus() {
    popupInput.classList.remove(POPUP_FOCUS_CLASS);
    pInput.value = '';
  }

  ;
  pInput.addEventListener('focus', function () {
    popupInput.classList.add(POPUP_FOCUS_CLASS);
  });
  pInput.addEventListener('input', function () {
    pRemError();
  });
  pInput.addEventListener('blur', function () {
    if (!pInput.value) {
      pRemFocus();
    }

    ;
  });
  return {
    focus: function focus() {
      pInput.focus();
    },
    getValue: function getValue() {
      return pInput.value;
    },
    setError: function setError(error) {
      popupErrorText.innerText = error;
      popupInput.classList.add(POPUP_ERROR_CLASS);
    }
  };
}

;
var field1 = initializeField(nameInputWrapper);
var field2 = initializeField(emailInputWrapper);
var fields = [field1, field2];

openButton.onclick = function () {
  popupToggle();
  field1.focus();
};

closeButton.onclick = function () {
  popupToggle();
  document.getElementById('prize-popup').reset();
  [nameInputWrapper, emailInputWrapper].forEach(function (el) {
    clearErrors(el);
    var errorText = el.querySelector('.form__popup-error-msg');
    errorText.innerText = '';
  });
};

prizeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  fields.forEach(function (el) {
    var popupValue = el.getValue();

    if (!popupValue) {
      el.setError('не заполнено');
      el.focus();
      return;
    }
  });
  var emailValue = field2.getValue();

  if (!/^[\w]{3,20}@[a-z 0-9]{4,8}|.[a-z]{2,3}$/.test(emailValue)) {
    field2.setError('некорректный email');
    field2.focus();
  }

  ;
  console.log(prizeSelect, 3);

  if (prizeSelect.value === "none") {
    prizeSelect.classList.add(POPUP_ERROR_CLASS);
  }

  ;
  var data = {
    name: nameInputWrapper.value,
    email: emailInputWrapper.value,
    free: prizeSelect.value
  };
  var url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();
  fetch(url.toString());
});
//# sourceMappingURL=cinema_popup.js.map