import * as Phaser from "phaser";
import {WebNode} from "./WebNode";
import Point = Phaser.Geom.Point;

export class Ragnatela extends Phaser.GameObjects.Image {

    private A: Array<{point: Point}>;
    private B: Array<{point: Point}>;
    private C: Array<{point: Point}>;
    private D: Array<{point: Point}>;
    private E: Array<{point: Point}>;
    private F: Array<{point: Point}>;
    private Z: Array<{point: Point}>;

    private AB: Array<{point: Point, insect: boolean, broken: boolean, sprite: Phaser.GameObjects.Image }>;
    private BC: Array<{point: Point, insect: boolean, broken: boolean, sprite: Phaser.GameObjects.Image }>;
    private CD: Array<{point: Point, insect: boolean, broken: boolean, sprite: Phaser.GameObjects.Image }>;
    private DE: Array<{point: Point, insect: boolean, broken: boolean, sprite: Phaser.GameObjects.Image }>;
    private EF: Array<{point: Point, insect: boolean, broken: boolean, sprite: Phaser.GameObjects.Image }>;
    private FA: Array<{point: Point, insect: boolean, broken: boolean, sprite: Phaser.GameObjects.Image }>;

    constructor(scene: Phaser.Scene, texture: string) {
        super(
            scene,
            scene.scale.width/2,
            scene.scale.height/2,
            texture
        );
        scene.add.existing(this);

        this.A = [
            { point: new Point(69, 61) },
            { point: new Point(61, 56) },
            { point: new Point(53, 49) },
            { point: new Point(45, 44) },
            ];
        this.B = [
            { point: new Point(91, 58) },
            { point: new Point(95, 47) },
            { point: new Point(98, 39) },
            { point: new Point(101,27) },
            ];
        this.C = [
            { point: new Point(101,66) },
            { point: new Point(113,62) },
            { point: new Point(129,56) },
            { point: new Point(141,51) },
            ];
        this.D = [
            { point: new Point(100,83) },
            { point: new Point(109,91) },
            { point: new Point(119,98) },
            { point: new Point(129,104) },
            ];
        this.E = [
            { point: new Point(78,92) },
            { point: new Point(72,109) },
            { point: new Point(65,124) },
            { point: new Point(60,140) },
            ];
        this.F = [
            { point: new Point(66, 80) },
            { point: new Point(53, 85) },
            { point: new Point(43, 89) },
            { point: new Point(34, 92) },
            ];
        this.AB = [
            { point: new Point(82,58), insect: false, broken: false, sprite: null },
            { point: new Point(79,51), insect: false, broken: false, sprite: null },
            { point: new Point(77,45), insect: false, broken: false, sprite: null },
            { point: new Point(73,35), insect: false, broken: false, sprite: null },
            ];
        this.BC = [
            { point: new Point(96,62), insect: false, broken: false, sprite: null },
            { point: new Point(102,53), insect: false, broken: false, sprite: null },
            { point: new Point(110,47), insect: false, broken: false, sprite: null },
            { point: new Point(120,40), insect: false, broken: false, sprite: null },
            ];
        this.CD = [
            { point: new Point(101,73), insect: false, broken: false, sprite: null },
            { point: new Point(112,75), insect: false, broken: false, sprite: null },
            { point: new Point(121,76), insect: false, broken: false, sprite: null },
            { point: new Point(132,77), insect: false, broken: false, sprite: null },
            ];
        this.DE = [
            { point: new Point(89,88), insect: false, broken: false, sprite: null },
            { point: new Point(90,99), insect: false, broken: false, sprite: null },
            { point: new Point(94,109), insect: false, broken: false, sprite: null },
            { point: new Point(97,115), insect: false, broken: false, sprite: null },
            ];
        this.EF = [
            { point: new Point(72,87), insect: false, broken: false, sprite: null },
            { point: new Point(63,95), insect: false, broken: false, sprite: null },
            { point: new Point(54,106), insect: false, broken: false, sprite: null },
            { point: new Point(48,111), insect: false, broken: false, sprite: null },
            ];
        this.FA = [
            { point: new Point(67,70), insect: false, broken: false, sprite: null },
            { point: new Point(58,69), insect: false, broken: false, sprite: null },
            { point: new Point(49,67), insect: false, broken: false, sprite: null },
            { point: new Point(39,67), insect: false, broken: false, sprite: null },
            ];
        this.Z = [{ point: new Point(85,73) }];
    }

