'use strict'
document.addEventListener ("DOMContentLoaded", function() {
    var galleryImage,
        imagePopUpTemplate,
        imagePopUpWrapper,
        closePopUp,
        container,
        imagePopUp,
        image;

    container = document.createElement('div');
    container.classList.add('order-popup-wrapper');
    galleryImage = document.querySelectorAll('img');

    //borrow method forEach from Array
    var args = [].slice.call(galleryImage);
        args.forEach(function (item) {
        item.addEventListener('click', showImage);
    });

    function showImage () {
        imagePopUp = document.querySelector('main');
        imagePopUp.appendChild(container);
        imagePopUpWrapper = document.getElementsByClassName('order-popup-wrapper')[0];
        imagePopUpTemplate =  templates.imagePopUp.replace('ImageId', this.id);
        imagePopUpTemplate.replace('ImageId', this.id);
        imagePopUpWrapper.innerHTML = imagePopUpTemplate;
        closePopUp = document.getElementsByClassName('closePopUp')[0];
        closePopUp.addEventListener('click', removeImage);
    }

    function removeImage () {
        container.remove();
        this.removeEventListener('click', removeImage);
    }
});