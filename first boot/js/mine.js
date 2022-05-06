


$(function () {
    
  'use strict';
    
  // Adjust  slider height
 
    
    //featured work shuffle
    $('.featured-work ul li ').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class')=='all'){
            $('.shuffle-imgs .col-sm').css('opacity',1);
            
        }else{
            $('.shuffle-imgs .col-sm').css('opacity','.08');
             $($(this).data('class')).parent().css('opacity',1);
             
        }
    });
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$(window).scroll(function(){
    
    var windowOffset = $(window).scrollTop()
    

if(windowOffset>500)
    {
        $(".btnn").css("display","block")
    }
    else
        {
        $(".btnn").css("display","none")

        }
    
    })





$(".btnn").click(function(){
    
$("html,body").animate({scrollTop:'0'},2000)    
    
})
