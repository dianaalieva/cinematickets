const prizeForm=document.getElementById('prize-popup');
const openButton=document.querySelector('#popup-open');
const closeButton=document.querySelector('#popup-close');
const nameInputWrapper=document.querySelector('.form__popup');
const emailInputWrapper=document.querySelector('.form__popup2');
const prizeSelect=document.querySelector('#prize');

const POPUP_ERROR_CLASS='form__popup-error';
const POPUP_FOCUS_CLASS='form__popup-focus';


function popupToggle(){
    prizeForm.classList.toggle('hidden');
}
function initializeField(popupInput){
    const pInput= popupInput.getElementsByTagName('input')[0];
    const popupErrorText= popupInput.querySelector('.form__popup-error-msg');

    function pRemError(){
        popupInput.classList.remove(POPUP_ERROR_CLASS);
        popupErrorText.innerText='';
    };
    pRemError();
    function pRemFocus(){
        popupInput.classList.remove(POPUP_FOCUS_CLASS);
        pInput.value='';
    };
    

    pInput.addEventListener('focus',function(){
        popupInput.classList.add(POPUP_FOCUS_CLASS);
        
    });
    pInput.addEventListener('input',function(){
        pRemError();
    });
    pInput.addEventListener('blur',function(){
        if(!pInput.value){
            pRemFocus();
        };
    });

    return{
        focus(){
            pInput.focus() 
        },
        getValue(){
            return pInput.value
        },
        setError(error){
            popupErrorText.innerText=error;
            popupInput.classList.add(POPUP_ERROR_CLASS);
        },
    };
};

const field1= initializeField(nameInputWrapper);
const field2= initializeField(emailInputWrapper);
const fields=[field1,field2];

openButton.onclick=function(){
    popupToggle();
    field1.focus();
};

closeButton.onclick=function(){
    popupToggle();
    document.getElementById('prize-popup')[0].reset();
};

prizeForm.addEventListener('submit', function(event){
    event.preventDefault();
    fields.forEach(el=>{
        const popupValue=el.getValue();

        if (!popupValue){
           el.setError('не заполнено');
           el.focus();
           return;
        }
    });

    const emailValue=field2.getValue();

    if(!/^[\w]{3,20}@[a-z 0-9]{4,8}|.[a-z]{2,3}$/.test(emailValue)){
        field2.setError('некорректный email');
        field2.focus();
        return;
    };
    
    if(prizeSelect.value==="none"){
        prizeSelect.classList.add(POPUP_ERROR_CLASS);
        return;
    };
    const data ={
        name:nameInputWrapper.value,
        email:emailInputWrapper.value,
        free:prizeSelect.value,
    };

    const url=new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search=new URLSearchParams(data).toString();

    fetch(url.toString());
});

