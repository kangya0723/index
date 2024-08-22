$(document).ready(function(){

  $(".depth2").hide();
  $("#header").mouseenter(function(){
      $(".depth2").stop().slideToggle();
    });
    $("#header").mouseleave(function(){
      $(".depth2").stop().slideToggle();
    });
  $(".sitemap").hide();
  $(".ham").click(function(){
    $(".sitemap").stop().fadeToggle();
    $(".ham").stop().fadeToggle();
  });
  $(".btn_close").click(function(){
    $(".sitemap").stop().fadeToggle();
    $(".ham").stop().fadeToggle();
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