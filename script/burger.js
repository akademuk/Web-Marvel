$('.burger').click(function() {
    $('.menu').addClass('open_menu');
    $('.body').addClass('active');
    $('.burger').addClass('change');
});

$('.close').click(function() {
    $('.menu').removeClass('open_menu');
    $('.body').removeClass('active');
    $('.burger').removeClass('change');
});

$('.burgerClose').click(function() {
    $('.menu').removeClass('open_menu');
    $('.body').removeClass('active');
    $('.burger').removeClass('change');
});

