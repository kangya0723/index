$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $(".line").css({ "height": "0" });
            $(".box .1").css({ "color": "#ddd" });
        } else {
            $(".box .1").css({ "color": "#ddd" });

        }


        if ($(this).scrollTop() > 100) {
            $(".line").css({ "height": "100" });
            $(".box .1").css({ "color": "#d20000" });
        } else {
            $(".box .1").css({ "color": "#ddd" });

        }
        if ($(this).scrollTop() > 300) {
            $(".line").css({ "height": "300" });
            $(".box .2").css({ "color": "#d20000" });
        }
        else {
            $(".box .2").css({ "color": "#ddd" });

        }
        if ($(this).scrollTop() > 500) {
            $(".line").css({ "height": "400" });
            $(".box .3").css({ "color": "#d20000" });
            $(".box .4").css({ "color": "#d20000" });
        }
        else {
            $(".box .3").css({ "color": "#ddd" });
            $(".box .4").css({ "color": "#ddd" });

        }
        if ($(this).scrollTop() > 700) {
            $(".line").css({ "height": "500" });
            $(".box .5").css({ "color": "#d20000" });
        }
        else {
            $(".box .5").css({ "color": "#ddd" });

        }
        if ($(this).scrollTop() > 900) {
            $(".line").css({ "height": "600" });
            $(".box .6").css({ "color": "#d20000" });
        }
        else {
            $(".box .6").css({ "color": "#ddd" });

        }
        if ($(this).scrollTop() > 1100) {
            $(".line").css({ "height": "1000" });
            $(".box .7").css({ "color": "#d20000" });
            $(".box .8").css({ "color": "#d20000" });
            $(".box .9").css({ "color": "#d20000" });
        }
        else {
            $(".box .7").css({ "color": "#ddd" });
            $(".box .8").css({ "color": "#ddd" });
            $(".box .9").css({ "color": "#ddd" });

        }
        if ($(this).scrollTop() > 1300) {
            $(".line").css({ "height": "1200" });
            $(".box .10").css({ "color": "#d20000" });
            $(".box .11").css({ "color": "#d20000" });
            $(".box .12").css({ "color": "#d20000" });
        }
        else {
            $(".box .10").css({ "color": "#ddd" });
            $(".box .11").css({ "color": "#ddd" });
            $(".box .12").css({ "color": "#ddd" });

        }
        if ($(this).scrollTop() > 1500) {
            $(".line").css({ "height": "1400" });
            $(".box .13").css({ "color": "#d20000" });
            $(".box .14").css({ "color": "#d20000" });
        }
        else {
            $(".box .13").css({ "color": "#ddd" });
            $(".box .14").css({ "color": "#ddd" });

        }
        if ($(this).scrollTop() > 1700) {
            $(".line").css({ "height": "1595" });
            $(".box .15").css({ "color": "#d20000" });
            $(".box .16").css({ "color": "#d20000" });
        }
        else {
            $(".box .15").css({ "color": "#ddd" });
            $(".box .16").css({ "color": "#ddd" });

        }

    }); // 스크롤 값이 1900 위 아래일 때 background를 보이고 안 보이고

});