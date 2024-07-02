jQuery(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $('.loadermask').fadeOut('slow', function () {
            });
        },0);

    });  
});

$(document).ready(function() {    
            $("#mieigattini").hover(function() {
                $("#gattini").css("visibility", "visible");
            }, function() {
                $("#gattini").css("visibility", "hidden");
            });
});