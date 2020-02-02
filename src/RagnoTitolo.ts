import * as Phaser from "phaser";
import Scene = Phaser.Scene;

export class RagnoTitolo extends Phaser.Physics.Arcade.Sprite {

    private movingSound: Phaser.Sound.BaseSound;
    private speed: number = 150;
    private targetPoint: Phaser.Math.Vector2;


    constructor(scene: Scene, texture: string) {
        super(scene, 135, 0, texture);
        this.movingSound = this.scene.sound.add('spidermove');
        this.setDepth(10);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        scene.anims.create({
            key: 'move',
            frames: scene.anims.generateFrameNumbers(texture, { start: 1, end: 7 }),
            frameRate: 15,
            repeat: -1
        });
        scene.anims.create({
            key: 'stay',
            frames: [ { key: texture, frame: 0 } ],
            frameRate: 20
        });
        this.rotation = 1.56;
        this.anims.play('move', true);
        this.targetPoint = new Phaser.Math.Vector2(121, 236);
        this.startMovingTo();
    }

    startMovingTo() {
            this.movingSound.play();
            this.anims.play('move', true);
            this.scene.physics.moveToObject(this, this.targetPoint, this.speed);
    }

    updatePosition() {
        let distance = Phaser.Math.Distance.Between(this.x, this.y, this.targetPoint.x, this.targetPoint.y);
        if (distance < 4) {
            this.body.reset(this.targetPoint.x, this.targetPoint.y);
            this.targetPoint = null;
            this.movingSound.stop();
            this.anims.play('stay', true);
        }

    }

    isMoving() {
        // @ts-ignore
        return this.targetPoint && this.body.speed > 0;
    }
}
