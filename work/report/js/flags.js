(function () {
    'use strict';

    //var myContent = document.getElementById('content');
    var flagTarget = document.getElementById('flag');
    var flagLinkElf = document.getElementById('draw-elfenbenskusten');
    var flagLinkFrance = document.getElementById('draw-france');

    //myContent.innerHTML = '<h3>This is a MEGA template!</h3>';

    function drawFlagElfenbenskusten()  {
        var flagElfenbenskusten = '<div class="flag elfenbenskusten"><div class="part1"></div>' +
        '<div class="part2"></div></div>';

        console.log("Drawing flag");
        flagTarget.innerHTML = flagElfenbenskusten;
    }

    function drawFlagFrance()  {
        var flagFrance = '<div class="flag france"><div class="part1"></div>' +
        '<div class="part2"></div></div>';

        console.log("Drawing flag");
        flagTarget.innerHTML = flagFrance;
    }



    flagLinkElf.addEventListener("click", function () {
        console.log("Event for clicking link elfenbenskusten.");
        drawFlagElfenbenskusten();
    });

    flagLinkFrance.addEventListener("click", function () {
        console.log("Event for clicking link elfenbenskusten.");
        drawFlagFrance();
    });


    console.log('Sandbox MEGA is ready!');
})();
