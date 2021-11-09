"use strict";

var cinemaCatalogWrapper = document.getElementById('cinema-catalog');
cinemaCatalogWrapper.innerHTML = '';
fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1', {
  headers: {
    accept: 'application/json',
    'X-API-KEY': '08b36bd4-4230-423f-9857-06ae35b0098d'
  }
}).then(function (answer) {
  return answer.json();
}).then(function (data) {
  data.films.forEach(function (film) {
    var filmDescrId = "catalog-descrip-".concat(film.filmId);
    cinemaCatalogWrapper.innerHTML += "\n        <div class=\"catalog__image catalog__image5\">\n            <img class=\"catalog__image-img\" src='".concat(film.posterUrlPreview, "'/>\n            <div class=\"catalog__image-modal\">\n              <p class=\"catalog__image-name\">").concat(film.nameRu, "</p>\n              <p class=\"catalog__image-lorem\" id=\"").concat(filmDescrId, "\"></p>                \n            </div>\n        </div>\n        ");
    fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/".concat(film.filmId), {
      headers: {
        accept: 'application/json',
        'X-API-KEY': '08b36bd4-4230-423f-9857-06ae35b0098d'
      }
    }).then(function (answer) {
      return answer.json();
    }).then(function (filmData) {
      var descElement = document.getElementById(filmDescrId);
      descElement.innerText = filmData.description;

      if (!filmData.description) {
        cinemaCatalogWrapper.removeChild(descElement.parentNode.parentNode);
      }
    });
  });
});