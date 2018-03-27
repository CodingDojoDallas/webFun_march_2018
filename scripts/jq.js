$(document).ready(function() {
    $('button:first-of-type').click(function() {
        var str = $('p:first').text();
        console.log(str);
        str += 'I want to cry :`(';
        console.log(str);
        $('p:first').text(str);

        // $('p:first').text($('p:first').text() + 'I want to cry :`(')
    });
    $('#myP').click(function() {
        $(this).css('background-color', 'blue');
        $(this).fadeOut(1000);
    });
    $('button:last-of-type').click(function() {
        $('#myP').css('background-color', 'blue');
        $('#myP').fadeTo(1000, 0.5);
    });
});
