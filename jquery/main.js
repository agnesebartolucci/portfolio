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