import RedBoy from "../Player/RedBoy";

class Play extends Phaser.Scene {
    constructor () {
        super({
            key: 'Play'
        })
    }

    init () {

    }

    preload () {
    }

    create () {
        this.add.image(0, 0, 'background').setOrigin(0);
        //bloque fisico
        this.wall_floor = this.physics.add.staticGroup();
        this.wall_floor.create(0,0,'wall').setOrigin(0);
        this.wall_floor.create(this.scale.width, 0, 'wall').setOrigin(1, 0).setFlipX(true);
        this.wall_floor.create(0, this.scale.height, 'floor').setOrigin(0, 1);
        this.wall_floor.refresh();
        this.wall_floor.getChildren()[2].setOffset(0, 15);
        this.redBoy = new RedBoy({
            scene: this,
            x: 100,
            y: 100
        });
        this.physics.add.collider(this.redBoy, this.wall_floor);
    }

    update () {
        this.redBoy.update();
    }

}

export default Play;