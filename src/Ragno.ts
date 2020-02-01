import * as Phaser from "phaser";
import {Ragnatela} from "./Ragnatela";
import {WebNode} from "./WebNode";
import Scene = Phaser.Scene;

export class Ragno extends Phaser.Physics.Arcade.Image {

    private myWebNode: WebNode;
    private ragnatela: Ragnatela;
    private targetNode: Phaser.Math.Vector2;
    private movingSound: Phaser.Sound.BaseSound;

    constructor(scene: Scene, texture: string, ragnatela: Ragnatela) {
        super(scene, 0, 0, texture);
        this.ragnatela = ragnatela;
        this.myWebNode = this.ragnatela.getStartingNode();
        this.targetNode = null;
        this.movingSound = this.scene.sound.add('spidermove');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.updatePositionTo(this.myWebNode);
    }

    updatePositionTo(webNode: WebNode) {
        this.movingSound.play();
        if (this.ragnatela.hasInsectBetween(this.myWebNode, webNode)) {
            console.log('INSETTI, non mi muovo');
        } else {
            let currentPoint = this.ragnatela.getPoint(this.myWebNode);
            let pointToMoveTo = this.ragnatela.getPoint(webNode);
            this.rotation = Phaser.Math.Angle.BetweenPoints(currentPoint, pointToMoveTo);
            let speed = 180;
            if (this.ragnatela.isBrokenBetween(this.myWebNode, webNode)) {
                speed *= .4;
                this.ragnatela.repairBetween(this.myWebNode, webNode);
            }
            this.targetNode = new Phaser.Math.Vector2(pointToMoveTo.x, pointToMoveTo.y);
            this.scene.physics.moveToObject(this, this.targetNode, speed);
            this.myWebNode = webNode;
        }
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
        var distance = Phaser.Math.Distance.Between(this.x, this.y, this.targetNode.x, this.targetNode.y);
        //  4 is our distance tolerance, i.e. how close the source can get to the target
        //  before it is considered as being there. The faster it moves, the more tolerance is required.
        if (distance < 4) {
            this.body.reset(this.targetNode.x, this.targetNode.y);
            this.targetNode = null;
            this.movingSound.stop();
        }
    }

    isMoving() {
        // @ts-ignore
        return this.targetNode && this.body.speed > 0;
    }
}
