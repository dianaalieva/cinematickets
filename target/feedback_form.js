"use strict";

var feedbackForm = document.getElementById('feedback-form');
var nameInput = document.querySelector('#feedback-form input').parentNode;
var reviewText = document.querySelector('#feedback-form textarea').parentNode;
var seatSelect = document.querySelector('#seat');
var INPUT_ERROR_CLASS = 'feedback__input-error';
var INPUT_FOCUS_CLASS = 'feedback__input-focus';
var TEXTAREA_ERROR_CLASS = 'feedback__textarea-error';
var TEXTAREA_FOCUS_CLASS = 'feedback__textarea-focus';

function initializeField(field) {
  var input = field.querySelector('.form__feedback-input');
  var errorText = field.querySelector('.form__input-error-msg');
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

function initializeFields(fields) {
  var textarea = fields.querySelector('.form__feedback-textarea');
  var errorsText = fields.querySelector('.form__textarea-error-msg');
  cleanError();
  fields.classList.remove(TEXTAREA_FOCUS_CLASS);
  textarea.value = '';

  function cleanError() {
    fields.classList.remove(TEXTAREA_ERROR_CLASS);
    errorsText.innerText = '';
  }

  ;
  textarea.addEventListener('focus', function () {
    fields.classList.add(TEXTAREA_FOCUS_CLASS);
  });
  textarea.addEventListener('input', function () {
    cleanError();
  });
  textarea.addEventListener('blur', function () {
    if (!textarea.value) {
      fields.classList.remove(TEXTAREA_FOCUS_CLASS);
    }

    ;
  });
  return {
    focus: function focus() {
      textarea.focus();
    },
    getValue: function getValue() {
      return textarea.value;
    },
    setError: function setError(error) {
      errorsText.innerText = error;
      fields.classList.add(TEXTAREA_ERROR_CLASS);
    }
  };
}

;
var inputField = initializeField(nameInput);
var textareaField = initializeFields(reviewText);
feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var nameValue = inputField.getValue();
  var reviewValue = textareaField.getValue();

  if (!nameValue) {
    inputField.setError('Имя обязательно');
    inputField.focus();
    return;
  }

  ;

  if (!reviewValue) {
    textareaField.setError('Отзыв обязателен');
    textareaField.focus();
    return;
  }

  ;

  if (seatSelect.value === 'none') {
    seatSelect.classList.add(FEEDBACK_ERROR_CLASS);
    return;
  }

  ;
  var data = {
    name: nameValue,
    review: reviewValue,
    place: seatSelect.value
  };
  var url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();
  fetch(url.toString());
});