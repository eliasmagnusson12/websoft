"use strict";

(function() {

    var element = document.getElementById("duck");

    element.addEventListener("click", function(){
        
        element.style.left = element.offsetLeft + 20 + "px";
        
    })

    element.addEventListener("mouseover", function(){
        
        console.log("Mouse over")
    })

})();