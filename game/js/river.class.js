export default class River{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this.yOffset = -512;
        this.river = new Image;
        this.river.src = './images/river.png';        
    }

    update(){
        if(this.yOffset >= 0) this.yOffset = -512;           
        this.context.drawImage(this.river, 0, this.yOffset);
        this.context.drawImage(this.river, 0, this.yOffset+512);
        this.context.drawImage(this.river, 0, this.yOffset+1024);
        this.yOffset += this.game.playerKayak.speed/5;    
        
    }
}