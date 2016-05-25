var templates = (function () {
    var thanksPopUp,
        orderPopUp,
        titleRussian,
        contacts,
        feedbackPopUp,
        titleKids,
        titleTay,
        imagePopUp;

    //template of order modal-window
    orderPopUp = '<div role="order-form" class="order-popup-container popup-container">'+
                        '<div class="order-popup__title"></div>' +
                        '<input type="text" placeholder = "Как Вас зовут?" name="name" class="order-popup__field">'+
                        '<input type="text" placeholder = "E-mail" name="name" class="order-popup__field">'+
                        '<input type="text" placeholder = "Номер телефона" name="name" class="order-popup__field"> '+
                        '<a href="#" role=button class="content-button__link orderMassage">Заказать массаж</a>'+
                    '</div>';

    //template of thanks-modal-window
    orderThanks = '<div role="order-form" class="thanks-popup-container popup-container">'+
                        '<div class="order-popup__title thanks-popup__title">Ваш заказ</br>принят!</div>'+
                        '<div class="thanks-popup__text">В близжайшее время мы свяжемся с Вами.</div>' +
                        '<a href="#" role=button class="content-button__link backToPage">Вернуться к услугам</a>' +
                    '</div>';
                    
    titleTay = 'ЗАКАЗАТЬ</br>ТАЙСКИЙ МАССАЖ';
    titleRussian = 'ЗАКАЗАТЬ</br>РУССКИЙ МАССАЖ';
    titleKids = 'ЗАКАЗАТЬ</br>МАССАЖ ДЛЯ ДЕТЕЙ';

    //template of feedback modal-window
    feedbackPopUp = '<div role="feedback-form" class="feedback-popup-container popup-container">'+
                        '<div class="feedback-popup__title">Оставте свой</br> отзыв</div>' +
                        '<input type="text" placeholder = "Как Вас зовут?" name="name" class="feedback-popup__field">'+
                        '<input type="text" placeholder = "E-mail" name="name" class="feedback-popup__field">'+
                        '<textarea   name="message" class="feedback-popup__field feedback-popup__textarea">Текст сообщения</textarea> '+
                        '<a href="#" role=button class="content-button__link feedbackMessage">Отправить</a>'+
                    '</div>';

    //template of thanks-modal-window        
    feedbackThanks = '<div role="feedback-form" class="feedback-thanks-container ">'+
                        '<div class="thanks-popup__text">Сообщение</br>отправленно</br>успешно!</div>' +
                        '<div role=button class="content-button__link okBackToPage"></div>' +
                    '</div>';

    imagePopUp = '<div class="image-wrapper ">'+
                        '<div role=button class="closePopUp">x</div>'+
                        '<img src="../images/' + 'ImageId' + '.jpg">' +
                    '</div>';

    return {
        orderPopUp: orderPopUp,
        orderThanks: orderThanks,
        titleTay: titleTay,
        titleRussian: titleRussian,
        titleKids: titleKids,
        feedbackPopUp: feedbackPopUp,
        feedbackThanks: feedbackThanks,
        imagePopUp: imagePopUp
    }
    
})();