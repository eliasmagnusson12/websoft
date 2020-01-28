(function () {
    'use strict';

            


//    fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081')
    fetch('data/1081.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
           generateTable(myJson);
        });  


        
        // 1. Create the button
        var button = document.createElement("button");
        button.innerHTML = "Fetch Schools";

        // 2. Append somewhere
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        // 3. Add event handler
        button.addEventListener ("click", function() {
            
        alert("did something");
        });

        function generateTable(data) {
            var html = '';
        
            if (typeof (data[0]) === 'undefined') {
                return null;
            }
        
            if (data[0].constructor === String) {
                html += '<tr>\r\n';
                for (var item in data) {
                    html += '<td>' + data[item] + '</td>\r\n';
                }
                html += '</tr>\r\n';
            }
        
            if (data[0].constructor === Array) {
                for (var row in data) {
                    html += '<tr>\r\n';
                    for (var item in data[row]) {
                        html += '<td>' + data[row][item] + '</td>\r\n';
                    }
                    html += '</tr>\r\n';
                }
            }
        
            if (data[0].constructor === Object) {
                for (var row in data) {
                    html += '<tr>\r\n';
                    for (var item in data[row]) {
                        html += '<td>' + item + ':' + data[row][item] + '</td>\r\n';
                    }
                    html += '</tr>\r\n';
                }
            }
        
            return html;
        }

      

        

    console.log('Sandbox MEGA is ready!');
})();
