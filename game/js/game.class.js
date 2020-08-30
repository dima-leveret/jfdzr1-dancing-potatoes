import Controller from './controller.class.js';
import playerKayak from './player.kayak.class.js';
import Obstacles from './obstacles.class.js';
import River from './river.class.js';
import { isCollide } from './utilities.js';
import Dashboard from './dashboard.class.js';

export default class Game{

    constructor(context){
        this.context = context;    
        this.playerKayak = new playerKayak(this);
        this.river = new River(this);
        this.dashboard = new Dashboard(this);
        this.raceDistance = 1;
        this.obstacle = [];      
        new Controller({river:this.river, playerKayak:this.playerKayak});

        setInterval(()=>this.populateObstacles(), 1500);

        this._paused = false;
        this._gameOver = false;
    }

    populateObstacles(){       
        if(this._paused) return; 

        let obstacleObject = new Obstacles(this);      
        this.obstacle.push(obstacleObject);
    }

    set pause(pause){
        this._paused = pause;
    }

    get pause(){
        return this._paused;
    }

    tryAgain(e){

        if(e.keyCode !== 32){
            return;
        }
        this.obstacle = [];
        this.playerKayak.resetPosition();
        this.playerKayak.speed = 10;
        this.pause = false;
        let screenTryAgain = document.querySelector(".try-again");
        screenTryAgain.style.display = "none";
        document.onkeydown = null;
    }

    // tryAgainbutton = document.querySelector('.try-again-button');
    // tryAgainbutton.addEventListener('click', ()=>{
    //     this.obstacle = [];
    //     this.playerKayak.resetPosition();
    //     this.playerKayak.speed = 10;
    //     this.pause = false;
    //     let screenTryAgain = document.querySelector(".try-again");
    //     screenTryAgain.style.display = "none";
    //     document.onkeydown = null;
    // });

    update(){ 

        if(this._gameOver) return;

        this.dashboard.updateTime();

        if(this._paused) return;

        this.river.update();
        this.dashboard.update();

        if(this.dashboard.distanceRemaining <= 0){
            this._gameOver = true;
            this.pause = true;
            let screenGameOver = document.querySelector(".game-over");
            screenGameOver.style.display = "block";
            this.recordTime();

            let screenTimeTaken = document.querySelector('.time-taken');
            screenTimeTaken.innerHTML = this.dashboard.elapsedTime;

            let screenMinTime = document.querySelector('.min-message');
            screenMinTime.innerHTML = "Minimum time recored before - " + this.getMinTimeTaken();

        }

        this.playerKayak.update();
        // this.obstacle.update();
        this.obstacle.forEach(kayak => {
            kayak.update();
        });

        if(isCollide(this.playerKayak, this.obstacle)){
            
            this.pause = true;
            let screenTryAgain = document.querySelector(".try-again");
            screenTryAgain.style.display = "block";
            document.onkeydown = (e) => this.tryAgain(e);       
        }
    }

    recordTime(){

        if(localStorage.getItem("score") === null){
            localStorage.setItem("score", JSON.stringify([]));
        }

        //console.log(localStorage.getItem("score"));

        let time = this.dashboard.elapsedTime;

        let scores = JSON.parse(localStorage.getItem("score"));

        scores.push(time);

        localStorage.setItem("score", JSON.stringify(scores));

    }

    getMinTimeTaken(){
        let scores = JSON.parse(localStorage.getItem("score"));

        console.log(scores);
        let min = scores.reduce((previousItem, currentItem) => {
            return previousItem < currentItem ? previousItem : currentItem;
        });

        console.log(min);
        return min;
    }

}