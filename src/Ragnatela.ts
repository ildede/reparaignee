import * as Phaser from "phaser";
import Point = Phaser.Geom.Point;
import Scene = Phaser.Scene;
import {WebNode} from "./WebNode";

export class Ragnatela extends Phaser.GameObjects.Image {

    private A: Array<{point: Point, line: Point, insect: boolean, broken: boolean}>;
    private B: Array<{point: Point, line: Point, insect: boolean, broken: boolean}>;
    private C: Array<{point: Point, line: Point, insect: boolean, broken: boolean}>;
    private D: Array<{point: Point, line: Point, insect: boolean, broken: boolean}>;
    private E: Array<{point: Point, line: Point, insect: boolean, broken: boolean}>;
    private F: Array<{point: Point, line: Point, insect: boolean, broken: boolean}>;
    private Z: Array<{point: Point, line: Point, insect: boolean, broken: boolean}>;

    constructor(scene: Scene, texture: string) {
        super(
            scene,
            scene.scale.width/2,
            scene.scale.height/2,
            texture
        );
        scene.add.existing(this);

        this.A = [
            { point: new Point(69, 61), line: new Point(82,58), insect: false, broken: false },
            { point: new Point(61, 56), line: new Point(79,51), insect: false, broken: false },
            { point: new Point(53, 49), line: new Point(77,45), insect: false, broken: false },
            { point: new Point(45, 44), line: new Point(73,35), insect: false, broken: false },
            ];
        this.B = [
            { point: new Point(91, 58), line: new Point(96,62), insect: false, broken: false },
            { point: new Point(95, 47), line: new Point(102,53), insect: false, broken: false },
            { point: new Point(98, 39), line: new Point(110,47), insect: false, broken: false },
            { point: new Point(101,27), line: new Point(120,40), insect: false, broken: false },
            ];
        this.C = [
            { point: new Point(101,66), line: new Point(101,73), insect: false, broken: false },
            { point: new Point(113,62), line: new Point(112,75), insect: false, broken: false },
            { point: new Point(129,56), line: new Point(121,76), insect: false, broken: false },
            { point: new Point(141,51), line: new Point(132,77), insect: false, broken: false },
            ];
        this.D = [
            { point: new Point(100,83), line: new Point(89,88), insect: false, broken: false },
            { point: new Point(109,91), line: new Point(90,99), insect: false, broken: false },
            { point: new Point(119,98), line: new Point(94,109), insect: false, broken: false },
            { point: new Point(129,104), line: new Point(97,115), insect: false, broken: false },
            ];
        this.E = [
            { point: new Point(78,92), line: new Point(72,87), insect: false, broken: false },
            { point: new Point(72,109), line: new Point(63,95), insect: false, broken: false },
            { point: new Point(65,124), line: new Point(54,106), insect: false, broken: false },
            { point: new Point(60,140), line: new Point(48,111), insect: false, broken: false },
            ];
        this.F = [
            { point: new Point(66, 80), line: new Point(67,70), insect: false, broken: false },
            { point: new Point(53, 85), line: new Point(58,69), insect: false, broken: false },
            { point: new Point(43, 89), line: new Point(49,67), insect: false, broken: false },
            { point: new Point(34, 92), line: new Point(39,67), insect: false, broken: false },
            ];
        this.Z = [{ point: new Point(85,73), line: new Point(85,73), insect: false, broken: false }];
    }

    getStartingNode() {
        return new WebNode('Z', 0);
    }

    private getRandomNode() {
        let ramo = Math.floor(Math.random() * 6);
        let node;
        switch (ramo) {
            case 0: {
                node = this.randomNodeFrom('A');
                break;
            }
            case 1: {
                node = this.randomNodeFrom('B');
                break;
            }
            case 2: {
                node = this.randomNodeFrom('C');
                break;
            }
            case 3: {
                node = this.randomNodeFrom('D');
                break;
            }
            case 4: {
                node = this.randomNodeFrom('E');
                break;
            }
            case 5: {
                node = this.randomNodeFrom('F');
                break;
            }
        }
        if (node.broken || node.insect) {
            return this.getRandomNode();
        } else {
            return node;
        }
    }

    private randomNodeFrom(ramo: string) {
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
        let node = this.getRandomNode();
        node.insect = true;
        this.scene.add.image(node.line.x,node.line.y, texture);
    }
}