    getStartingNode() {
        return new WebNode('Z', 0);
    }

    private getRandomLine() {
        let ramo = Math.floor(Math.random() * 6);
        let node;
        switch (ramo) {
            case 0: {
                node = this.randomLineFrom('AB');
                break;
            }
            case 1: {
                node = this.randomLineFrom('BC');
                break;
            }
            case 2: {
                node = this.randomLineFrom('CD');
                break;
            }
            case 3: {
                node = this.randomLineFrom('DE');
                break;
            }
            case 4: {
                node = this.randomLineFrom('EF');
                break;
            }
            case 5: {
                node = this.randomLineFrom('FA');
                break;
            }
        }
        if (node.broken || node.insect) {
            return this.getRandomLine();
        } else {
            return node;
        }
    }

    private randomLineFrom(ramo: string) {
        let giro = Math.floor(Math.random() * this[ramo].length);
        return this[ramo][giro];
    }

    getPoint(nodo: { ramo: string; giro: number }) {
        return this[nodo.ramo][nodo.giro].point;
    }

    getNodeOnTop(webNode: WebNode) {
        switch (webNode.ramo) {
            case 'A': {
                return webNode;
            }
            case 'B': {
                return this.goOut(webNode);
            }
            case 'C': {
                return webNode;
            }
            case 'D': {
                return new WebNode('C', webNode.giro);
            }
            case 'E': {
                return this.goIn(webNode);
            }
            case 'F': {
                return new WebNode('A', webNode.giro);
            }
            case 'Z': {
                return new WebNode('B', 0);
            }
            default: {
                return webNode;
            }
        }
    }

    getNodeOnTopRight(webNode: WebNode) {
        switch (webNode.ramo) {
            case 'A': {
                return webNode;
            }
            case 'B': {
                return this.goOut(webNode);
            }
            case 'C': {
                return this.goOut(webNode);
            }
            case 'D': {
                return webNode;
            }
            case 'E': {
                return this.goIn(webNode);
            }
            case 'F': {
                return webNode;
            }
            case 'Z': {
                return new WebNode('B', 0);
            }
            default: {
                return webNode;
            }
        }
    }

    getNodeOnRight(webNode: WebNode) {
        switch (webNode.ramo) {
            case 'A': {
                return new WebNode('B', webNode.giro);
            }
            case 'B': {
                return webNode;
            }
            case 'C': {
                return this.goOut(webNode);
            }
            case 'D': {
                return webNode;
            }
            case 'E': {
                return new WebNode('D', webNode.giro);
            }
            case 'F': {
                return this.goIn(webNode);
            }
            case 'Z': {
                return new WebNode('C', 0);
            }
            default: {
                return webNode;
            }
        }
    }

    getNodeOnBottomRight(webNode: WebNode) {
        switch (webNode.ramo) {
            case 'A': {
                return this.goIn(webNode);
            }
            case 'B': {
                return new WebNode('C', webNode.giro);
            }
            case 'C': {
                return webNode;
            }
            case 'D': {
                return this.goOut(webNode);
            }
            case 'E': {
                return webNode;
            }
            case 'F': {
                return new WebNode('E', webNode.giro);
            }
            case 'Z': {
                return new WebNode('D', 0);
            }
            default: {
                return webNode;
            }
        }

    }

    getNodeOnBottom(webNode: WebNode) {
        switch (webNode.ramo) {
            case 'A': {
                return new WebNode('F', webNode.giro);
            }
            case 'B': {
                return this.goIn(webNode);
            }
            case 'C': {
                return new WebNode('D', webNode.giro);
            }
            case 'D': {
                return webNode;
            }
            case 'E': {
                return this.goOut(webNode);
            }
            case 'F': {
                return new WebNode('E', webNode.giro);
            }
            case 'Z': {
                return new WebNode('E', 0);
            }
            default: {
                return webNode;
            }
        }
    }

