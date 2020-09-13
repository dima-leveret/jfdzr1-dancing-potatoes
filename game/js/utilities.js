export function isCollide(playerKayak, object) {

    for (let i = 0; i < object.length; i++) {

        let Objects = object[i];

        if (Objects.positionY > 728 && Objects.positionY < 900) {

            if (Math.abs(Objects.positionX - playerKayak.positionX) <= 45) {
                return true;
            }
        }
    }
    return false;
}