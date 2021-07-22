


$(document).ready(function(){

    $nav =$('.nav');
    $toggleCollapse =$('.toggle-collapse');


    // clock event on ntogge menu

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });

    // owl cearousel for blog post
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        nav:true,
        responsive:{
            0:{
                items:1,
                
            },
            300:{
                items:1,
                
            },
            560:{
                items:2,
                
            },
            925:{
                items:3,
               
            }
        },
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
         
    }); 


    // click to scroll up function 
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },2500);
    })
    // AOS ANIMATION 
    AOS.init();
}) 