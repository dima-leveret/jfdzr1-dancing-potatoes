export default class Obstacles{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this.obstruction = new Image;
        this.obstruction.src = "./images/obstacles.png";
        // this.obstructionNo = Math.round(Math.random() * 5);
        this.obstructionNo = 3;
        this._positionY = -100;
        this.speed = 3;
        this.lane = Math.floor(Math.random() * 5);
        this.lanePosX = [75, 150, 225, 300, 375, 450, 75];
        this.obstructionWidth = 60;
        this.obstructionLength = 124;
    }   

    get width(){
        return this.obstructionWidth;
    }

    get length(){
        return this.obstructionLength;
    }

    get positionX(){
        return this.lanePosX[this.lane];
    }

    get positionY(){
        return this._positionY;
    }

    update(){        
        this._positionY += (this.game.playerKayak.speed/5 + this.speed);
        this.context.drawImage(this.obstruction, 
                                this.obstructionNo * this.obstructionWidth, 
                                0, 
                                this.obstructionWidth, 
                                this.obstructionLength, 
                                this.lanePosX[this.lane], 
                                this._positionY, 
                                this.obstructionWidth, 
                                this.obstructionLength
                               );

        if(this._positionY >= 1000){
            this.game.obstacle.splice(this.game.obstacle.indexOf(this), 1);
        }
    }
}