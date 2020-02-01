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
        this.myWebNode = this.ragnatela.getNodoRandom();
        this.updatePosition();
        scene.add.existing(this);
    }

    updatePosition() {
        console.log('will update to position of node', this.myWebNode);
        let point = this.ragnatela.getPoint(this.myWebNode);
        this.setPosition(point.x, point.y);
    }

    up() {
        console.log('actual node', this.myWebNode);
        this.myWebNode = <WebNode>this.ragnatela.getNodeOnTop(this.myWebNode);
        console.log('noew node from ragnatela', this.myWebNode);
        this.updatePosition();
    }

    upRight() {
        this.myWebNode = <WebNode>this.ragnatela.getNodeOnTopRight(this.myWebNode);
        this.updatePosition();
    }

    right() {
        this.myWebNode = <WebNode>this.ragnatela.getNodeOnRight(this.myWebNode);
        this.updatePosition();
    }

    downRight() {
        this.myWebNode = <WebNode>this.ragnatela.getNodeOnBottomRight(this.myWebNode);
        this.updatePosition();
    }

    down() {
        this.myWebNode = <WebNode>this.ragnatela.getNodeOnBottom(this.myWebNode);
        this.updatePosition();
    }

    downLeft() {
        this.myWebNode = <WebNode>this.ragnatela.getNodeOnBottomLeft(this.myWebNode);
        this.updatePosition();
    }

    left() {
        this.myWebNode = <WebNode>this.ragnatela.getNodeOnLeft(this.myWebNode);
        this.updatePosition();
    }

    upLeft() {
        this.myWebNode = <WebNode>this.ragnatela.getNodeOnTopLeft(this.myWebNode);
        this.updatePosition();
    }
}
