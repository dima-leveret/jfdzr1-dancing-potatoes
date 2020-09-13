import Game from './game.class.js';

let startButton = document.querySelector(".start-button");
let easy = document.querySelector(".easy-difficulty");
let hard = document.querySelector(".hard-difficulty");
let difficultyLevel = 0;

easy.addEventListener('click', () =>{
    difficultyLevel = 1000;
});

hard.addEventListener('click', () =>{
    difficultyLevel = 720;
});

startButton.addEventListener('click', () =>{
    gameStart(difficultyLevel);
});


function gameStart(difficultyLevel){
   
    let canvas = document.querySelector("#canvas");
    let context = canvas.getContext("2d");

    let game = new Game(context, difficultyLevel);
    requestAnimationFrame(gameLoop);

    function gameLoop(){    
        startButton.disabled = true;
        game.update();
        requestAnimationFrame(gameLoop);
    }
}



