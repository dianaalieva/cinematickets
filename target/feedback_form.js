"use strict";

var feedbackForm = document.getElementById('feedback-form');
var feedbackName = document.querySelector('.form__input');
var feedbackSeat = document.querySelector('.form__feedback-seat');
var feedbackReview = document.querySelector('.form__textarea');
var FEEDBACK_ERROR_CLASS = 'feedback__error';
var FEEDBACK_FOCUS_CLASS = 'feedback__focus';

function initializeFeedbackField(feedbackMean) {
  var fInput = feedbackMean.querySelector('.feedbacks');
  var fErrorMsg = feedbackMean.querySelector('.form__error-msg');

  function fRemError() {
    feedbackMean.classList.remove(FEEDBACK_ERROR_CLASS);
    fErrorMsg.innerText = '';
  }

  ;
  fRemError();

  function fRemFocus() {
    feedbackMean.classList.remove(FEEDBACK_FOCUS_CLASS);
    fInput.value = '';
  }

  ;
  fInput.addEventListener('focus', function () {
    feedbackMean.classList.add(FEEDBACK_FOCUS_CLASS);
  });
  fInput.addEventListener('input', function () {
    fRemError();
  });
  fInput.addEventListener('blur', function () {
    if (!fInput.value) {
      fRemFocus();
    }

    ;
  });
  return {
    focus: function focus() {
      fInput.focus();
    },
    getValue: function getValue() {
      return fInput.value;
    },
    setError: function setError(fError) {
      fErrorMsg.innerText = fError;
      feedbackMean.classList.add(FEEDBACK_ERROR_CLASS);
    }
  };
}

;
var feedbackField1 = initializeFeedbackField(feedbackName);
var feedbackField2 = initializeFeedbackField(feedbackReview);
var feedbackFields = [feedbackField1, feedbackField2];
feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();
  feedbackFields.forEach(function (el) {
    var feedbackValue = el.getValue();

    if (!feedbackValue) {
      el.setError('не заполнено');
      el.focus();
      return;
    }
  });

  if (feedbackSeat.value === "none") {
    feedbackSeat.classList.add(FEEDBACK_ERROR_CLASS);
    return;
  }

  var fData = {
    name: feedbackName.value,
    review: feedbackReview.value,
    seat: feedbackSeat.value
  };
  var fUrl = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  fUrl.search = new URLSearchParams(fData).toString();
  fetch(fUrl.toString());
});
//# sourceMappingURL=feedback_form.js.map