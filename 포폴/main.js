$(function(){
    var moving=false;
    var num=0;
    console.log(num);
    
    function doLayout(){
        var t=window.innerHeight*-1*num;
    console.log(num);
        $(".section").css({top:t+"px"});
        $(".section .page").css({width:window.innerWidth, height:window.innerHeight}).removeClass("loading");
    }
    
    
    $(document).ready(function(){
        
        doLayout();
        $(".nav .nav--list").eq(num).addClass("on");
        console.log(num);
    
        // 1) click event
        $(".nav .nav--list a").click(function(e){

            e.preventDefault();
            var order=$(this).parent("li").index();
            num=order;
            console.log("num : "+num);
            var t=window.innerHeight*-1*num;
            $(".nav .nav--list").removeClass("on");
            $(".nav .nav--list").eq(num).addClass("on");

            if(!moving){
                moving=true;
                $(".section").animate({top:t}, 500, function(){
                    moving=false;
                    if(num != 0){
                          $('#scrollUpTop').fadeIn();
                    }else{
                         $('#scrollUpTop').fadeOut();
                    }
                });
            }	
                // 화면 맨위로 이동
                $('#scrollUpTop').click(function () {
                    $(".section").animate({top:0}, 500)
                    $(".nav .nav--list").removeClass("on");
                    $(".nav .nav--list").eq(0).addClass("on");
                    $('#scrollUpTop').fadeOut();
                    num=0;
                    num=order;
                    return false;
                })
    console.log(num);		
        });
    
        
        // 2) keyboard event
        $(this).keydown(function(e){

            if(!moving){
                moving=true;
                var t=$(".section").offset().top;
                var h=window.innerHeight;

                if(e.keyCode == 40){  //상단 키보드
                    if(num < 3){
                        num+=1;
                        t-=h;
                    }
                }else if(e.keyCode == 38){   //하단 키보드
                    if(num > 0){
                        num-=1;
                        t+=h;
                    }
                }
                if(num != 0){

                     $('#scrollUpTop').fadeIn();
                }else{
                     $('#scrollUpTop').fadeOut();
                }

                $(".section").animate({top:t+"px"}, 500, function(){
                    moving=false;
                    $(".nav .nav--list").removeClass("on");
                    $(".nav .nav--list").eq(num).addClass("on");
                });
    console.log(num);			
            }	
                // 화면 맨위로 이동
                $('#scrollUpTop').click(function () {
                    $(".section").animate({top:0}, 500)
                    $(".nav .nav--list").removeClass("on");
                    $(".nav .nav--list").eq(0).addClass("on");
                    $('#scrollUpTop').fadeOut();
                    num=0;
                    num=order;
                    return false;
                })
    console.log(num);		
        });

    
        // 3) mouse wheel event
        $(".section").mousewheel(function(e){

            if(!moving){
                moving=true;
                var t=$(this).offset().top;
                var h=window.innerHeight;

                if(e.deltaY == -1){
                    if(num < 3){
                        num+=1;
                        t-=h;
                    }
                }else if(e.deltaY == 1){
                    if(num > 0){
                        num-=1;
                        t+=h;
                    }
                }
                if(num != 0){

                     $('#scrollUpTop').fadeIn();
                }else{

                     $('#scrollUpTop').fadeOut();
                }

                $(".section").animate({top:t+"px"}, 500, function(){
                    moving=false;
                    $(".nav .nav--list").removeClass("on");
                    $(".nav .nav--list").eq(num).addClass("on");
                });
    console.log(num);console.log(num);			
            }	
                // 화면 맨위로 이동
                $('#scrollUpTop').click(function () {
                    $(".section").animate({top:0}, 500)
                    $(".nav .nav--list").removeClass("on");
                    $(".nav .nav--list").eq(0).addClass("on");

                    $('#scrollUpTop').fadeOut();
                    num=0;
                    num=order;
                    return false;
                })
    console.log(num);		

        });
        
        $(".nav--list").hover(function (e) {
            $(".page").addClass("navHovered");
            }, function (e) {
            $(".page").removeClass("navHovered");
        });

        // 4) resize event
        $(window).resize(function(){

            doLayout();
        });


    });
    
    
});