$(document).ready(function () {
    $(".accordion").on("click", ".heading", function () {
        var $accordionContainer = $(this).closest(".accordion-container");

        // Проверяем, имеет ли текущий заголовок класс "active"
        var isActive = $(this).hasClass("active");

        // Скрываем все содержимое
        $(".contents").slideUp(300);

        // Удаляем класс "active" со всех заголовков
        $(".heading").removeClass("active");

        // Удаляем класс "active" со всех accordion-container
        $(".accordion-container").removeClass("active");

        if (!isActive) {
            // Показываем содержимое и добавляем класс "active" только к текущему заголовку и его accordion-container
            $(this).next().slideDown();
            $accordionContainer.addClass("active");
            $(this).addClass("active");
        }
    });
});