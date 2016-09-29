$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data);
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);
            }
        });

      return false;
    });
    $("form").submit(function(){
//        setTimeout(function() {
//             location.reload();
//        }, 12000);
        var formNewID = $(this).attr('id');
        var formNewAll = $('#' + formNewID);
        console.log(formNewAll);
        console.log(formNewID);
//        document.getElementById(formNewID).reset();
        $(formNewAll)[0].reset();
    });
});

