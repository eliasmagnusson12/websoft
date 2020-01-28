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

       var el_up = document.getElementById("1081.json");
       var list = el_up

        
        // 1. Create the button
        var button = document.createElement("button");
        button.innerHTML = "Fetch Schools";

        // 2. Append somewhere
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        // 3. Add event handler
        button.addEventListener ("click", function() {
            GFG_FUN()
        alert("did something");
        });

        function GFG_FUN() { 
            var cols = []; 
              
            for (var i = 0; i < list.length; i++) { 
                for (var k in list[i]) { 
                    if (cols.indexOf(k) === -1) { 
                          
                        // Push all keys to the array 
                        cols.push(k); 
                    } 
                } 
            } 
              
            // Create a table element 
            var table = document.createElement("table"); 
              
            // Create table row tr element of a table 
            var tr = table.insertRow(-1); 
              
            for (var i = 0; i < cols.length; i++) { 
                  
                // Create the table header th element 
                var theader = document.createElement("th"); 
                theader.innerHTML = cols[i]; 
                  
                // Append columnName to the table row 
                tr.appendChild(theader); 
            } 
              
            // Adding the data to the table 
            for (var i = 0; i < list.length; i++) { 
                  
                // Create a new row 
                trow = table.insertRow(-1); 
                for (var j = 0; j < cols.length; j++) { 
                    var cell = trow.insertCell(-1); 
                      
                    // Inserting the cell at particular place 
                    cell.innerHTML = list[i][cols[j]]; 
                } 
            } 
              
            // Add the newely created table containing json data 
            var el = document.getElementById("table"); 
            el.innerHTML = ""; 
            el.appendChild(table); 
        }    


        

    console.log('Sandbox MEGA is ready!');
})();
