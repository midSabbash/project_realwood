$('#slide-11').click(function () {
    var id = $(this).attr('id');

    var slideTarget = $('[data-aim]')

    switch (id) {


        case 'slide-11':
            $(this).addClasss('current-mini-slide');
            $('[data-aim="slide1"]').addClass('current-slide');
            break;

        case 'slide-22':
            $(this).addClasss('current-slide');
            break;

        case 'slide-33':
            $(this).addClass('current-slide');
            break
    }
});