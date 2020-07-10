/**$(document).ready(function(){

    $(document).on('click', '.load_more', function(){

        var targetContainer = $('.news-list-wrapper'),          //  Контейнер, в котором хранятся элементы
            url =  $('.load_more').attr('data-url');    //  URL, из которого будем брать элементы

        if (url !== undefined) {
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'html',
                success: function(data){

                    //  Удаляем старую навигацию
                    $('.load_more').remove();

                    var elements = $(data).find('.news-item-container'),  //  Ищем элементы
                        pagination = $(data).find('.load_more');//  Ищем навигацию

                    targetContainer.append(elements);   //  Добавляем посты в конец контейнера
                    targetContainer.append(pagination); //  добавляем навигацию следом

                }
            })
        }

    });

});**/

$(document).ready(function(){

    $(document).on('click', '.load_more', function(){

        var targetContainer = $('.news-list-wrapper'), // Контейнер, в котором хранятся элементы
            url = $('.load_more').attr('href'); // URL, из которого будем брать элементы
        $('.load_more').remove();
        if (url !== undefined) {
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'html',
                success: function(data){
// Удаляем старую навигацию

                    var elements = $(data).find('.news-item-container'), // Ищем элементы
                        pagination = $(data).find('.load_more').filter(':last'); // Ищем навигацию


                    targetContainer.append(elements); // Добавляем посты в конец контейнера
                    targetContainer.append(pagination); // добавляем навигацию следом

                }
            })
        }
    });
});
