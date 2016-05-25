'use strict'
document.addEventListener ("DOMContentLoaded", function() {  
    var arrowDown, 
        stringArray,
        pageSection, 
        id;

        arrowDown = document.getElementsByClassName('services-arrow');
        arrowDown = [].slice.call(arrowDown); //borrow method forEach from Array
        arrowDown.forEach(function (item) {
        item.addEventListener('click', scrollToNextContent);
    });

    function scrollToNextContent () {  //smooth scroll with jquery animate
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        this.removeEventListener('click', scrollToNextContent);
    }
});