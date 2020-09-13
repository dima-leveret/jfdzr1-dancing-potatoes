import Controller from './controller.class.js';
import playerKayak from './player.kayak.class.js';
import Obstacles from './obstacles.class.js';
import Points from './points.class.js';
import River from './river.class.js';
import { isCollide } from './utilities.js';
import Dashboard from './dashboard.class.js';

export default class Game {

    constructor(context, objectSpawnRate) {
        this.context = context;
        this.playerKayak = new playerKayak(this);
        this.river = new River(this);
        this.dashboard = new Dashboard(this);
        this.raceDistance = 1;
        this.obstacle = [];
        this.pointsTable = [];
        this.spawnDivider = 0;
        this.score = 0;
        this.objectSpawnRate = objectSpawnRate;
        this.scoreDisplay = document.querySelector('.score');
        new Controller({ river: this.river, playerKayak: this.playerKayak });

    setInterval(() => {
            this.populateObstaclesAndPoints();
            this.speedRise();
        }, this.objectSpawnRate);
        this._paused = false;
        this._gameOver = false;
    }

    populateObstaclesAndPoints() {
        if (this._paused) return;
        let lanesRotate = [0, 1, 2, 3, 4];
        for (let i = lanesRotate.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = lanesRotate[i]
            lanesRotate[i] = lanesRotate[j]
            lanesRotate[j] = temp
        }

        let lane = lanesRotate[0];
        let lane2 = lanesRotate[1];
        let lane3 = lanesRotate[2];

        let obstacleObject = new Obstacles(this, lane);
        let obstacleObject2 = new Obstacles(this, lane2);
        this.obstacle.push(obstacleObject, obstacleObject2);

        if (this.spawnDivider % 2 === 0) {
            let pointsObject = new Points(this, lane3);
            this.pointsTable.push(pointsObject)
        }
        this.spawnDivider++;
    }

    set pause(pause) {
        this._paused = pause;
    }

    get pause() {
        return this._paused;
    }

    tryAgain(e) {

        if (e.keyCode !== 32) {
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
        this.score = 0;
        this.scoreDisplay.innerHTML = this.score;
    }

    update() {
        if (this._gameOver) return;

        this.dashboard.updateTime();
        if (this._paused) return;

        this.river.update();
        this.dashboard.update();
        if (this.dashboard.distanceRemaining <= 0) {
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
        this.obstacle.forEach(kayak => {
            kayak.update();
        });
        this.pointsTable.forEach(kayak => {
            kayak.update();
        });

        if (isCollide(this.playerKayak, this.obstacle)) {
            this.pause = true;
            let screenTryAgain = document.querySelector(".try-again");
            screenTryAgain.style.display = "block";
            document.onkeydown = (e) => this.tryAgain(e);
            this.dashboard.elapsedTime = 0;
        }

        if (isCollide(this.playerKayak, this.pointsTable)) {
            this.pointsTable.splice(this.pointsTable, 1);
            this.score += 10;
            this.scoreDisplay.innerHTML = this.score;
        }

        if (document.hidden) {
            this.pause = true;
            this.pointsTable.splice(1, 1);
            this.obstacle.splice(1, 1);
        }
    }

    recordTime() {

        if (localStorage.getItem("score") === null) {
            localStorage.setItem("score", JSON.stringify([]));
        }

        let time = this.dashboard.elapsedTime;

        let scores = JSON.parse(localStorage.getItem("score"));

        scores.push(time);

        localStorage.setItem("score", JSON.stringify(scores));

    }

    getMinTimeTaken() {
        let scores = JSON.parse(localStorage.getItem("score"));

        let min = scores.reduce((previousItem, currentItem) => {
            return previousItem < currentItem ? previousItem : currentItem;
        });

        return min;
    }

    speedRise() {
        this.playerKayak.speed += 1;
        this.obstacle.speed += 2;
    }
}