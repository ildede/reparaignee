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
        return new WebNode('Z', 0, this.Z[0].point, this.Z[0].line);
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
                return new WebNode('C', webNode.giro, this.C[webNode.giro].point, this.C[webNode.giro].line);
            }
            case 'E': {
                return this.goIn(webNode);
            }
            case 'F': {
                return new WebNode('A', webNode.giro, this.A[webNode.giro].point, this.A[webNode.giro].line);
            }
            case 'Z': {
                return new WebNode('B', 0, this.B[0].point, this.B[0].line);
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
                return new WebNode('B', 0, this.B[0].point, this.B[0].line);
            }
            default: {
                return webNode;
            }
        }
    }

    getNodeOnRight(webNode: WebNode) {
        switch (webNode.ramo) {
            case 'A': {
                return new WebNode('B', webNode.giro, this.B[webNode.giro].point, this.B[webNode.giro].line);
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
                return new WebNode('D', webNode.giro, this.D[webNode.giro].point, this.B[webNode.giro].line);
            }
            case 'F': {
                return this.goIn(webNode);
            }
            case 'Z': {
                return new WebNode('C', 0, this.C[0].point, this.C[0].line);
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
                return new WebNode('C', webNode.giro, this.C[webNode.giro].point, this.C[webNode.giro].line);
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
                return new WebNode('E', webNode.giro, this.E[webNode.giro].point, this.E[webNode.giro].line);
            }
            case 'Z': {
                return new WebNode('D', 0, this.D[0].point, this.D[0].line);
            }
            default: {
                return webNode;
            }
        }

    }

    getNodeOnBottom(webNode: WebNode) {
        switch (webNode.ramo) {
            case 'A': {
                return new WebNode('F', webNode.giro, this.F[webNode.giro].point, this.F[webNode.giro].line);
            }
            case 'B': {
                return this.goIn(webNode);
            }
            case 'C': {
                return new WebNode('D', webNode.giro, this.D[webNode.giro].point, this.B[webNode.giro].line);
            }
            case 'D': {
                return webNode;
            }
            case 'E': {
                return this.goOut(webNode);
            }
            case 'F': {
                return new WebNode('E', webNode.giro, this.E[webNode.giro].point, this.E[webNode.giro].line);
            }
            case 'Z': {
                return new WebNode('E', 0, this.E[0].point, this.E[0].line);
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
                return new WebNode('E', webNode.giro, this.E[webNode.giro].point, this.E[webNode.giro].line);
            }
            case 'E': {
                return webNode;
            }
            case 'F': {
                return this.goOut(webNode);
            }
            case 'Z': {
                return new WebNode('F', 0, this.F[0].point, this.F[0].line);
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
                return new WebNode('A', webNode.giro, this.A[webNode.giro].point, this.A[webNode.giro].line);
            }
            case 'C': {
                return this.goIn(webNode);
            }
            case 'D': {
                return new WebNode('E', webNode.giro, this.E[webNode.giro].point, this.E[webNode.giro].line);
            }
            case 'E': {
                return webNode;
            }
            case 'F': {
                return this.goOut(webNode);
            }
            case 'Z': {
                return new WebNode('F', 0, this.F[0].point, this.F[0].line);
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
                return new WebNode('B', webNode.giro, this.B[webNode.giro].point, this.B[webNode.giro].line);
            }
            case 'D': {
                return this.goIn(webNode);
            }
            case 'E': {
                return new WebNode('F', webNode.giro, this.F[webNode.giro].point, this.F[webNode.giro].line);
            }
            case 'F': {
                return webNode;
            }
            case 'Z': {
                return new WebNode('A', 0, this.A[0].point, this.A[0].line);
            }
            default: {
                return webNode;
            }
        }
    }

    private goOut(webNode: WebNode) {
        let newGiro = webNode.giro < 3 ? webNode.giro + 1 : webNode.giro;
        return new WebNode(webNode.ramo, newGiro, this[webNode.ramo][newGiro].point, this[webNode.ramo][newGiro].line)
    }

    private goIn(webNode: WebNode) {
        if (webNode.giro > 0) {
            return new WebNode(webNode.ramo, webNode.giro-1, this[webNode.ramo][webNode.giro-1].point, this[webNode.ramo][webNode.giro-1].line)
        } else {
            return new WebNode('Z', 0, this.Z[0].point, this.Z[0].line);
        }
    }
}
