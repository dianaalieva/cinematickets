"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var stuff = [['♈', '♉', '♊', '♋', '♌'], ['♍', '♎'], [['♏', '♐', '♑'], ['♒', '♓'], ['🌸', '🌷', '🌹', '🌺']], ['🌻', '🌼', '🌽'], [[{
  value: '🍅'
}, {
  value: '🍎'
}], [{
  value: '🍏'
}, {
  get: function get() {
    return '🍑';
  }
}], [{
  get: function get() {
    return '🍒';
  }
}, {
  get: function get() {
    return '🍓';
  }
}]]];
/**
 * Из представленного массива stuff необходимо заполнить
 * константы zodiacSigns, flowers, food соответственно
 * знаками задиака, цветами и съедобными объектами.
 * Значения должны получиться плоскими массивами
 * без оберток в виде объектов и методов вида:
 * 🍅 🍎 🍏 🍑 🍒 🍓
 * Попробуйте написать как можно меньше кода для достижения
 * результата.
 */

var zodi = stuff[0],
    zodi1 = stuff[1],
    any = stuff[2],
    flo2 = stuff[3],
    any2 = stuff[4];

var _any = _slicedToArray(any, 3),
    zodi2 = _any[0],
    zodi3 = _any[1],
    flo1 = _any[2];

var _any2 = _slicedToArray(any2, 3),
    fruit = _any2[0],
    fruit1 = _any2[1],
    fruit2 = _any2[2];

var any3 = any2.map;
var zodiacSigns = [].concat(_toConsumableArray(zodi), _toConsumableArray(zodi1), _toConsumableArray(zodi2), _toConsumableArray(zodi3));
var flowers = [].concat(_toConsumableArray(flo1), _toConsumableArray(flo2));
var food = [].concat(_toConsumableArray(fruit), _toConsumableArray(fruit1), _toConsumableArray(fruit2));