$(document).ready(function(){

    $(".depth2").hide();
    $("#header").mouseenter(function(){
        $(".depth2").stop().slideToggle();
      });
      $("#header").mouseleave(function(){
        $(".depth2").stop().slideToggle();
      });
      

    //   $('#fullpage').fullpage({
    //     //options here
    //     autoScrolling:true,
    //     scrollHorizontally: true,
    //     navigation: false,
    //   // navigationPosition: 'left',
    //   // navigationTooltips: ['HOME', 'SUSTAINABILITY','BUSINESS','MOVIE'],
    //   showActiveTooltip: true,
    //   sectionsColor : ['#000', '#fff'],
    //   });
});