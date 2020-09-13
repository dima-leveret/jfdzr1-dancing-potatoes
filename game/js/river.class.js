export default class River {
    constructor(game) {
        this.game = game;
        this.context = this.game.context;
        this.yOffset = -350;
        this.river = new Image;
        this.river.src = './images/river.png';
        this.river2 = new Image;
        this.river2.src = './images/river2.png';
        this.river3 = new Image;
        this.river3.src = './images/river3.png';
    }

    update() {
        if (this.yOffset >= 0) this.yOffset = -350;
        this.context.drawImage(this.river2, 0, this.yOffset);
        this.context.drawImage(this.river2, 0, this.yOffset + 350);
        this.context.drawImage(this.river2, 0, this.yOffset + 700);
        this.context.drawImage(this.river2, 0, this.yOffset + 1050);
        this.yOffset += this.game.playerKayak.speed / 5;
    }
}

