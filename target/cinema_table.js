"use strict";

var films = [{
  time: getTime,
  name: "Человек-паук",
  genres: ["фантастика", "боевик", "приключения"]
}, {
  time: getTime,
  name: "Собачья жизнь 2",
  genres: ["фэнтези", "драма", "комедия"]
}, {
  time: getTime,
  name: "История игрушек 4",
  genres: ["мультфильм", "фэнтези", "комедия"]
}, {
  time: getTime,
  name: "Люди в черном:Интернешнл",
  genres: ["фантастика", "боевик", "комедия"]
}, {
  time: getTime,
  name: "Человек-паук2",
  genres: ["фантастика", "боевик", "приключения"]
}, {
  time: getTime,
  adult: true,
  name: "Собачья жизнь 3",
  genres: ["фэнтези", "драма", "комедия"]
}, {
  time: getTime,
  name: "История игрушек",
  genres: ["мультфильм", "фэнтези", "комедия"]
}, {
  time: getTime,
  adult: true,
  name: "Люди в черном",
  genres: ["фантастика", "боевик", "комедия"]
}];
var tbody = document.getElementById("table-body");
tbody.innerHTML = "";

for (var _i = 0, _films = films; _i < _films.length; _i++) {
  var film = _films[_i];
  var filmItem = new Film(film);

  if (filmItem.isNotForAdult()) {
    tbody.innerHTML += filmItem.renderFilmTableItem();
  }
}
//# sourceMappingURL=cinema_table.js.map