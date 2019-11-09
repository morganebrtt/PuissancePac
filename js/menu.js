$(document).ready(function() {
    // function loader() {

    //     var loader = document.querySelector("#loader");
    //     loader.classList.add("fadeOut");
    
    //     setTimeout(function() {
    //         var fullContent = document.querySelector("#fullContent");
    //         fullContent.style.display = "initial";
    //         loader.style.display = "none";
    //     }, 1000);
    // }

    setTimeout(function(){
    $("#loadingContainer").fadeOut("slow");
    }, 4850);


    $("#startButton").on("click", function(){
        window.location.href = "game.html";
    })


    $("#rulesButton").on("click", function(){
        $("#rules").fadeToggle("slow");
    })
    

})
