const API_TOKEN='08b36bd4-4230-423f-9857-06ae35b0098d';
const cinemaCatalogWrapper = document.getElementById('cinema-catalog');
cinemaCatalogWrapper.innerHTML='';

const renderFilmBlock = (title,posterUrl,id)=>{ 
    const filmLink=document.createElement('a');
    filmLink.href=`/single/?id=${id}`;

    const filmWrapper=document.createElement('div');
    filmWrapper.classList.add('catalog__image','catalog__image5');

    const filmPoster=document.createElement('img');
    filmPoster.src=posterUrl;
    filmPoster.alt='постер к фильму';

    const filmModal=document.createElement('div');
    filmModal.classList.add('catalog__image-modal');

    const filmName=document.createElement('p');
    filmName.classList.add('catalog__image-name');
    filmName.textContent=title;

    const filmDescription=document.createElement('p');
    filmDescription.classList.add('catalog__image-lorem');
    filmDescription.textContent='Loading...';

    filmModal.append(filmName,filmDescription);
    filmWrapper.append(filmLink);
    filmLink.append(filmPoster,filmModal);
    
    return[filmWrapper,filmDescription];
};
const getBlockFilmsData=async()=>{
    try{
        const answer = await getTopFilms();
        const data = await answer.json();
        const requests=[];
        const filmsLayout=new Map();

        data.films.forEach(async(film) => { 
            const[filmBlock,description] = renderFilmBlock(film.nameRu,film.posterUrlPreview,film.filmId);
            filmsLayout.set(film.filmId,filmBlock);

            requests.push(new Promise(async(resolve)=>{
                try{
                    const answer=await getFilmDetails(film.filmId);
                    const filmData=await answer.json();

                    description.textContent=filmData.filmDescription;
                    if(!filmData.filmDescription){
                        filmsLayout.delete(film.filmId);
                    };
                }catch(error){
                }
                resolve();
            }));
        });
        await Promise.all(requests);

        let i=0;
        for(const[,filmLayout] of filmsLayout){
            cinemaCatalogWrapper.append(filmLayout);

            i++;
            if(i===9){
                break;
            };
        };
           
    } catch(error){
        console.error(error);
    }
    
}
getBlockFilmsData();

