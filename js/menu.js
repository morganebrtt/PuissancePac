$(document).ready(function() {
    $("#startButton").on("click", function(){
        window.location.href = "game.html";
    })


    $("#rulesButton").on("click", function(){
        $("#rules").fadeToggle("slow");
    })
    

})
