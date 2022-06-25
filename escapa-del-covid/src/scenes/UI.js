import Background from '../assets/background.png';

class Ui extends Phaser.Scene {
    constructor () {
        super({
            key: 'Ui'
        })
    }

    init () {

    }

    preload () {
        this.load.image('background', Background);
    }

}

export default Ui;