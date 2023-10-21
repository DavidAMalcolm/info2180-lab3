"use strict";


document.addEventListener("DOMContentLoaded", function() {

    var parent = document.getElementById("board");
    let gametrack = [];
    var child = parent.getElementsByTagName("div");
        
    for (let i = 0; i < child.length; i++) {

        child[i].classList.add("square");

        child[i].addEventListener("click",function(){
            if(gametrack.length == 0){
                gametrack.push("X")
                child[i].textContent = "X"
                child[i].classList.remove("O")
                child[i].classList.add("X")
            }
            else if (gametrack[gametrack.length-1] == "X"){
                gametrack.push("O")
                child[i].textContent = "O"
                child[i].classList.remove("X")
                child[i].classList.add("O")
            }
            else{
                gametrack.push("X")
                child[i].textContent = "X"
                child[i].classList.remove("O")
                child[i].classList.add("X")
            }
    })
            
    }

});


