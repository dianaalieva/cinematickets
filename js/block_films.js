const cinemaCatalogWrapper = document.getElementById('cinema-catalog');
cinemaCatalogWrapper.innerHTML='';
fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1',{
    headers:{
        accept: 'application/json',
        'X-API-KEY': '08b36bd4-4230-423f-9857-06ae35b0098d'
    }
})
.then(answer => answer.json())
.then(data => {
    
    data.films.forEach(film => {
        const filmDescrId = `catalog-descrip-${film.filmId}`;
        cinemaCatalogWrapper.innerHTML += `
        <div class="catalog__image catalog__image5">
            <img class="catalog__image-img" src='${film.posterUrlPreview}'/>
            <div class="catalog__image-modal">
              <p class="catalog__image-name">${film.nameRu}</p>
              <p class="catalog__image-lorem" id="${filmDescrId}"></p>                
            </div>
        </div>
        `

        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${film.filmId}`,{
            headers:{
               accept: 'application/json',
               'X-API-KEY': '08b36bd4-4230-423f-9857-06ae35b0098d'
            }
        })
        .then(answer=>answer.json())
        .then(filmData=>{
            const descElement = document.getElementById(filmDescrId);
            descElement.innerText = filmData.description

            if (!filmData.description) {
                cinemaCatalogWrapper.removeChild(descElement.parentNode.parentNode)
            }
        })
    })
});