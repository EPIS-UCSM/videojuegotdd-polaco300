var vredboy = require('./virusCollision');
var mredboy = require('./movimientosRedBoy');
class RedBoy extends Phaser.GameObjects.Sprite {
    constructor (config) {
        super (config.scene, config.x, config.y, 'object');
        this.scene = config.scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        this.setScale(2);

        this.body.setSize(14, 20);
        this.body.setOffset(2, 5);
        this.body.setBounce(0.2);

        this.jumping = false;

        this.anims.play('object_idle');
        this.prevMov = 'object_idle';

        this.hitDelay = false;

        this.cursor = this.scene.input.keyboard.createCursorKeys();
        this.life = 0;
    }

    update () {
        if(this.cursor.left.isDown) {
            // if(mredboy(this.cursor.left.isDown) == 'left'){
                this.body.setVelocityX(-200);
                this.flipX = true;
                // if(this.prevMov !== 'left' && !this.jumping) {
                // console.log(this.prevMov);
            if(mredboy('left', this.jumping) == 'left') {
                this.prevMov = 'left';
                this.anims.play('object_walk');
            }
        } else if(this.cursor.right.isDown) {
        // } else if(mredboy(this.cursor.right.isDown) == 'right'){
            this.body.setVelocityX(200);
            this.flipX = false;
            // if(this.prevMov !== 'right' && !this.jumping) {
            if(mredboy('right', this.jumping) == 'right') {
                this.prevMov = 'right';
                this.anims.play('object_walk');
            }
        } else if(this.cursor.down.isDown && !this.jumping) {
        // } else if(mredboy(this.cursor.right.isDown) == 'down' && !this.jumping){
            this.body.setVelocityX(0);
            this.body.setSize(14, 15);
            this.body.setOffset(2, 10);
            // if(this.prevMov !== 'down' && !this.jumping) {
            if(mredboy('down', this.jumping) == 'down') {
                this.prevMov = 'down';
                this.anims.play('object_down');
            }
        } else {
            this.body.setVelocityX(0);
            this.body.setSize(14, 20);
            this.body.setOffset(2, 5);
            // if(this.prevMov !== 'object_idle' && !this.jumping) {
            if(mredboy('object_idle', this.jumping) == 'object_idle') {
                this.prevMov = 'object_idle';
                this.anims.play('object_idle');
            }
        }

        if(Phaser.Input.Keyboard.JustDown(this.cursor.up) && !this.jumping) {
            this.jumping = true;
            this.body.setVelocityY(-800);
            // if(this.prevMov !== 'jump') {
            if(mredboy('jump', this.jumping) == 'jump') {
                this.prevMov = 'jump';
                this.anims.play('object_jump');
            }
        }else if(this.body.blocked.down) {
            this.jumping = false;
        }
    }

    virusCollision() {
        if(!this.hitDelay) {
            this.hitDelay = true;
            this.life--;
            if(vredboy(this.life) == 'remove life'){
                this.scene.registry.events.emit('remove_life');
            }else{
                this.scene.registry.events.emit('game_over');
            }
            this.setTint(0x1abc9c);
            this.scene.time.addEvent({
                delay: 600,
                callback: () => {
                    this.hitDelay = false;
                    this.clearTint();
                }
            });
        }
    }
}

export default RedBoy;