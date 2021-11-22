"use strict";

var feedbackForm = document.getElementById('feedback-form');
var feedbackName = document.querySelector('.form__input');
var feedbackSeat = document.querySelector('.form__feedback-seat');
var feedbackReview = document.querySelector('.form__textarea');
var feedbackError = document.createElement('div');
feedbackError.className = 'feedback__error';
var feedbackFocus = document.createElement('div');
feedbackFocus.className = 'feedback__focus';
feedbackForm.classList.remove(feedbackError);
var feedbackErrorMsg = document.querySelector('.form__error-msg');
feedbackErrorMsg.innerText = '';
var feedbackInput = document.getElementsByClassName('form__feedback-input');
feedbackInput.type = 'text';
feedbackInput.value = '';

function feedbackOne() {
  if (feedbackInput.value) {
    feedbackForm.classList.add(feedbackError);
    feedbackErrorMsg.innerText = 'обязательно';
  } else {
    feedbackForm.classList.add(feedbackFocus);
  }
}

;
feedbackOne();