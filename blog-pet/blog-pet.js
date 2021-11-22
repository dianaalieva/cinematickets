const postsList = document.getElementById('posts-list');

addForm.addEventListener('submit',function(event){
    event.preventDefault();

    const li=createPost(post.value);
    post.value='';
    postsList.append('li');
});
function handleDelBtnClick(){
    this.parentNode.remove();
};


function createPost(text) {
    const li=document.createElement('li');
    li.classList.add('post');
    li.id=`${id}`;

    const delBtn=document.createElement('button');
    delBtn.classList.add('post__btn__delete');
    delBtn.textContent='X';

    delBtn.addEventListener('click',handleDelBtnClick);

    const link1=document.createElement('a');
    link1.href=`${link1}`;
    const bHeader=document.createElement('h4');
    bHeader.classList.add('post__header');
    bHeader.textContent=`${bHeader}`;
    link1.append(bHeader);

    const bPoster=document.createElement('div');
    bPoster.classList.add('post__header');
    const link2=document.createElement('a');
    link2.href=`${link2}`;
    const img=document.createElement('img');
    img.src=`${img}`;
    link2.append(img);
    bPoster.append(link2);

    const testWrapper=document.createElement('div');
    testWrapper.classList.add('post__body')
    testWrapper.textContent=`${text}`;

    li.append(link1,link2,bHeader,bPoster,img,testWrapper,delBtn);
    return li;
    // return `
    //     <li class="post" id="post-${id}">
    //         <button class="post__btn__delete">X</button>
    //         <a
    //             href="${link}">
    //             <h4 class="post__header">${header}</h4>
    //         </a>
    //         <div class="post__header">
    //             <a
    //                 href="${link}">
    //                 <img src="${poster}" />
    //             </a>
    //         </div>
    //         <div class="post__body">
    //             ${text}
    //         </div>
    //     </li>
    // `
};

// async function init() {
//     postsList.innerHTML = '';
//     const responce = await fetch('http://inno-ijl.ru/multystub/stc-21-03/posts', {
//         cors: 'no-cors'
//     });
//     const posts = await responce.json();

//     for (let i = 0; i < posts.body.length; i++) {
//         const post = createPost(posts.body[i]);
        
//         postsList.innerHTML += post;
//     }
// }

// init();
