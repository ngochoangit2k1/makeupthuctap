$("#product__thumb-gallery").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
})
    $('#blog-post').owlCarousel({
         center: true,
    loop:true,
    autoplay: true,
    autoplaySpeed:3000,
    autoplayHoverPause:true,
    dots:false,
    items:3,
    nav:false,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
    
    })
    $('.owl-carousel ').owlCarousel({
        center: true,
    loop:true,
  autoplay: true,
  autoplaySpeed:3000,
  autoplayHoverPause:true,
    dots:false,
    items:1,
    nav:false,
  })
  