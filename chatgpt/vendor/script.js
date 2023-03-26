$(document).ready(function() {
		
    $('.chat-container').scrollTop($('.chat-container')[0].scrollHeight);
    $('#message-input').focus();
    $('form').submit(function() {
        $('#loader').show();
    });
    $(document).ajaxComplete(function() {
        $('#loader').hide();
        $('.chat-container').scrollTop($('.chat-container')[0].scrollHeight);
        $('#message-input').focus();
    });
});