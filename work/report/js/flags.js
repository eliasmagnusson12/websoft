(function () {
    'use strict';

    //var myContent = document.getElementById('content');
    var flagTarget = document.getElementById('flag');
    var flagLinkElf = document.getElementById('draw-elfenbenskusten');
    var flagLinkMalay = document.getElementById('draw-malay');

    //myContent.innerHTML = '<h3>This is a MEGA template!</h3>';

    function drawFlagElfenbenskusten()  {
        var flagElfenbenskusten = '<div class="flag elfenbenskusten"><div class="part1"></div>' +
        '<div class="part2"></div></div>';

        console.log("Drawing flag");
        flagTarget.innerHTML = flagElfenbenskusten;
    }

    function drawFlagMalay()  {
        var flagElfenbenskusten = '<div class="flag malay"><div class="top-left"></div>' +
        '<div class="bottom"></div><div class= "top-right"></div></div>';

        console.log("Drawing flag");
        flagTarget.innerHTML = flagElfenbenskusten;
    }



    flagLinkElf.addEventListener("click", function () {
        console.log("Event for clicking link elfenbenskusten.");
        drawFlagElfenbenskusten();
    });

    flagLinkMalay.addEventListener("click", function () {
        console.log("Event for clicking link elfenbenskusten.");
        drawFlagMalay();
    });


    console.log('Sandbox MEGA is ready!');
})();
