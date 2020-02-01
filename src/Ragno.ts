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

    up() {
        this.myWebNode = this.ragnatela.getNodeOnTop(this.myWebNode);
        this.updatePosition();
    }

    upRight() {
        this.myWebNode = this.ragnatela.getNodeOnTopRight(this.myWebNode);
        this.updatePosition();
    }

    right() {
        this.myWebNode = this.ragnatela.getNodeOnRight(this.myWebNode);
        this.updatePosition();
    }

    downRight() {
        this.myWebNode = this.ragnatela.getNodeOnBottomRight(this.myWebNode);
        this.updatePosition();
    }

    down() {
        this.myWebNode = this.ragnatela.getNodeOnBottom(this.myWebNode);
        this.updatePosition();
    }

    downLeft() {
        this.myWebNode = this.ragnatela.getNodeOnBottomLeft(this.myWebNode);
        this.updatePosition();
    }

    left() {
        this.myWebNode = this.ragnatela.getNodeOnLeft(this.myWebNode);
        this.updatePosition();
    }

    upLeft() {
        this.myWebNode = this.ragnatela.getNodeOnTopLeft(this.myWebNode);
        this.updatePosition();
    }
}
