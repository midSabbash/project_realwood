//form styler

(function ($) {
    $(function () {
        $('select').styler();
    });
})(jQuery);


$('[data-aim="slide"]').on('click', function () {

    var attrId = $(this).attr('id');

    switch (attrId) {

        case 'item-1':
            $(this).addClass('current-sm-slide');
            $('#item-2').removeClass('current-sm-slide');
            $('#item-3').removeClass('current-sm-slide');
            $('#slide-1').addClass('current-slide');
            $('#slide-2').removeClass('current-slide');
            $('#slide-3').removeClass('current-slide');
            break;

        case 'item-2':
            $(this).addClass('current-sm-slide');
            $('#item-1').removeClass('current-sm-slide');
            $('#item-3').removeClass('current-sm-slide');
            $('#slide-2').addClass('current-slide');
            $('#slide-1').removeClass('current-slide');
            $('#slide-3').removeClass('current-slide');
            break;

        case 'item-3':
            $(this).addClass('current-sm-slide');
            $('#item-1').removeClass('current-sm-slide');
            $('#item-2').removeClass('current-sm-slide');
            $('#slide-3').addClass('current-slide');
            $('#slide-1').removeClass('current-slide');
            $('#slide-2').removeClass('current-slide');
            break
    }
});
