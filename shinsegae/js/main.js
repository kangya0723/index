$(document).ready(function () {

    $(".depth2").hide();

    $(".gnb > li").mouseenter(function () {
        $(this).find(".depth2").stop().slideDown();
    });
    $(".gnb > li").mouseleave(function () {
        $(this).find(".depth2").stop().slideUp();
    })});

const mv = new Swiper(".mv", {
    centeredSlides: true,
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    speed:1000
  });

  const event_list = new Swiper(".event_list", {
    slidesPerView: 4,
      spaceBetween: 30,
      loop: true, 
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
      },
      speed:1000
  });

  const art_list = new Swiper(".art_list", {
    spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
      },
    });