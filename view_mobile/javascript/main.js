$(function(){
    $('.hamburger__menu').on('click', function(e){
        $(this).toggleClass('active');
        $(this).find('.menu').toggleClass('active');
    });

    // $.ajax({
    //     type: 'GET',
    //     url: 'data/main.json' 
    // }).done(function(data) {
    // for (var i = 0; i < 3; i++){
    //     var template = '<div class="col-md-4">';
    //         template += '<div class="card">';
    //         template +=	'<img class="card-img-top" src="'+data[i].img+'" alt="Card image cap">';
    //         template +=	'<div class="card-body">';
    //         template += '<h5 class="card-title">'+data[i].title+'</h5>';
    //         template += '<p class="card-text">'+data[i].text+'</p>';
    //         template += '<a href="#" class="btn btn-primary">Go somewhere</a>';
    //         template += '</div> </div> </div>';

    //     $('.load').append(template);
    // }	
    // });

});