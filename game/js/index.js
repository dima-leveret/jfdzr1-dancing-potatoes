import Game from './game.class.js';

let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let startButton = document.querySelector(".start-button");

let game = new Game(context);
   
startButton.addEventListener('click', () =>{
    requestAnimationFrame(gameLoop);
}, false);

function gameLoop(){    
    startButton.disabled = true;
    game.update();
    requestAnimationFrame(gameLoop);
}
