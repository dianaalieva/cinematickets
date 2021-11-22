const feedbackForm=document.getElementById('feedback-form');
const feedbackName=document.querySelector('.form__input');
const feedbackSeat=document.querySelector('.form__feedback-seat');
const feedbackReview=document.querySelector('.form__textarea');

const FEEDBACK_ERROR_CLASS=('feedback__error');
const FEEDBACK_FOCUS_CLASS=('feedback__focus');


function initializeFeedbackField(feedbackMean){
    const fInput=feedbackMean.querySelector('.feedbacks');
    const fErrorMsg=feedbackMean.querySelector('.form__error-msg');
 
    function fRemError(){
        feedbackMean.classList.remove(FEEDBACK_ERROR_CLASS);
        fErrorMsg.innerText='';
    };
    fRemError();
    function fRemFocus(){
        feedbackMean.classList.remove(FEEDBACK_FOCUS_CLASS);
        fInput.value='';
    };

    fInput.addEventListener('focus',function(){
        feedbackMean.classList.add(FEEDBACK_FOCUS_CLASS);
        
    });
    fInput.addEventListener('input',function(){
        fRemError();
    });
    fInput.addEventListener('blur',function(){
        if(!fInput.value){
            fRemFocus();
        };
    });

    return{
        focus(){
            fInput.focus() 
        },
        getValue(){
            return fInput.value
        },
        setError(fError){
            fErrorMsg.innerText=fError;
            feedbackMean.classList.add(FEEDBACK_ERROR_CLASS);
        },
    };
};

const feedbackField1= initializeFeedbackField(feedbackName);
const feedbackField2= initializeFeedbackField(feedbackReview);
const feedbackFields=[feedbackField1,feedbackField2];

feedbackForm.addEventListener('submit', function(event){
    event.preventDefault();
    feedbackFields.forEach(el=>{
        const feedbackValue=el.getValue();

        if (!feedbackValue){
           el.setError('не заполнено');
           el.focus();
           return;
        }
    });

    if(feedbackSeat.value==="none"){
        feedbackSeat.classList.add(FEEDBACK_ERROR_CLASS);
        return;
    }
    const fData ={
        name:feedbackName.value,
        review:feedbackReview.value,
        seat:feedbackSeat.value,
    };
    const fUrl=new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    fUrl.search=new URLSearchParams(fData).toString();

    fetch(fUrl.toString());
});



