const feedbackForm=document.getElementById('feedback-form');
const nameInput=document.querySelector('#feedback-form input').parentNode;
const reviewText=document.querySelector('#feedback-form textarea').parentNode;
const seatSelect=document.querySelector('#seat');

const INPUT_ERROR_CLASS='feedback__input-error';
const INPUT_FOCUS_CLASS='feedback__input-focus';
const TEXTAREA_ERROR_CLASS='feedback__textarea-error';
const TEXTAREA_FOCUS_CLASS='feedback__textarea-focus';

function initializeField(field){
    const input= field.querySelector('.form__feedback-input');
    const errorText= field.querySelector('.form__input-error-msg');
    clearError();
    
    field.classList.remove(INPUT_FOCUS_CLASS);
    input.value= '';
    
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

function initializeFields(fields){
    const textarea= fields.querySelector('.form__feedback-textarea');
    const errorsText=fields.querySelector('.form__textarea-error-msg');
    cleanError();

    fields.classList.remove(TEXTAREA_FOCUS_CLASS);
    textarea.value= '';

    function cleanError(){
        fields.classList.remove(TEXTAREA_ERROR_CLASS);
        errorsText.innerText='';
    };

    textarea.addEventListener('focus',function(){
        fields.classList.add(TEXTAREA_FOCUS_CLASS);
    });
    textarea.addEventListener('input',function(){
        cleanError();
    });
    textarea.addEventListener('blur',function(){
        if(!textarea.value){
          fields.classList.remove(TEXTAREA_FOCUS_CLASS);
        };
    });

    return{
        focus(){
            textarea.focus()
        },
        getValue(){
            return textarea.value
        },
        setError(error){
            errorsText.innerText=error;
            fields.classList.add(TEXTAREA_ERROR_CLASS);
        },
    };
};

const inputField= initializeField(nameInput);
const textareaField= initializeFields(reviewText);

feedbackForm.addEventListener('submit', function(event){
    event.preventDefault();

    const nameValue=inputField.getValue();
    const reviewValue=textareaField.getValue();

    if (!nameValue){
        inputField.setError('Имя обязательно');
        inputField.focus();
        return;
    };

    if (!reviewValue){
        textareaField.setError('Отзыв обязателен');
        textareaField.focus();
        return;
    };

    if(seatSelect.value==='none'){
        seatSelect.classList.add(FEEDBACK_ERROR_CLASS);
        return;
    };

    const data ={
        name:nameValue,
        review:reviewValue,
        place:seatSelect.value,
    };
    const url=new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search=new URLSearchParams(data).toString();

    fetch(url.toString());
});