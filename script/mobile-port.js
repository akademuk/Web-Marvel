$(document).ready(function () {
    var touchStartX = 0;
    var touchStartY = 0;

    // Инициализация Slick Slider
    $('.mobile-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        variableWidth: true,
        dots: false,
        centerMode: true,
        prevArrow: $('.mobile-slider-prev'),
        nextArrow: $('.mobile-slider-next'),
    });

    // Добавление обработчика для начала свайпа
    $('.mobile-slider').on('touchstart', function (event) {
        touchStartX = event.originalEvent.touches[0].clientX;
        touchStartY = event.originalEvent.touches[0].clientY;
    });

    // Добавление обработчика для завершения свайпа
    $('.mobile-slider').on('touchend', function (event) {
        var touchEndX = event.originalEvent.changedTouches[0].clientX;
        var touchEndY = event.originalEvent.changedTouches[0].clientY;

        var deltaX = touchStartX - touchEndX;
        var deltaY = touchStartY - touchEndY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Если горизонтальное движение больше, чем вертикальное, выполните действия свайпа
            if (deltaX > 0) {
                $('.mobile-slider').slick('slickNext'); // Свайп влево
            } else {
                $('.mobile-slider').slick('slickPrev'); // Свайп вправо
            }
        }
    });
});