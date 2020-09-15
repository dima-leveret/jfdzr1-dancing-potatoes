export default class Points {
    constructor(game, lane) {
        this.game = game;
        this.context = this.game.context;
        this.points = new Image;
        this.points.src = "./images/gamepoints.png";
        this.pointsNo = Math.floor(Math.random() * 4);
        this._positionY = -75;
        this.speed = 3;
        this.lane = lane;
        this.lanePosX = [280, 366, 432, 508, 564];
        this.pointsWidth = 21;
        this.pointsLength = 56;
    }

    get width() {
        return this.pointsWidth;
    }

    get length() {
        return this.pointsLength;
    }

    get positionX() {
        return this.lanePosX[this.lane];
    }

    get positionY() {
        return this._positionY;
    }

    update() {
        this._positionY += (this.game.playerKayak.speed / 5 + this.speed);
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
        if (this._positionY >= 1000) {
            this.game.pointsTable.splice(this.game.pointsTable.indexOf(this), 1);
        }
    }
}