    getNodeOnBottomLeft(webNode: WebNode) {
        switch (webNode.ramo) {
            case 'A': {
                return webNode;
            }
            case 'B': {
                return this.goIn(webNode);
            }
            case 'C': {
                return this.goIn(webNode);
            }
            case 'D': {
                return new WebNode('E', webNode.giro);
            }
            case 'E': {
                return webNode;
            }
            case 'F': {
                return this.goOut(webNode);
            }
            case 'Z': {
                return new WebNode('F', 0);
            }
            default: {
                return webNode;
            }
        }
    }

    getNodeOnLeft(webNode: WebNode) {
        switch (webNode.ramo) {
            case 'A': {
                return webNode;
            }
            case 'B': {
                return new WebNode('A', webNode.giro);
            }
            case 'C': {
                return this.goIn(webNode);
            }
            case 'D': {
                return new WebNode('E', webNode.giro);
            }
            case 'E': {
                return webNode;
            }
            case 'F': {
                return this.goOut(webNode);
            }
            case 'Z': {
                return new WebNode('F', 0);
            }
            default: {
                return webNode;
            }
        }
    }

    getNodeOnTopLeft(webNode: WebNode) {
        switch (webNode.ramo) {
            case 'A': {
                return this.goOut(webNode);
            }
            case 'B': {
                return webNode;
            }
            case 'C': {
                return new WebNode('B', webNode.giro);
            }
            case 'D': {
                return this.goIn(webNode);
            }
            case 'E': {
                return new WebNode('F', webNode.giro);
            }
            case 'F': {
                return webNode;
            }
            case 'Z': {
                return new WebNode('A', 0);
            }
            default: {
                return webNode;
            }
        }
    }

    private goOut(webNode: WebNode) {
        let newGiro = webNode.giro < 3 ? webNode.giro + 1 : webNode.giro;
        return new WebNode(webNode.ramo, newGiro)
    }

    private goIn(webNode: WebNode) {
        if (webNode.giro > 0) {
            return new WebNode(webNode.ramo, webNode.giro-1)
        } else {
            return new WebNode('Z', 0);
        }
    }

    addToRandomLine(texture: string) {
        let line = this.getRandomLine();
        line.insect = true;
        let insect = this.scene.add.image(line.point.x, line.point.y, texture);
        this.scene.time.delayedCall(2000, this.doSomething, [insect, line], this);
    }

    doSomething(insect, line) {
        insect.destroy();
        line.insect = false;
        line.sprite = this.scene.add.image(line.point.x, line.point.y, 'hole');
        line.broken = true;
    }

    hasInsectBetween(from: WebNode, to: WebNode) {
        if (this.isMovingOnRamo(from, to)) {
            return false;
        } else {
            if (this[from.ramo+to.ramo]) {
                return this[from.ramo+to.ramo][from.giro].insect;
            } else {
                return this[to.ramo+from.ramo][from.giro].insect;
            }
        }
    }

    isBrokenBetween(from: WebNode, to: WebNode) {
        if (this.isMovingOnRamo(from, to)) {
            return false;
        } else {
            if (this[from.ramo+to.ramo]) {
                return this[from.ramo+to.ramo][from.giro].broken;
            } else {
                return this[to.ramo+from.ramo][from.giro].broken;
            }
        }
    }

    private isMovingOnRamo(from: WebNode, to: WebNode) {
        return from.ramo === 'Z' || to.ramo === 'Z' || from.ramo === to.ramo;
    }
    repairBetween(from: WebNode, to: WebNode) {
        if (this[from.ramo+to.ramo]) {
            this[from.ramo+to.ramo][from.giro].sprite.destroy();
            this[from.ramo+to.ramo][from.giro].broken = false;
        } else {
            this[to.ramo+from.ramo][from.giro].sprite.destroy();
            this[to.ramo+from.ramo][from.giro].broken = false;
        }
    }
}
