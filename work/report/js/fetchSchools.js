(function () {
    'use strict';

           var html = ""; 


//    fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081')
    fetch('data/1081.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
          html = generateTable(myJson);
        });  


        
        

        function generateTable(data) {
            var html = '';
        
            if (typeof (data[0]) === 'undefined') {
                console.log('und'); 
                return null;
            }
        
            if (data[0].constructor === String) {
                html += '<tr>\r\n';
                for (var item in data) {
                    console.log('String'); 
                    html += '<td>' + data[item] + '</td>\r\n';
                }
                html += '</tr>\r\n';
            }
        
            if (data[0].constructor === Array) {
                for (var row in data) {
                    console.log('Arr'); 
                    html += '<tr>\r\n';
                    for (var item in data[row]) {
                        html += '<td>' + data[row][item] + '</td>\r\n';
                    }
                    html += '</tr>\r\n';
                }
            }
        
            if (data[0].constructor === Object) {
                for (var row in data) {
                    console.log('OBJ'); 
                    html += '<tr>\r\n';
                    for (var item in data[row]) {
                        html += '<td>' + item + ':' + data[row][item] + '</td>\r\n';
                    }
                    html += '</tr>\r\n';
                }
            }
        
            return html;
        }


        // 1. Create the button
        var button = document.createElement("button");
        button.innerHTML = "Fetch Schools";

        // 2. Append somewhere
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        // 3. Add event handler
        button.addEventListener ("click", function() {
            document.getElementById("container").innerHTML = html;
        alert("did something");
        });

      

        
        console.log('new');   
    console.log('Sandbox MEGA is ready!');
})();
