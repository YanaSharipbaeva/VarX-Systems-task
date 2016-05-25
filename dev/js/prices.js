'use strict'
document.addEventListener ("DOMContentLoaded", function() {
    var orderPopUp,
        orderPopUpWrapper,
        orderRussian,
        orderForKids,
        orderMassage,
        backToPage,
        orderTay,
        container,
        title,
        titleText;

    container = document.createElement('div');
    container.classList.add('order-popup-wrapper');

    orderTay = document.getElementsByClassName('order-tay')[0];
    orderRussian = document.getElementsByClassName('order-russian')[0];
    orderForKids = document.getElementsByClassName('order-for-kids')[0];
    
    orderTay.addEventListener('click', showOrderTay);
    orderRussian.addEventListener('click', showOrderRussian);
    orderForKids.addEventListener('click', showOrderForKids);
   

    function showOrderTay () { 
        showOrderPopUp(templates.titleTay); 
    }

    function showOrderRussian () {
        showOrderPopUp(templates.titleRussian);
    }

    function showOrderForKids () {
        showOrderPopUp(templates.titleKids); 
    }

    function showOrderPopUp (title) {
        orderPopUp = document.querySelector('main');
        orderPopUp.appendChild(container);
        orderPopUpWrapper = document.getElementsByClassName('order-popup-wrapper')[0];
        orderPopUpWrapper.innerHTML = templates.orderPopUp;
        titleText = document.getElementsByClassName('order-popup__title')[0];
        titleText.innerHTML = title;
        orderMassage = document.getElementsByClassName('orderMassage')[0];
        orderMassage.addEventListener('click', showThanksPopUp);
    }

    function showThanksPopUp () {
        clearPopUpContainer(orderPopUpWrapper);
        orderMassage.removeEventListener('click', showThanksPopUp); 
        orderPopUpWrapper = document.getElementsByClassName('order-popup-wrapper')[0];
        orderPopUpWrapper.innerHTML = templates.orderThanks;  
        backToPage = document.getElementsByClassName('backToPage')[0];  
        backToPage.addEventListener('click', removePopUp);
        this.removeEventListener('click', showThanksPopUp);
    }

    function removePopUp () {
        clearPopUpContainer(orderPopUpWrapper);
        this.removeEventListener('click', removePopUp);
        orderPopUpWrapper.remove();
    }

    function clearPopUpContainer () {
        while (orderPopUpWrapper.firstChild) {
            orderPopUpWrapper.removeChild(orderPopUpWrapper.firstChild);
        }
    }
});