import Background from '../assets/background.png';

class Menu extends Phaser.Scene {
    constructor () {
        super({
            key: 'Menu'
        })
    }

    init () {

    }

    preload () {
        this.load.image('background', Background);
    }

}

export default Menu;