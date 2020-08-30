class Gamer {
    constructor(){
        this.hp = 100;
        this.sizeHeight = '150px';
        this.sizeWidth = '150px';
        this.position = position;
    }

    moveRight = function() {
        this.position++
    }

    moveLeft = function() {
        this.position--
    }

}

class Obstacle {
    constructor(type, sizeX){
        this.type = type;
        this.sizeY = '50px';
        this.sizeX = sizeX;
    }

    
}

class PointsObject {
    constructor(type){
        this.type = type;
        this.sizeHeight = '50px';
        this.sizeWidth = '50px';
    }
}