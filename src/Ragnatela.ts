import * as Phaser from "phaser";
import Point = Phaser.Geom.Point;
import Scene = Phaser.Scene;
import {WebNode} from "./WebNode";

export class Ragnatela extends Phaser.GameObjects.Image {

    private A: Array<{point: Point, line: Point}>;
    private B: Array<{point: Point, line: Point}>;
    private C: Array<{point: Point, line: Point}>;
    private D: Array<{point: Point, line: Point}>;
    private E: Array<{point: Point, line: Point}>;
    private F: Array<{point: Point, line: Point}>;
    private Z: Array<{point: Point, line: Point}>;

    constructor(scene: Scene, texture: string) {
        super(
            scene,
            scene.scale.width/2,
            scene.scale.height/2,
            texture
        );
        scene.add.existing(this);

        this.A = [
            { point: new Point(69, 61), line:new Point(82,58) },
            { point: new Point(61, 56), line: new Point(79,51) },
            { point: new Point(53, 49), line: new Point(77,45) },
            { point: new Point(45, 44), line: new Point(73,35) },
            ];
        this.B = [
            { point: new Point(91, 58), line: new Point(96,62) },
            { point: new Point(95, 47), line: new Point(102,53) },
            { point: new Point(98, 39), line: new Point(110,47) },
            { point: new Point(101,27), line: new Point(120,40) },
            ];
        this.C = [
            { point: new Point(101,66), line: new Point(101,73) },
            { point: new Point(113,62), line: new Point(112,75) },
            { point: new Point(129,56), line: new Point(121,76) },
            { point: new Point(141,51), line: new Point(132,77) },
            ];
        this.D = [
            { point: new Point(100,83), line: new Point(89,88) },
            { point: new Point(109,91), line: new Point(90,99) },
            { point: new Point(119,98), line: new Point(94,109) },
            { point: new Point(129,104), line: new Point(97,115) },
            ];
        this.E = [
            { point: new Point(78,92), line: new Point(72,87) },
            { point: new Point(72,109), line: new Point(63,95) },
            { point: new Point(65,124), line: new Point(54,106) },
            { point: new Point(60,140), line: new Point(48,111) },
            ];
        this.F = [
            { point: new Point(66, 80), line: new Point(67,70) },
            { point: new Point(53, 85), line: new Point(58,69) },
            { point: new Point(43, 89), line: new Point(49,67) },
            { point: new Point(34, 92), line: new Point(39,67) },
            ];
        this.Z = [{ point: new Point(85,73), line: new Point(85,73) }];
    }

    getStartingNode() {
        return new WebNode('Z', 0);
    }

    getRandomLine() {
        let ramo = Math.floor(Math.random() * 6);
        switch (ramo) {
            case 0: {
                let giro = Math.floor(Math.random() * this.A.length);
                return this.A[giro].line;
            }
            case 1: {
                let giro = Math.floor(Math.random() * this.B.length);
                return this.B[giro].line;
            }
            case 2: {
                let giro = Math.floor(Math.random() * this.C.length);
                return this.C[giro].line;
            }
            case 3: {
                let giro = Math.floor(Math.random() * this.D.length);
                return this.D[giro].line;
            }
            case 4: {
                let giro = Math.floor(Math.random() * this.E.length);
                return this.E[giro].line;
            }
            case 5: {
                let giro = Math.floor(Math.random() * this.F.length);
                return this.F[giro].line;
            }
        }
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
}
