$(document).ready(function() {
    $('.answer').hide();
    $('.main h2').click(function() {
        var $answer = $(this).next('.answer');
        if ($answer.is(':hidden')) {
            $answer.slideDown();
            $(this).addClass('close2');
        } else {
            $answer.fadeOut();
            $(this).removeClass('close2');
        }
    });
});
