"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var API_TOKEN = '08b36bd4-4230-423f-9857-06ae35b0098d';
var cinemaCatalogWrapper = document.getElementById('cinema-catalog');

var renderFilmBlock = function renderFilmBlock(title, posterUrl, filmId) {
  var filmLink = document.createElement('a');
  filmLink.href = "/single/single.html?id=".concat(filmId);
  var filmWrapper = document.createElement('div');
  filmWrapper.classList.add('catalog__image', 'catalog__image5');
  var filmPoster = document.createElement('img');
  filmPoster.src = posterUrl;
  filmPoster.alt = 'постер к фильму';
  var filmModal = document.createElement('div');
  filmModal.classList.add('catalog__image-modal');
  var filmName = document.createElement('p');
  filmName.classList.add('catalog__image-name');
  filmName.textContent = title;
  var filmDescription = document.createElement('p');
  filmDescription.classList.add('catalog__image-lorem');
  filmDescription.textContent = 'Loading...';
  filmModal.append(filmName, filmDescription);
  filmWrapper.append(filmLink);
  filmLink.append(filmPoster, filmModal);
  return [filmWrapper, filmDescription];
};

var getBlockFilmsData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var answer, data, requests, filmsLayout, i, _iterator, _step, _step$value, filmLayout;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return getTopFilms();

          case 3:
            answer = _context3.sent;
            _context3.next = 6;
            return answer.json();

          case 6:
            data = _context3.sent;
            requests = [];
            filmsLayout = new Map();
            data.films.forEach( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(film, i) {
                var _renderFilmBlock, _renderFilmBlock2, filmWrapper, filmDescription;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _renderFilmBlock = renderFilmBlock(film.nameRu, film.posterUrlPreview, film.filmId), _renderFilmBlock2 = _slicedToArray(_renderFilmBlock, 2), filmWrapper = _renderFilmBlock2[0], filmDescription = _renderFilmBlock2[1];
                        filmsLayout.set(film.filmId, filmWrapper);
                        requests.push(new Promise(function (resolve, reject) {
                          setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            var _answer, filmData;

                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.prev = 0;
                                    _context.next = 3;
                                    return getFilmDetails(film.filmId);

                                  case 3:
                                    _answer = _context.sent;
                                    _context.next = 6;
                                    return _answer.json();

                                  case 6:
                                    filmData = _context.sent;
                                    filmDescription.textContent = filmData.description;

                                    if (!filmData.description) {
                                      filmsLayout["delete"](film.filmId);
                                    }

                                    ;
                                    _context.next = 14;
                                    break;

                                  case 12:
                                    _context.prev = 12;
                                    _context.t0 = _context["catch"](0);

                                  case 14:
                                    resolve();

                                  case 15:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, null, [[0, 12]]);
                          })), i * 100);
                        }));

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context3.next = 12;
            return Promise.all(requests);

          case 12:
            cinemaCatalogWrapper.innerHTML = '';
            i = 0;
            _iterator = _createForOfIteratorHelper(filmsLayout);
            _context3.prev = 15;

            _iterator.s();

          case 17:
            if ((_step = _iterator.n()).done) {
              _context3.next = 26;
              break;
            }

            _step$value = _slicedToArray(_step.value, 2), filmLayout = _step$value[1];
            cinemaCatalogWrapper.append(filmLayout);
            i++;

            if (!(i === 9)) {
              _context3.next = 23;
              break;
            }

            return _context3.abrupt("break", 26);

          case 23:
            ;

          case 24:
            _context3.next = 17;
            break;

          case 26:
            _context3.next = 31;
            break;

          case 28:
            _context3.prev = 28;
            _context3.t0 = _context3["catch"](15);

            _iterator.e(_context3.t0);

          case 31:
            _context3.prev = 31;

            _iterator.f();

            return _context3.finish(31);

          case 34:
            ;
            _context3.next = 40;
            break;

          case 37:
            _context3.prev = 37;
            _context3.t1 = _context3["catch"](0);
            console.error(_context3.t1);

          case 40:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 37], [15, 28, 31, 34]]);
  }));

  return function getBlockFilmsData() {
    return _ref.apply(this, arguments);
  };
}();

getBlockFilmsData();
//# sourceMappingURL=block_films.js.map