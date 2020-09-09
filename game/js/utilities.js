export function isCollide(playerKayak, object){

    for(let i=0; i<object.length; i++) {

        let Objects = object[i];

        if(Objects.positionY > 525 && Objects.positionY < 775){           

            if(Math.abs(Objects.positionX - playerKayak.positionX) <= 40){
                
                return true;
            }

        }

    }

    return false;

}

