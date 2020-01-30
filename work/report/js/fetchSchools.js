(function () {
    'use strict';

    
    var myList = [];


//fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1282')
    fetch('data/1081.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            
            console.log(myJson.Skolenheter.length)
            
            var str1 = "Skolenhetsnamn";
            var str2 = "Skolenhetsnamn";
            var str3 = "Kommunkod";
            var str4 = "PeOrgNr";

            str1 = str1.bold();
            str2 = str2.bold();
            str3 = str3.bold();
            str4 = str4.bold();
        
            myList.push(str1)
            myList.push(str2)
            myList.push(str3)
            myList.push(str4)
            for(var i=0; i < myJson.Skolenheter.length; i++){

            var item = myJson.Skolenheter[i];
            

            const {Skolenhetskod} = item;
            const {Skolenhetsnamn} = item;
            const {Kommunkod} = item;
            const {PeOrgNr} = item;
             myList.push(Skolenhetskod)
             myList.push(Skolenhetsnamn)
             myList.push(Kommunkod)
             myList.push(PeOrgNr)
                
            
            
            
            }

            
        });  

        
        var button1 = getElementsByTagName("dropbtn");
        button1.innerHTML = "Select School";

        var body = document.getElementsByTagName("body")
        body.appendChild(button1);

        button1.addEventListener ("click", function() {
            myFunction();
        
        });
        
        
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


        

        // 1. Create the button
        var button = document.createElement("button");
        button.innerHTML = "Fetch Schools";

        // 2. Append somewhere
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        // 3. Add event handler
        button.addEventListener ("click", function() {
            document.getElementById("container").appendChild(generateTable(myList)); 
        //alert("did something");
        });


        function generateTable(data) {
            
                        // DRAW HTML TABLE
            var perrow = 4, // 4 items per row
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

            // Break into next row
            count++;
            if (count%perrow==0) {
            row = table.insertRow();
            }
            }
        
            return table;
        }
      

        
        console.log('new');   
    console.log('Sandbox MEGA is ready!');
})();
