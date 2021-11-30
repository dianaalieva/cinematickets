const singleInfo=new URLSearchParams(location.search);
const singleId=singleInfo.get('id');
const getSingleData=async()=>{
    const singleData=await getFilmDetails(singleId).then(d => d.json());
    const singleHeader=document.getElementById('single__header');
    const singleDesc=document.getElementById('single__desc');
    const singlePoster=document.getElementById('single__poster');

    singleHeader.textContent=singleData.nameRu;
    singleDesc.textContent=singleData.description;
    singlePoster.src=singleData.posterUrl;
};

const SINGLE_STAR_SELECTED='rating__star-selected';
const SINGLE_HEART_LIKED='single__heart-leked';
const singleLikes=document.getElementById('single__likes');
const stars=document.querySelectorAll('.single__rating-star');

const getSingleMetaInfo=async()=>{
    const { body:singleInfo }= await fetch (`http://inno-ijl.ru/multystub/stc-21-03/film/${singleId}`).then( d => d.json());
    
    const singleViews=document.getElementById('single__views');
    
    singleViews.textContent=`${singleInfo.views} Views`;
    singleLikes.textContent=`${singleInfo.likes} Likes`;
    singleLikes.dataset.likesCount=singleInfo.likes;

    const ratingNumber=singleInfo.ratings.reduce((a,b) => +a + +b, 0)/singleInfo.ratings.length
    const rating=String(Math.round(ratingNumber*10)/10).padEnd(3,'.0');
    const ratingScore=document.getElementById('single__rating-score');
    ratingScore.textContent=rating;

    for (let i = 0;i < stars.lengt;i++) {
        const star = stars[i];
        if (i>=ratingNumber){
            star.classList.remove(SINGLE_STAR_SELECTED)
        } else{
            star.classList.add(SINGLE_STAR_SELECTED)
        }
    };
};

const likeHeart=document.getElementById('single__heart');
const LOCAL_STORAGE_LIKE=`film-like-${singleId}`;

if (localStorage.getItem(LOCAL_STORAGE_LIKE)){
    likeHeart.classList.add(SINGLE_HEART_LIKED)
} else{
    likeHeart.addEventListener('click',()=>{
        if(!likeHeart.classList.contains(SINGLE_HEART_LIKED)){
            fetch (`http://inno-ijl.ru/multystub/stc-21-03/film/${singleId}/like`,{   
                
                method:'POST',
            });
            likeHeart.classList.add(SINGLE_HEART_LIKED);
            const currentLikesCount=Number(singleLikes.dataset.likesCount);
            singleLikes.textContent=`${currentLikesCount+1} Likes`;
    
            localStorage.setItem(LOCAL_STORAGE_LIKE,true)
        } 
    });
};

$('.block__div1').on('click','.single__rating-star',function(){
    const rating= +this.dataset.ratingValue;
    fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${singleId}/rating`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({rating}),
    }).then(getSingleMetaInfo); 
})

getSingleData();
getSingleMetaInfo();
