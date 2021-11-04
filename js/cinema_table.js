const films = [
    {
        name:"Человек-паук",
        genres:["фантастика","боевик","приключения"],
    },
    {
        
        name:"Собачья жизнь 2",
        genres:["фэнтези","драма","комедия"],
    },
    {
        
        name:"История игрушек 4",
        genres:["мультфильм","фэнтези","комедия"],
    },
    {
        
        name:"Люди в черном:Интернешнл",
        genres:["фантастика","боевик","комедия"],
    },
    {
        
        name:"Человек-паук2",
        genres:["фантастика","боевик","приключения"],
    },
    {
        
        adult:true,
        name:"Собачья жизнь 3",
        genres:["фэнтези","драма","комедия"],
    },
    {
        
        name:"История игрушек",
        genres:["мультфильм","фэнтези","комедия"],
    },
    {
        
        adult:true,
        name:"Люди в черном",
        genres:["фантастика","боевик","комедия"],
    },
];



let tbody=document.getElementById("table-body");
tbody.innerHTML="";

for(const film of films){
  const filmItem=new Film(film);

  if(filmItem.isNotForAdult()){
    tbody.innerHTML+=filmItem.renderFilmTableItem();
  }
}
