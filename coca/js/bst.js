$(document).ready(function(){

    $(".depth2").hide();
    $("#header").mouseenter(function(){
        $(".depth2").stop().slideDown();
      });
      $("#header").mouseleave(function(){
        $(".depth2").stop().slideUp();
      });
    $(".sitemap").hide();
    $(".ham").click(function(){
      $(".sitemap").stop().fadeIn();
      $(".ham").stop().fadeOut();
    });
    $(".btn_close").click(function(){
      $(".sitemap").stop().fadeOut();
      $(".ham").stop().fadeIn();
    });

      $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: false,
      // navigationPosition: 'left',
      // navigationTooltips: ['HOME', 'SUSTAINABILITY','BUSINESS','MOVIE'],
      showActiveTooltip: true,
      sectionsColor : ['#000', '#fff'],
      });
});