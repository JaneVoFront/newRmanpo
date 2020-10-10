"use strict"

$(document).on("click", '.dropdown' , function(){
    $('.dropdown').find('.dropdown > ul').toggleClass("dropdown_open");
});

/*$('.dropdown').html('<div class="dropdown">'+$('.dropdown').html()+'</div>');*/

$(document).on('click' , function(e){
    if(!$(e.target).closest('body').length){
        $('.dropdown > ul').removeClass("dropdown_open");
    }
});
