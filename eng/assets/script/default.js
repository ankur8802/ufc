
   

  $('.services-section-slider').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    navText: ["<img src='../ufc/assets/images/bluearrow.png'>","<img src='../ufc/assets/images/bluearrow.png'>"],
    responsive:{
        0:{
            items:1
        },
        400:{
              items:1
        },
         600:{
            items:2
        },
        700:{
            items:2
        },
        811:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

  $('.services-section-slider-2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        500:{
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

 $('.testmolials-video').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        singleItem:true,
        nav:true,
        dots:true,
        navText: ["<img src='../ufc/assets/images/arrowleft.png'>","<img src='../ufc/assets/images/arrowright.png'>"],
        responsive:{
            480:{
                items:1
            },
            600:{
                items:1
            }
        }
    })

  
