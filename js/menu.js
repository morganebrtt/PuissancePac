$(document).ready(function() {

    setTimeout(function(){
        $("#loadingContainer").fadeOut("slow");
        }, 4800);

    setTimeout(function(){
        $("#menuSection").fadeIn("slow");
        }, 5200);

    $("#startButton").on("click", function(){
        window.location.href = "game.html";
    })

    $("#rulesButton").on("click", function(){
        $("#rulesSection").show();
        $("h1").hide();
        $("#menuSection").hide();
    })

    $("#closeButton").on("click", function(){
        $("#rulesSection").hide();
        $("h1").show();
        $("#menuSection").show();
    })

})
