(function () {
    'use strict';

    var arr = []; 
    var myList = [];


//    fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081')
    fetch('data/1081.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            
            console.log(myJson.Skolenheter.length)
            

            
            
                        
            for(var i=0; i < myJson.Skolenheter.length; i++)

            var item = myJson.Skolenheter[i].Skolenhetsnamn;
            console.log(item)

            myList[i] = item;
            
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

      

        
        console.log('new');   
    console.log('Sandbox MEGA is ready!');
})();
