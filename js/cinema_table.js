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
];

let tbody=document.getElementById("table-body");
console.log(tbody.innerHTML);
tbody.innerHTML="";
for(let index=0;index<films.length;index++){
    tbody.innerHTML+=`
    <tr class="table__row">
                    <td class="table__column table__column_check">
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
                    </td>
                    <td class="table__column table__column_time">${films[index].time}</td>
                    <td class="table__column">${films[index].name}</td>
                    <td class="table__column">${films[index].genres.join(', ')}</td>
                  </tr>`;
}
