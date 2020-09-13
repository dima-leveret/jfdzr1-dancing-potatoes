import Game from './game.class.js';

let startButton = document.querySelector(".start-button");
startButton.disabled = true;
let easy = document.querySelector(".easy-difficulty");
let hard = document.querySelector(".hard-difficulty");
let difficultyLevel = 0;
let BGmusic = document.getElementById('BGmusic');

easy.addEventListener('click', () => {
    difficultyLevel = 1200;
    easy.disabled = true;
    hard.disabled = false;
    startButton.disabled = false;
});

hard.addEventListener('click', () => {
    difficultyLevel = 720;
    easy.disabled = false;
    hard.disabled = true;
    startButton.disabled = false;
});

startButton.addEventListener('click', () => {
    gameStart(difficultyLevel);
    BGmusic.play();
});

function gameStart(difficultyLevel) {
    let canvas = document.querySelector("#canvas");
    let context = canvas.getContext("2d");

    let game = new Game(context, difficultyLevel);
    requestAnimationFrame(gameLoop);
    

    function gameLoop() {
        startButton.disabled = true;
        game.update();
        requestAnimationFrame(gameLoop);
    }
}
