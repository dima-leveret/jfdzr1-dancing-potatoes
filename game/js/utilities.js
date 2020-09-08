export function isCollide(playerKayak, obstacle){

    for(let i=0; i<obstacle.length; i++) {

        let Obstacles = obstacle[i];

        if(Obstacles.positionY > 525 && Obstacles.positionY < 775){           

            if(Math.abs(Obstacles.positionX - playerKayak.positionX) <= 40){
                
                return true;
            }

        }

    }

    return false;

}

export function objectsCollide(points, obstacle){

    for(let i=0; i<obstacle.length; i++) {

        let obstacle = obstacle[i];

        if(obstacle.positionY >= points.positionY && obstacle.positionY <= points.positionY){           

            if(Math.abs(obstacle.positionX - points.positionX) <= 60){
                
                return true;
            }

        }

    }

    return false;

} 