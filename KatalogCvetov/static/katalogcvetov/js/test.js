// всегда писать $(document).ready когда надо чтоб функция работала после загрузки страницы
// если это не сделать то код отработает до загрузки страницы
$(document).ready(function(){

// $('.we') обращаемся так же как и в css к классам в тегах в <div class= "we"></div>

    $('.btn').on('click',function(){

        $('.block_abs').css({'background-color':'red'})

    })



 var elem = $('.wqewq .se').find('.we2')


    elem.remove()

    // .remove() удаляет тег с html страницы полностью
    $('.wqewq .we').remove()
    // .hide() сделает  display:none тоесть скроет элемент на странице
    $('.wqewq .we1').hide()

     $('.wqewq .we1').fadeOut()

    // .show() покажет элемент на странице если он был скрыт если был display:none
    $('.wqewq .we3').show()

    $('.wqewq .we1').fadeIn()



    // .find() ищет селекторы (как в css) и применяет любые действия
    $('.wqewq .se').find('.we2').hide().remove()


    $('.wqewq .se .we2')


//----------Вставка КОДА ----------------------------------
    // .html() вставляеит код в ".sp" любой html код и заменяет содержимое
    $(".sp").html("<a href='/'>Привет</a>");
    // .text() добавляет код в ".sp" и заменяет содержимое
    $(".sp").text("Привет");

    // .append() вставляет но не заменяет а добавляет после содержимого
    $(".sp").append("<a href='/'>Привет</a>");
    // .prepend() вставляет но не заменяет а добавляет перед содержимым
    $(".sp").prepend("<a href='/'>Привет</a>");

    // .before() добавляет код после ".sp"
    $(".sp").before("<a href='/'>Привет</a>");
    // .after() добавляет код до ".sp"
    $(".sp").after("<a href='/'>Привет</a>");
//------------------------------------------------------------------------


    //----------Поиск элементов ----------------------------------

     $('.se').find('.se1')
    // .parent() переходит к родителю
    $('.se').parent()
    $('.se').parent('.se1')

    $('.se').parents('.se1')

    $('.se').parent().find('.erw')
    // .next() переходит к следующему
    $('.se').next().remove()

     $('.se').eq(4)


})

