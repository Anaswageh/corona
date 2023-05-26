/*loading window*/
$(window).on('load' , function() {  
    $(".loading-page").fadeOut(5000);  
 });

 $(document).ready(function(){
   
   $(".loading-page").removeClass('.loading-page'); 

    /*navbar*/
    $(".navbar-nav .nav-link").click(function (e) 
    {

    $(".nav-link.active").removeClass('active').css({"color" : "#767f97"});
    $(this).addClass('active').css({"color" : "#5177e6"});

    });
    
   $(window).on("scroll" , function(){
    $(".news-slider").show();
   
        var sticky = $('.sticky'),
         scroll = $(window).scrollTop();
      
        if (scroll >= 100) $(".map").css({
            position:' absolute',
            top: ' 0px',
        });
    
});
 /*up icon*/
$(".circle-up").click(function(){
     $(window).scrollTop(0);
});


 /*sticky menu*/

 var header = $('.menu-sticky');
 var win = $(window);

 win.on('scroll', function() {
     var scroll = win.scrollTop();
     if (scroll < 300) {
         header.removeClass("sticky");
         header.addClass("header2");
     } else {
         header.addClass("sticky");
         header.removeClass("header2");
     }
 });

 $(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $(".header-bottom").fadeIn(1000);
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() < 0) {
        $("header-bottom").css({ "opacity": "0" });
    } else {
        $("header-bottom").css({ "opacity": "1" });
    }
}); 
// sliders

/*frist slider*/
$('.sliding').owlCarousel({
    loop:true,
    margin:20,
    autoWidth:false,
    items:1,
    dots:false,
    slideBy:1,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },

       600:{
            items:1
        }, 

        1000:{
            items:1
         }
}
});
 // slider spread 
$('.slider-spread').owlCarousel({
    loop:true,
    margin:20,
    nav: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },

       600:{
            items:2
        }, 

        1000:{
            items:3 
}

}
});
 // slider updates news
$('.slider-updates-news').owlCarousel({
    loop:true,
    margin:5,
    nav: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },

       600:{
            items:2
        }, 

        1000:{
            items:3 
}

}
});

//count

$('.count').each(function () {
    $(this).prop('Counter',10).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


});







