"use strict";

(function() {

    var element = document.getElementById("duck");

    element.addEventListener("click", function(){
        console.log("Duck clicked")
        element.style.left = element.offsetLeft + 20 + "px";
        console.log("Duck clicked")
    })

    element.addEventListener("mouseover", function(){
        
        console.log("Mouse over")
    })

})();