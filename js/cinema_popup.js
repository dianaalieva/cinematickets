const prizeForm=document.getElementById('prize-popup');
const openButton=document.querySelector('#popup-open');
const closeButton=document.querySelector('#popup-close');
const nameInputWrapper=document.querySelector('#prize-popup input[name="name"]').parentNode;
const emailInputWrapper=document.querySelector('#prize-popup input[name="email"]').parentNode;
const prizeSelect=document.querySelector('#prize');

const INPUT_ERROR_CLASS='form__popup-error';
const INPUT_FOCUS_CLASS='form__popup-focus';

function popupToggle(){
    prizeForm.classList.toggle('hidden');
}
function initializeField(field){
    const input= field.getElementsByTagName('input')[0];
    const errorText= field.querySelector('.form__popup-error-msg');
    clearError();
    field.classList.remove(INPUT_FOCUS_CLASS);
    input.value='';

    function clearError(){
        field.classList.remove(INPUT_ERROR_CLASS);
        errorText.innerText='';
    };

    input.addEventListener('focus',function(){
        field.classList.add(INPUT_FOCUS_CLASS);
    });
    input.addEventListener('input',function(){
        clearError();
    });
    input.addEventListener('blur',function(){
        if(!input.value){
          field.classList.remove(INPUT_FOCUS_CLASS);
        };
    });

    return{
        focus(){
            input.focus()
        },
        getValue(){
            return input.value
        },
        setError(error){
            errorText.innerText=error;
            field.classList.add(INPUT_ERROR_CLASS);
        },
    };
};

const nameField= initializeField(nameInputWrapper);
const emailField= initializeField(emailInputWrapper);

openButton.onclick=function(){
    popupToggle();
    nameField.focus();
};
closeButton.onclick=popupToggle;

prizeForm.addEventListener('submit', function(event){
    event.preventDefault();

    const nameValue=nameField.getValue();
    const emailValue=emailField.getValue();

    if (!nameValue){
       nameField.setError('не заполнено');
       nameField.focus();
       return;
    }
    if (!emailValue){
        emailField.setError('не заполнено');
        emailField.focus();
        return;
    }
    if(prizeSelect.value==="none"){
        prizeSelect.classList.add(INPUT_ERROR_CLASS);
        return;
    }
    const data ={
        name:nameValue,
        email:emailValue,
        free:prizeSelect.value,
    }

    const url=new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search=new URLSearchParams(data).toString();

    fetch(url.toString());
});

