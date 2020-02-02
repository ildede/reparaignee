import * as Phaser from "phaser";
import {WebNode} from "./WebNode";
import {RagnatelaMidRes} from "./RagnatelaMidRes";
import Scene = Phaser.Scene;

export class Ragno extends Phaser.Physics.Arcade.Sprite {

    private myWebNode: WebNode;
    private ragnatela: RagnatelaMidRes;
    private targetNode: Phaser.Math.Vector2;
    private movingSound: Phaser.Sound.BaseSound;
    private repairingSound: Phaser.Sound.BaseSound;
    private speed: number = 150;
    private waitNode: Phaser.Math.Vector2;
    private lockOnRepair: boolean = false;
    private previousNode: WebNode;

    constructor(scene: Scene, texture: string, ragnatela: RagnatelaMidRes) {
        super(scene, 206, 0, texture);
        this.ragnatela = ragnatela;
        this.myWebNode = this.ragnatela.getStartingNode();
        this.targetNode = null;
        this.movingSound = this.scene.sound.add('spidermove');
        this.repairingSound = this.scene.sound.add('spiderrepair', {
            volume: .2
        });
        this.setDepth(10);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.updatePositionTo(this.myWebNode);

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
    }

    updatePositionTo(webNode: WebNode) {
        if (this.ragnatela.hasInsectBetween(this.myWebNode, webNode)) {
            let lineBetween = this.ragnatela.getLineBetween(this.myWebNode, webNode);
            if (lineBetween.edible) {
                console.log('MANGIA');
                let pointToMoveTo = this.prepareMovingAnimation(webNode);
                this.waitNode = new Phaser.Math.Vector2(lineBetween.point.x, lineBetween.point.y);
                this.targetNode = new Phaser.Math.Vector2(pointToMoveTo.x, pointToMoveTo.y);
                this.scene.physics.moveToObject(this, this.waitNode, this.speed);
                this.previousNode = this.myWebNode;
                this.myWebNode = webNode;
            } else {
                console.log('INSETTI grandi, non mi muovo');
            }
        } else {
            let pointToMoveTo = this.prepareMovingAnimation(webNode);
            if (this.ragnatela.isBrokenBetween(this.myWebNode, webNode)) {
                let lineBetween = this.ragnatela.getLineBetween(this.myWebNode, webNode);
                this.waitNode = new Phaser.Math.Vector2(lineBetween.point.x, lineBetween.point.y);
                this.targetNode = new Phaser.Math.Vector2(pointToMoveTo.x, pointToMoveTo.y);
                this.scene.physics.moveToObject(this, this.waitNode, this.speed);
                this.previousNode = this.myWebNode;
                this.myWebNode = webNode;

            } else {
                if (this.ragnatela.hasBonusBetween(this.myWebNode, webNode)) {
                    let lineBetween = this.ragnatela.getLineBetween(this.myWebNode, webNode);
                    switch (lineBetween.sprite.texture.key) {
                        case 'fungo': {
                            console.log('raccolto fungo');
                            break;
                        }
                        case 'caffe': {
                            this.speed += 50;
                            break;
                        }
                        default: {
                            console.log('raccolto boh');
                            break;
                        }
                    }
                    lineBetween.sprite.destroy();
                    lineBetween.bonus = false;
                }
                this.targetNode = new Phaser.Math.Vector2(pointToMoveTo.x, pointToMoveTo.y);
                this.scene.physics.moveToObject(this, this.targetNode, this.speed);
                this.myWebNode = webNode;
            }
        }
    }

    private prepareMovingAnimation(webNode: WebNode) {
        this.movingSound.play();
        this.anims.play('move', true);
        let currentPoint = this.ragnatela.getPoint(this.myWebNode);
        let pointToMoveTo = this.ragnatela.getPoint(webNode);
        this.rotation = Phaser.Math.Angle.BetweenPoints(currentPoint, pointToMoveTo);
        return pointToMoveTo;
    }

    up() {
        let webNode = this.ragnatela.getNodeOnTop(this.myWebNode);
        this.updatePositionTo(webNode);
    }

    upRight() {
        let webNode = this.ragnatela.getNodeOnTopRight(this.myWebNode);
        this.updatePositionTo(webNode);
    }

    right() {
        let webNode = this.ragnatela.getNodeOnRight(this.myWebNode);
        this.updatePositionTo(webNode);
    }

    downRight() {
        let webNode = this.ragnatela.getNodeOnBottomRight(this.myWebNode);
        this.updatePositionTo(webNode);
    }

    down() {
        let webNode = this.ragnatela.getNodeOnBottom(this.myWebNode);
        this.updatePositionTo(webNode);
    }

    downLeft() {
        let webNode = this.ragnatela.getNodeOnBottomLeft(this.myWebNode);
        this.updatePositionTo(webNode);
    }

    left() {
        let webNode = this.ragnatela.getNodeOnLeft(this.myWebNode);
        this.updatePositionTo(webNode);
    }

    upLeft() {
        let webNode = this.ragnatela.getNodeOnTopLeft(this.myWebNode);
        this.updatePositionTo(webNode);
    }

    updatePosition() {
        if (!this.lockOnRepair) {
            if (this.waitNode) {
                let distance = Phaser.Math.Distance.Between(this.x, this.y, this.waitNode.x, this.waitNode.y);
                if (distance < 4) {
                    this.body.reset(this.waitNode.x, this.waitNode.y);
                    this.waitNode = null;
                    this.startRepair();
                    if (this.speed > 1000) {
                        this.scene.time.delayedCall(500, this.finishRepair, [], this);
                    } else {
                        this.scene.time.delayedCall(1500-this.speed, this.finishRepair, [], this);
                    }
                }
            } else {
                let distance = Phaser.Math.Distance.Between(this.x, this.y, this.targetNode.x, this.targetNode.y);
                if (distance < 4) {
                    this.body.reset(this.targetNode.x, this.targetNode.y);
                    this.targetNode = null;
                    this.movingSound.stop();
                    this.anims.play('stay', true);
                }
            }
        }
    }

    isMoving() {
        // @ts-ignore
        return this.targetNode && (this.body.speed > 0 || this.lockOnRepair);
    }

    startRepair() {
        this.movingSound.stop();
        this.repairingSound.play();
        this.lockOnRepair = true;
        this.ragnatela.repairBetween(this.previousNode, this.myWebNode);
    }

    finishRepair() {
        this.repairingSound.stop();
        this.movingSound.play();
        this.lockOnRepair = false;
        this.scene.physics.moveToObject(this, this.targetNode, this.speed);
    }
}
