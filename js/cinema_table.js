const films = [
    {
        time:"10:00",
        name:"Человек-паук",
        genres:["фантастика","боевик","приключения"],
    },
    {
        time:"12:00",
        name:"Собачья жизнь 2",
        genres:["фэнтези","драма","комедия"],
    },
    {
        time:"14:00",
        name:"История игрушек 4",
        genres:["мультфильм","фэнтези","комедия"],
    },
    {
        time:"16:00",
        name:"Люди в черном:Интернешнл",
        genres:["фантастика","боевик","комедия"],
    },
    {
        time:"18:00",
        name:"Человек-паук2",
        genres:["фантастика","боевик","приключения"],
    },
    {
        time:"20:00",
        adult:true,
        name:"Собачья жизнь 3",
        genres:["фэнтези","драма","комедия"],
    },
    {
        time:"22:00",
        name:"История игрушек",
        genres:["мультфильм","фэнтези","комедия"],
    },
    {
        time:"00:00",
        adult:true,
        name:"Люди в черном",
        genres:["фантастика","боевик","комедия"],
    },
];

let tbody=document.getElementById("table-body");
tbody.innerHTML="";
const filmHelper={
  getId(){
    return this.id || `${this.name.replaceAll(" ","-")}-${this.time}`;
  },
  getTitle(){
    return this.name;
  },
  getTime(){
    return this.time;
  },
  getGenres(){
    return this.genres.join(", ");
  }
};
function renderFilmTableItem(film){
  return `
  <tr class="table__row">
                  <td class="table__column table__column_check">
                    <input
                      type="checkbox"
                      class="table__check"
                      id="${filmHelper.getId.apply(film)}"
                    />
                    <label for="${filmHelper.getId.apply(film)}">
                      <svg
                        viewBox="0 0 11 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                          fill="white"
                        />
                      </svg>
                    </label>
                  </td>
                  <td class="table__column table__column_time">${filmHelper.getTime.apply(film)}</td>
                  <td class="table__column">${filmHelper.getTitle.apply(film)}</td>
                  <td class="table__column">${filmHelper.getGenres.apply(film)}</td>
                </tr>`;
}
for(let film of films){
    if (!(film.adult===true || film.adult===true)){
      tbody.innerHTML+=renderFilmTableItem(film);
    }
}
