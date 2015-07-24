// всегда писать $(document).ready когда надо чтоб функция работала после загрузки страницы
// если это не сделать то код отработает до загрузки страницы
$(document).ready(function(){

// $('.we') обращаемся так же как и в css к классам в тегах в <div class= "we"></div>

    $('.btn').on('click',function(){

        $('.block_abs').css({'background-color':'red'})

    })

 var elem = $('.wqewq .se').find('.we2')


    elem.remove()

    // .remove() удаляет тег с html страницы полностью не вернуть только если перезагрузить страницу
    $('.wqewq .we').remove()
    // .hide() сделает  display:none тоесть скроет элемент на странице
    $('.wqewq .we1').hide()

    //плавное скроет элемент
    $('.wqewq .we1').fadeOut()

    // .show() покажет элемент на странице если он был скрыт если был display:none
    $('.wqewq .we3').show()

    //плавно покажет элемент
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
    //определяет количество класов .se и к 4-му элементу с классом применяет любое дей-е в данном случае стиль
    $('.se').eq(4)
    $('.se').eq(4).css({'color':'red'})



    $('.kont').remove()

    $('.sli').on('click',function(){
        $(".sli .spmahini .sl1").css({'display':'block'}),
        $(".sli .spmahini .sl2").css({'display':'block'}),
        $(".sli .spmahini .sl3").css({'display':'block'}),
        $(".sli .spmahini .sl4").css({'display':'block'}),
        $(".sli .spmahini").css({'display':'block'})

    })


    $('.sli .spmahini .sl1').hover(
        function(){
            $(".sli .spmahini .sl1").css({'color': 'blue'})
        },
        function(){
            $(".sli .spmahini .sl1").css({'color': 'black'})
        }
    )

    $('.sli .spmahini .sl2').hover(
        function(){
            $(".sli .spmahini .sl2").css({'color': 'blue'})
        },
        function(){
            $(".sli .spmahini .sl2").css({'color': 'black'})
        }
    )
    $('.sli .spmahini .sl3').hover(
        function(){
            $(".sli .spmahini .sl3").css({'color': 'blue'})
        },
        function(){
            $(".sli .spmahini .sl3").css({'color': 'black'})
        }
    )

    $('.sli .spmahini .sl4').hover(
        function(){
            $(".sli .spmahini .sl4").css({'color': 'blue'})
        },
        function(){
            $(".sli .spmahini .sl4").css({'color': 'black'})
        }
    )

    $('.sli .spmahini').hover(
        function(){
            $(".sli .spmahini ").css({'display':'block '})
        },
        function(){
            $('.sli .spmahini').css({'display':'none'})
        }
    )

    //при наведении на кнопку
    $('.kn5').hover(
        //ничего не происходит, пустая функция,
        function(){
            },
        //а когда убираем курсор с объекта  поле исчезает
        function(){
            //$('.kn5 .kn_spisok').css({'display':'none'}) //быстро исчезнет
         }

    )
    //создаем переменную ff
    //var ff= $('.kn5, .kn_ka')
    //
    ////с помощю переменной делаем функцию hover
    //ff.hover(
    //    function(){ //цвет при наведении на конкретный элемент this
    //        $(this).css({'background-color': 'rgb(16, 126, 55)'})
    //    },
    //    function(){ //цвет когда отвели крсор
    //        $(this).css({ 'background-color': 'rgb(203, 240, 216)'})
    //    }
    //)
    $(document).on("click",function(){

        $('.kn_spisok').removeClass('open')
        $('.pusk ul').removeClass('open')

    })
    //когда кликаем проверяем
    $('.kn5, .kn_ka').on('click', function(e){

        $(this).parent().find('.open').removeClass('open')
        $('.kn_spisok',this).first().addClass('open')
        e.stopPropagation()
       })


    $('.pusk, li').on('click', function(e){

        $(this).parent().find('.open').removeClass('open')
        $('ul',this).first().addClass('open')
        e.stopPropagation()
    })

})

