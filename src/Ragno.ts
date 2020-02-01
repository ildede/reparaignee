import * as Phaser from "phaser";
import {Ragnatela} from "./Ragnatela";
import {WebNode} from "./WebNode";
import Scene = Phaser.Scene;

export class Ragno extends Phaser.GameObjects.Image {

    private myWebNode: WebNode;
    private ragnatela: Ragnatela;

    constructor(scene: Scene, texture: string, ragnatela: Ragnatela) {
        super(scene, 0, 0, texture);
        this.ragnatela = ragnatela;
        this.myWebNode = this.ragnatela.getStartingNode();
        this.updatePosition();
        scene.add.existing(this);
    }

    updatePosition() {
        let point = this.ragnatela.getPoint(this.myWebNode);
        this.setPosition(point.x, point.y);
    }

    updatePositionTo(webNode: WebNode) {
        if (this.ragnatela.hasInsectBetween(this.myWebNode, webNode)) {
            console.log('INSETTI, non mi muovo');
        } else {
            console.log('cori cori cori...');
            this.myWebNode = webNode;
            this.updatePosition();
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
}
