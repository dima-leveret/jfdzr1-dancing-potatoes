export default class playerKayak {
    constructor(game) {
        this.game = game;
        this.context = this.game.context;
        this._positionX = 400;
        this._positionY = 850;
        this._speed = 10;
        this.maxSpeed = 60;
        this.kayakWidth = 60;
        this.kayakLength = 124;
        this.init();
    }

    init() {
        this.kayak = new Image;
        this.kayak.src = "./images/playerKayak.png";
    }

    get width() {
        return this.kayakWidth;
    }

    get length() {
        return this.kayakLength;
    }

    get positionX() {
        return this._positionX;
    }

    set positionX(positionX) {
        this._positionX = positionX
    }

    get positionY() {
        return this._positionY;
    }

    set positionY(positionY) {
        this._positionY = positionY
    }

    resetPosition() {
        this._positionX = 400;
        this._positionY = 850;
    }

    moveLeft() {
        this._positionX -= 7;
        if (this._positionX <= 255) this._positionX = 255;
    }

    moveRight() {
        this._positionX += 7;
        if (this._positionX >= 640) this._positionX = 640;
    }

    moveWithMouse(x) {
        this._positionX = x;
        if (this._positionX <= 260) this._positionX = 260;
        if (this._positionX >= 640 - this.kayak.width) this._positionX = 640 - this.kayak.width;
    }

    set speed(speed) {
        if (speed >= this.maxSpeed) {
            this._speed = this.maxSpeed;
        } else if (speed <= 0) {
            this._speed = 0;
        } else {
            this._speed = speed;
        }
    }

    get speed() {
        return this._speed;
    }

    update() {
        this.context.drawImage(this.kayak, this._positionX, this._positionY);
    }
}