import Controller from './controller.class.js';
import playerKayak from './player.kayak.class.js';
import Obstacles from './obstacles.class.js';
import Points from './points.class.js';
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
        this.pointsTable = [];  
        this.functionCount = 0;
        this.score = document.querySelector('.score');
        new Controller({river:this.river, playerKayak:this.playerKayak});

        setInterval(()=>this.populateObstaclesAndPoints(), 1000);

        this._paused = false;
        this._gameOver = false;
    }

    populateObstaclesAndPoints(){       
        if(this._paused) return; 
        let lane = Math.floor(Math.random() * 5);
        let lane2 = Math.floor(Math.random() * 5);
  
        if(lane === lane2){
            lane2++;
        }

        let obstacleObject = new Obstacles(this, lane) ;      
        this.obstacle.push(obstacleObject);

        // if(this.functionCount%2===0){
        let pointsObject = new Points(this, lane2);
        this.pointsTable.push(pointsObject)
        // }
        this.functionCount++;
    }

        

    set pause(pause){
        this._paused = pause;
    }

    get pause(){
        return this._paused;
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
        this.pointsTable = [];
        this.playerKayak.resetPosition();
        this.playerKayak.speed = 10;
        this.pause = false;
        let screenTryAgain = document.querySelector(".try-again");
        screenTryAgain.style.display = "none";
        document.onkeydown = null;
        this.score.innerHTML = 0;  
    }


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
        this.pointsTable.forEach(kayak => {
            kayak.update();
        });

        if(isCollide(this.playerKayak, this.obstacle)){
            
            this.pause = true;
            let screenTryAgain = document.querySelector(".try-again");
            screenTryAgain.style.display = "block";
            document.onkeydown = (e) => this.tryAgain(e);       
        }

        if(isCollide(this.playerKayak, this.pointsTable)){
            this.pointsTable.splice(0, 1); 
            this.score.value += 10;        
        }
    }

    recordTime(){

        if(localStorage.getItem("score") === null){
            localStorage.setItem("score", JSON.stringify([]));
        }

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