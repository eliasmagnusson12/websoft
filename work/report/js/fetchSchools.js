(function () {
    'use strict';

            var perrow = 3;
            html = "";


//    fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081')
    fetch('data/1081.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            for(var i = 0; i<myJson.length;i++){
                html += "<td>" + myJson[i] + "</td>";
                var next = i+1;
    if (next%perrow==0 && next!=data.length) {
      html += "</tr><tr>";
    }
            }
        });  

        
        document.getElementById("container").innerHTML = html;
        
        console.log(arr.length)
        
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

      

        

    console.log('Sandbox MEGA is ready!');
})();
