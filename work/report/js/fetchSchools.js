(function () {
    'use strict';

           var html = ""; 


//    fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1081')
    fetch('data/1081.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);

         generateTable(myJson);
        });  


        
        

        function generateTable(data) {
      var perrow = 3, // 3 items per row
      count = 0, // Flag for current cell
      table = document.createElement("table"),
      row = table.insertRow();

      for (var i of data) {
        var cell = row.insertCell();
        cell.innerHTML = i;

        // You can also attach a click listener if you want
    cell.addEventListener("click", function(){
        alert("FOO!");
      });

      count++;
      if (count%perrow==0) {
        row = table.insertRow();
      }
    }
  
    document.getElementById("container").appendChild(table);
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

      

        
        console.log('newer');   
    console.log('Sandbox MEGA is ready!');
})();
