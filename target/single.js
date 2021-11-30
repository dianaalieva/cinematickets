"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var singleInfo = new URLSearchParams(location.search);
var singleId = singleInfo.get('id');

var getSingleData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var singleData, singleHeader, singleDesc, singlePoster;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getFilmDetails(singleId).then(function (d) {
              return d.json();
            });

          case 2:
            singleData = _context.sent;
            singleHeader = document.getElementById('single__header');
            singleDesc = document.getElementById('single__desc');
            singlePoster = document.getElementById('single__poster');
            singleHeader.textContent = singleData.nameRu;
            singleDesc.textContent = singleData.description;
            singlePoster.src = singleData.posterUrl;

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSingleData() {
    return _ref.apply(this, arguments);
  };
}();

var SINGLE_STAR_SELECTED = 'rating__star-selected';
var SINGLE_HEART_LIKED = 'single__heart-leked';
var singleLikes = document.getElementById('single__likes');
var stars = document.querySelectorAll('.single__rating-star');

var getSingleMetaInfo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _yield$fetch$then, singleInfo, singleViews, ratingNumber, rating, ratingScore, i, star;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("http://inno-ijl.ru/multystub/stc-21-03/film/".concat(singleId)).then(function (d) {
              return d.json();
            });

          case 2:
            _yield$fetch$then = _context2.sent;
            singleInfo = _yield$fetch$then.body;
            singleViews = document.getElementById('single__views');
            singleViews.textContent = "".concat(singleInfo.views, " Views");
            singleLikes.textContent = "".concat(singleInfo.likes, " Likes");
            singleLikes.dataset.likesCount = singleInfo.likes;
            ratingNumber = singleInfo.ratings.reduce(function (a, b) {
              return +a + +b;
            }, 0) / singleInfo.ratings.length;
            rating = String(Math.round(ratingNumber * 10) / 10).padEnd(3, '.0');
            ratingScore = document.getElementById('single__rating-score');
            ratingScore.textContent = rating;

            for (i = 0; i < stars.lengt; i++) {
              star = stars[i];

              if (i >= ratingNumber) {
                star.classList.remove(SINGLE_STAR_SELECTED);
              } else {
                star.classList.add(SINGLE_STAR_SELECTED);
              }
            }

            ;

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getSingleMetaInfo() {
    return _ref2.apply(this, arguments);
  };
}();

var likeHeart = document.getElementById('single__heart');
var LOCAL_STORAGE_LIKE = "film-like-".concat(singleId);

if (localStorage.getItem(LOCAL_STORAGE_LIKE)) {
  likeHeart.classList.add(SINGLE_HEART_LIKED);
} else {
  likeHeart.addEventListener('click', function () {
    if (!likeHeart.classList.contains(SINGLE_HEART_LIKED)) {
      fetch("http://inno-ijl.ru/multystub/stc-21-03/film/".concat(singleId, "/like"), {
        method: 'POST'
      });
      likeHeart.classList.add(SINGLE_HEART_LIKED);
      var currentLikesCount = Number(singleLikes.dataset.likesCount);
      singleLikes.textContent = "".concat(currentLikesCount + 1, " Likes");
      localStorage.setItem(LOCAL_STORAGE_LIKE, true);
    }
  });
}

;
$('.block__div1').on('click', '.single__rating-star', function () {
  var rating = +this.dataset.ratingValue;
  fetch("http://inno-ijl.ru/multystub/stc-21-03/film/".concat(singleId, "/rating"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      rating: rating
    })
  }).then(getSingleMetaInfo);
});
getSingleData();
getSingleMetaInfo();
//# sourceMappingURL=single.js.map