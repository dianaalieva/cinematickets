function getTime(max,min){
    return Math.floor(Math.random() * (max - min + 1)) + min
};

const getKinopoiskApiData=(url)=>{
    return fetch (url, { 
        headers:{
            accept: 'application/json',
            'X-API-KEY': '08b36bd4-4230-423f-9857-06ae35b0098d'
        }
    });
};
const getTopFilms=()=>{
    return getKinopoiskApiData('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1');
};
const getFilmDetails=(id)=>{
    return getKinopoiskApiData(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`);
};