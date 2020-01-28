(function () {
    'use strict';

//    fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081')
    fetch('data/1081.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });

        // 1. Create the button
        var button = document.createElement("button");
        button.innerHTML = "Do Something";

        // 2. Append somewhere
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        // 3. Add event handler
        button.addEventListener ("click", function() {
        alert("did something");
        });


        var x = document.getElementById("kommun")

    console.log('Sandbox MEGA is ready!');
})();
