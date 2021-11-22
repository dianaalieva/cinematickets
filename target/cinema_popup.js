"use strict";

var prizeForm = document.getElementById('prize-popup');
var openButton = document.querySelector('#popup-open');
var closeButton = document.querySelector('#popup-close');
var nameInputWrapper = document.querySelector('#prize-popup input[name="name"]').parentNode;
var emailInputWrapper = document.querySelector('#prize-popup input[name="email"]').parentNode;
var prizeSelect = document.querySelector('#prize');
var ERROR_CLASS = 'form__popup-error';
var FOCUS_CLASS = 'form__popup-focus';

function popupToggle() {
  prizeForm.classList.toggle('hidden');
}

function initializeField() {
  var popupInput = document.getElementsByTagName('input')[0];
  var popupErrorText = document.querySelector('.form__popup-error-msg');

  function clearFocus() {
    prizeForm.classList.remove(FOCUS_CLASS);
    popupInput.value = '';
  }

  clearFocus();

  function clearError() {
    prizeForm.classList.remove(ERROR_CLASS);
    popupErrorText.innerText = '';
  }

  ;
  popupInput.addEventListener('focus', function () {
    prizeForm.classList.add(FOCUS_CLASS);
  });
  popupInput.addEventListener('input', function () {
    clearError();
  });
  popupInput.addEventListener('blur', function () {
    if (!popupInput.value) {
      clearFocus();
    }

    ;
  });
  return {
    focus: function focus() {
      prizeForm.classList.add(FOCUS_CLASS);
    },
    getValue: function getValue() {
      return popupInput.value;
    },
    setError: function setError(error) {
      popupErrorText.innerText = error;
      prizeForm.classList.add(ERROR_CLASS);
    }
  };
}

;
var Field = initializeField();

openButton.onclick = function () {
  popupToggle();
  nameInputWrapper.focus();
};

closeButton.onclick = popupToggle;
prizeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var popupValue = Field.getValue();

  if (!popupValue) {
    Field.setError('не заполнено');
    Field.focus();
    return;
  }

  if (prizeSelect.value === "none") {
    prizeSelect.classList.add(ERROR_CLASS);
    return;
  }

  var data = {
    name: popupValue,
    email: popupValue,
    free: prizeSelect.value
  };
  var url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();
  fetch(url.toString());
});