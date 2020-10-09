"use strict"


    $(document).on("click", '.dropdown a' , function(){
        $(this).closest('.dropdown').toggleClass("dropdown_open");
    });

    $('.dropdown').html('<div class="dropdown">'+$('.dropdown').html()+'</div>');

    $(document).on('click' , function(e){
        if(!$(e.target).closest('body').length){
            $('.dropdown').removeClass("dropdown_open");
        }
    });
