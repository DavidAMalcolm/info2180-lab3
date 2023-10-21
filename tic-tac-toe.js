"use strict";


document.addEventListener("DOMContentLoaded", function() {

    var parent = document.getElementById("board");
    let gametrack = [];
    let token = "cross"
    var child = parent.getElementsByTagName("div");
    var statusBoard = document.getElementById("status");
    var reset = document.querySelector(".btn");

    function brute(){
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6] 
        ];
        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (
                gametrack[a] === gametrack[b] &&
                gametrack[b] === gametrack[c] &&
                gametrack[a]
            ) {
                return true;
            }
        }
        return false; 
    }

    for (let i = 0; i < child.length; i++) {

        child[i].classList.add("square");

        child[i].addEventListener("mouseover",function(){
            this.classList.add("hover");
        })

        child[i].addEventListener("mouseout",function(){
            this.classList.remove("hover");
        })

        reset.addEventListener("click",function(){
            token = "X";
            gametrack = [];
            statusBoard.textContent = "Move your mouse over a square and click to play an X or an O.";
            statusBoard.classList.remove("you-won");
            for(let i = 0; i < child.length; i++){
                child[i].classList.remove("O");
                child[i].classList.remove("X");
                child[i].textContent = " ";
            }
        });

        child[i].addEventListener("click",function(){
            if((gametrack.length == 0 || token === "X") && (gametrack[i]!="X" && gametrack[i]!="O")){
                gametrack[i] = "X";
                console.log(gametrack);
                token = "O";
                child[i].textContent = "X"
                child[i].classList.remove("O");
                child[i].classList.add("X");
            }
            else if (token == "O" && (gametrack[i]!="X" && gametrack[i]!="O")){
                gametrack[i] = "O";
                console.log(gametrack);
                token = "X";
                child[i].textContent = "O";
                child[i].classList.remove("X");
                child[i].classList.add("O");
            }
            if (brute()){
                if (token=="X"){
                    token = "O";
                }
                else{
                    token = "X";
                }
                statusBoard.textContent = "Congratulations! " + token + " is the Winner!";
                statusBoard.classList.add("you-won");
            }
    })
    
    
            
    }

});


