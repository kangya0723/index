$(document).ready(function(){


    $(".depth2").hide();
    $(".gnb > li").mouseenter(function(){
        $(this).find(".depth2").stop().slideDown();
      });
      $(".gnb > li").mouseleave(function(){
        $(this).find(".depth2").stop().slideUp();
      });

      $
      const mv = new Swiper('.mv', {
        spaceBetween: 30,
        speed: 1000, 
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",},
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      });
      const event = new Swiper('.event', {
        slidesPerView: 6,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      });
      const sns = new Swiper('.sns', {
        slidesPerView: 6,
      spaceBetween: 0,
      loop: true,
      });

});