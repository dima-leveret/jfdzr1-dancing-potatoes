export default class Points{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this.points = new Image;
        this.points.src = "./images/playerKayak.png";
        this.pointsNo = Math.round(Math.random() * 5);
        // this.pointsNo = 3;
        this._positionY = -100;
        this.speed = 3;
        this.lane = Math.floor(Math.random() * 5);
        this.lanePosX = [75, 150, 225, 300, 375, 450, 75];
        this.pointsWidth = 60;
        this.pointsLength = 124;
    }   

    get width(){
        return this.pointsWidth;
    }

    get length(){
        return this.pointsLength;
    }

    get positionX(){
        return this.lanePosX[this.lane];
    }

    get positionY(){
        return this._positionY;
    }

    update(){        
        this._positionY += (this.game.playerKayak.speed/5 + this.speed);
        this.context.drawImage(this.points, 
                                this.pointsNo * this.pointsWidth, 
                                0, 
                                this.pointsWidth, 
                                this.pointsLength, 
                                this.lanePosX[this.lane], 
                                this._positionY, 
                                this.pointsWidth, 
                                this.pointsLength
                               );

        if(this._positionY >= 1000){
            this.game.pointsTable.splice(this.game.pointsTable.indexOf(this), 1);
        }
    }
}