export default class Controller {

    constructor(options) {
        this.river = options.river;
        this.playerKayak = options.playerKayak;
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            let x = e.clientX;
            this.playerKayak.moveWithMouse(x);
        });


        // document.addEventListener("keydown", (e) => {
        //     switch (e.keyCode) {
        //         case 37: // left arrow key
        //             this.playerKayak.moveLeft();
        //         // break;
        //         case 38: // up arrow key
        //             this.playerKayak.speed += 1;
        //             break;
        //         case 39: // right arrow key
        //             this.playerKayak.moveRight();
        //             break;
        //         case 40: // down arrow key
        //             this.playerKayak.speed -= 5;
        //             break;
        //         default:
        //             break;
        //     }
        // })

    }
}