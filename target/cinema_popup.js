"use strict";

var prizeForm = document.getElementById('prize-popup');
var openButton = document.querySelector('#popup-open');
var closeButton = document.querySelector('#popup-close');
var nameInputWrapper = document.querySelector('#prize-popup input[name="name"]').parentNode;
var emailInputWrapper = document.querySelector('#prize-popup input[name="email"]').parentNode;
var prizeSelect = document.querySelector('#prize');
var INPUT_ERROR_CLASS = 'form__popup-error';
var INPUT_FOCUS_CLASS = 'form__popup-focus';

function popupToggle() {
  prizeForm.classList.toggle('hidden');
}

function initializeField(field) {
  var input = field.getElementsByTagName('input')[0];
  var errorText = field.querySelector('.form__popup-error-msg');
  clearError();
  field.classList.remove(INPUT_FOCUS_CLASS);
  input.value = '';

  function clearError() {
    field.classList.remove(INPUT_ERROR_CLASS);
    errorText.innerText = '';
  }

  ;
  input.addEventListener('focus', function () {
    field.classList.add(INPUT_FOCUS_CLASS);
  });
  input.addEventListener('input', function () {
    clearError();
  });
  input.addEventListener('blur', function () {
    if (!input.value) {
      field.classList.remove(INPUT_FOCUS_CLASS);
    }

    ;
  });
  return {
    focus: function focus() {
      input.focus();
    },
    getValue: function getValue() {
      return input.value;
    },
    setError: function setError(error) {
      errorText.innerText = error;
      field.classList.add(INPUT_ERROR_CLASS);
    }
  };
}

;
var nameField = initializeField(nameInputWrapper);
var emailField = initializeField(emailInputWrapper);

openButton.onclick = function () {
  popupToggle();
  nameField.focus();
};

closeButton.onclick = popupToggle;
prizeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var nameValue = nameField.getValue();
  var emailValue = emailField.getValue();

  if (!nameValue) {
    nameField.setError('не заполнено');
    nameField.focus();
    return;
  }

  if (!emailValue) {
    emailField.setError('не заполнено');
    emailField.focus();
    return;
  }

  if (prizeSelect.value === "none") {
    prizeSelect.classList.add(INPUT_ERROR_CLASS);
    return;
  }

  var data = {
    name: nameValue,
    email: emailValue,
    free: prizeSelect.value
  };
  var url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();
  fetch(url.toString());
});