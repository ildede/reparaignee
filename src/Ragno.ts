import * as Phaser from "phaser";
import {Ragnatela} from "./Ragnatela";
import {WebNode} from "./WebNode";
import Scene = Phaser.Scene;

export class Ragno extends Phaser.GameObjects.Image {

    private myWebNode: WebNode;
    private ragantela: Ragnatela;

    constructor(scene: Scene, texture: string, ragnatela: Ragnatela) {
        super(scene, 0, 0, texture);
        this.ragantela = ragnatela;
        this.myWebNode = ragnatela.getNodoRandom();
        this.updatePosition();
        scene.add.existing(this);
    }

    updatePosition() {
        let point = this.ragantela.getPoint(this.myWebNode);
        this.setPosition(point.x, point.y);
    }

    up() {
        this.myWebNode = this.ragantela.getNodeOnTop(this.myWebNode);
        this.updatePosition();
    }

    upRight() {
        this.myWebNode = this.ragantela.getNodeOnTopRight(this.myWebNode);
        this.updatePosition();
    }

    right() {
        this.myWebNode = this.ragantela.getNodeOnRight(this.myWebNode);
        this.updatePosition();
    }

    downRight() {
        this.myWebNode = this.ragantela.getNodeOnBottomRight(this.myWebNode);
        this.updatePosition();
    }

    down() {
        this.myWebNode = this.ragantela.getNodeOnBottom(this.myWebNode);
        this.updatePosition();
    }

    downLeft() {
        this.myWebNode = this.ragantela.getNodeOnBottomLeft(this.myWebNode);
        this.updatePosition();
    }

    left() {
        this.myWebNode = this.ragantela.getNodeOnLeft(this.myWebNode);
        this.updatePosition();
    }

    upLeft() {
        this.myWebNode = this.ragantela.getNodeOnTopLeft(this.myWebNode);
        this.updatePosition();
    }
}