'use strict'
document.addEventListener ("DOMContentLoaded", function() {
    var container, 
        feedbackPopUp,
        feedbackMessage,
        okBackToPage,
        feedback;

    feedbackPopUp = document.getElementsByClassName('contacts-map')[0];
    feedback = document.createElement('div');
    feedback.innerHTML = templates.feedbackPopUp;
    feedbackPopUp.appendChild(feedback);
    feedbackMessage = document.getElementsByClassName('feedbackMessage')[0];
    feedbackMessage.addEventListener('click', sendForm);

    function sendForm () {
        while (feedback.firstChild) {
            feedback.removeChild(feedback.firstChild);
        }

        feedback.innerHTML = templates.feedbackThanks;
        okBackToPage = document.getElementsByClassName('okBackToPage')[0];
        this.removeEventListener('click', sendForm);
        okBackToPage.addEventListener('click', showThanksForm);
    }

    function showThanksForm () {
        while (feedback.firstChild) {
            feedback.removeChild(feedback.firstChild);
        }

        feedback.innerHTML = templates.feedbackPopUp;
        feedbackMessage = document.getElementsByClassName('feedbackMessage')[0];
        feedbackMessage.addEventListener('click', sendForm);
        okBackToPage.removeEventListener('click', showThanksForm);
    }
    
});