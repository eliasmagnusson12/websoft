(function () {
    'use strict';

//    fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081')
    fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });

    console.log('Sandbox MEGA is ready!');
})();
