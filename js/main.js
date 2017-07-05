
(function($) {
    $(window).load(function() {
        tabs();
    });

    function tabs () {
        $(".tab-content .tab").hide(); // Скрытое содержимое
        $("#tabs li:first").attr("id","current"); // Какой таб показать первым
        $(".tab-content .tab:first").fadeIn(); // Показ первого контента таба
        $('#tabs a').click(function(e) {
            e.preventDefault();
            $(".tab-content .tab").hide(); //Скрыть всё содержимое
            $("#tabs li").attr("id",""); //Сброс идентификаторов
            $(this).parent().attr("id","current"); // Активация идентификаторов
            $('#' + $(this).attr('title')).fadeIn(); // Показать содержимое текущей вкладки
        });
    }

})(jQuery);