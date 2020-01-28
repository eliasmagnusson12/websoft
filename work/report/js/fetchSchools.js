(function () {
    'use strict';

    
    var myList = [];


//    fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081')
    fetch('data/1081.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            
            console.log(myJson.Skolenheter.length)
            
            for(var i=0; i < myJson.Skolenheter.length; i++){

            var item = myJson.Skolenheter[i].Skolenhetsnamn;
            console.log(item)
            myList[i] = item;
            }

            generateTable(myList)
        });  


        

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


        function generateTable(data) {
            var html = '';
        
            if (typeof (data[0]) === 'undefined') {
                console.log("und")
                return null;
            }
        
            if (data[0].constructor === String) {
                console.log("String")
                html += '<tr>\r\n';
                for (var item in data) {
                    html += '<td>' + data[item] + '</td>\r\n';
                }
                html += '</tr>\r\n';
            }
        
            if (data[0].constructor === Array) {
                console.log("arr")
                for (var row in data) {
                    html += '<tr>\r\n';
                    for (var item in data[row]) {
                        html += '<td>' + data[row][item] + '</td>\r\n';
                    }
                    html += '</tr>\r\n';
                }
            }
        
            if (data[0].constructor === Object) {
                console.log("obj")
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
      

        
        console.log('new');   
    console.log('Sandbox MEGA is ready!');
})();
