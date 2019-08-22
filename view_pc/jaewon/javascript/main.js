$(function(){
    $('.hamburger__menu').on('click', function(e){
        $(this).find('.menu').toggleClass('active');
    });
});