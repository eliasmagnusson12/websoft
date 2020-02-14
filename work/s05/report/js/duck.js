"use strict";

(function() {

    var element = document.getElementById("duck");

    var hidden = false;

setInterval(function(){
    document.getElementById("duck").style.visibility= hidden ? "visible" : "hidden";
    hidden = !hidden;
},2000);

    element.addEventListener("click", function(){
        
        element.style.left = element.offsetLeft + 20 + "px";
        
    })

    element.addEventListener("mouseover", function(){
        
        console.log("Mouse over")
    })

})();