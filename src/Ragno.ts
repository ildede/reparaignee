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

    left() {
        this.myWebNode = this.ragantela.getNodeOnLeft(this.myWebNode);
        this.updatePosition();
    }

    right() {
        this.myWebNode = this.ragantela.getNodeOnRight(this.myWebNode);
        this.updatePosition();
    }

    up() {
        this.myWebNode = this.ragantela.getNodeOnTop(this.myWebNode);
        this.updatePosition();
    }

    down() {
        this.myWebNode = this.ragantela.getNodeOnBottom(this.myWebNode);
        this.updatePosition();
    }
}
