"use strict"

    $(document).on("click", '.dropdown' , function(){
        $(this).find('ul').toggleClass("dropdown_open");
    });

    /*$('.dropdown').html('<div class="dropdown">'+$('.dropdown').html()+'</div>');*/

    $(document).on('click' , function(e){
        if(!$(e.target).closest('.dropdown').length){
            $('.dropdown_open').removeClass("dropdown_open");
        }
    });
