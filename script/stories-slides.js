$(document).ready(function () {
    var whatSlider = $('.stories-slider');

    whatSlider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        prevArrow: '.stories-navigation-prev',
        nextArrow: '.stories-navigation-next',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                    infinite: true,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    variableWidth: false,
                    centerMode: true,
                    swipe: false, // Отключаем стандартный свайп Slick Slider
                }
            }
        ]
        
    });
    // Добавление обработчика для начала свайпа
    $('.stories-slider').on('touchstart', function (event) {
        touchStartX = event.originalEvent.touches[0].clientX;
        touchStartY = event.originalEvent.touches[0].clientY;
    });

    // Добавление обработчика для завершения свайпа
    $('.stories-slider').on('touchend', function (event) {
        var touchEndX = event.originalEvent.changedTouches[0].clientX;
        var touchEndY = event.originalEvent.changedTouches[0].clientY;

        var deltaX = touchStartX - touchEndX;
        var deltaY = touchStartY - touchEndY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Если горизонтальное движение больше, чем вертикальное, выполните действия свайпа
            if (deltaX > 0) {
                $('.stories-slider').slick('slickNext'); // Свайп влево
            } else {
                $('.stories-slider').slick('slickPrev'); // Свайп вправо
            }
        }
    });
});
