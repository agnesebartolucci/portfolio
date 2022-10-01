//jQuery( function( $ ) {
//	$( '.loadermask' ).delay( '750' ).fadeOut( 'slow' );
//} );

//$(window).load(function() {
//    $('.loadermask').hide();
//  });

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

$(document).ready(function() {    
            $("#eddiemunson").hover(function() {
                $("#eddie").css("visibility", "visible");
            }, function() {
                $("#eddie").css("visibility", "hidden");
            });
});