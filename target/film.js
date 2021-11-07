"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Film = /*#__PURE__*/function () {
  function Film(filmData) {
    _classCallCheck(this, Film);

    this._data = filmData;
    this._data.time = "".concat(getTime(9, 22), ":").concat(getTime(0, 60));
  }

  _createClass(Film, [{
    key: "isNotForAdult",
    value: function isNotForAdult() {
      return this._data.adult !== true;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this._data.title || this._data.name;
    }
  }, {
    key: "getTime",
    value: function getTime() {
      console.log(this._data);
      return this._data.time;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this._data.id || "".concat(this._data.name.replaceAll(" ", "-"), "-").concat(this._data.time);
    }
  }, {
    key: "getGenres",
    value: function getGenres() {
      return this._data.genres.join(", ");
    }
  }, {
    key: "renderFilmTableItem",
    value: function renderFilmTableItem() {
      return "\n    <tr class=\"table__row\">\n                    <td class=\"table__column table__column_check\">\n                      <input\n                        type=\"checkbox\"\n                        class=\"table__check\"\n                        id=\"".concat(this.getId(), "\"\n                      />\n                      <label for=\"").concat(this.getId(), "\">\n                        <svg\n                          viewBox=\"0 0 11 9\"\n                          fill=\"none\"\n                          xmlns=\"http://www.w3.org/2000/svg\"\n                        >\n                          <path\n                            fill-rule=\"evenodd\"\n                            clip-rule=\"evenodd\"\n                            d=\"M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z\"\n                            fill=\"white\"\n                          />\n                        </svg>\n                      </label>\n                    </td>\n                    <td class=\"table__column table__column_time\">").concat(this.getTime(), "</td>\n                    <td class=\"table__column\">").concat(this.getTitle(), "</td>\n                    <td class=\"table__column\">").concat(this.getGenres(), "</td>\n    </tr>");
    }
  }]);

  return Film;
}();