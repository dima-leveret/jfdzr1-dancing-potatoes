export function isCollide(playerKayak, obstacle){

    for(let i=0; i<obstacle.length; i++) {

        let Obstacles = obstacle[i];

        if(Obstacles.positionY > 525 && Obstacles.positionY < 775){           

            if(Math.abs(Obstacles.positionX - playerKayak.positionX) <= 60){
                
                return true;
            }

        }

    }

    return false;

} // end of isCollide function