import * as Phaser from "phaser";
import Point = Phaser.Geom.Point;
import Scene = Phaser.Scene;
import {WebNode} from "./WebNode";

export class Ragnatela extends Phaser.GameObjects.Image {

    private A: Array<Point>;
    private B: Array<Point>;
    private C: Array<Point>;
    private D: Array<Point>;
    private E: Array<Point>;
    private F: Array<Point>;
    private Z: Array<Point>;

    constructor(scene: Scene, texture: string) {
        super(
            scene,
            scene.scale.width/2,
            scene.scale.height/2,
            texture
        );
        scene.add.existing(this);

        this.A = [
            new Point(69, 61),
            new Point(61, 56),
            new Point(53, 49),
            new Point(45, 44),
            ];
        this.B = [
            new Point(91, 58),
            new Point(95, 47),
            new Point(98, 39),
            new Point(101,27),
            ];
        this.C = [
            new Point(101,66),
            new Point(113,62),
            new Point(129,56),
            new Point(141,51),
            ];
        this.D = [
            new Point(100,83),
            new Point(109,91),
            new Point(119,98),
            new Point(129,104),
            ];
        this.E = [
            new Point(78,92),
            new Point(72,109),
            new Point(65,124),
            new Point(60,140),
            ];
        this.F = [
            new Point(66, 80),
            new Point(53, 85),
            new Point(43, 89),
            new Point(34, 92),
            ];
        this.Z = [new Point(85,73)];
    }

    getStartingNode() {
        return new WebNode('Z', 0, this.Z[0]);
    }

    getPoint(nodo: { ramo: string; giro: number }) {
        return this[nodo.ramo][nodo.giro];
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
                return new WebNode('C', webNode.giro, this.C[webNode.giro]);
            }
            case 'E': {
                return this.goIn(webNode);
            }
            case 'F': {
                return new WebNode('A', webNode.giro, this.A[webNode.giro]);
            }
            case 'Z': {
                return new WebNode('B', 0, this.B[0]);
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
                return new WebNode('B', 0, this.B[0]);
            }
            default: {
                return webNode;
            }
        }
    }

    getNodeOnRight(webNode: WebNode) {
        switch (webNode.ramo) {
            case 'A': {
                return new WebNode('B', webNode.giro, this.B[webNode.giro]);
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
                return new WebNode('D', webNode.giro, this.D[webNode.giro]);
            }
            case 'F': {
                return this.goIn(webNode);
            }
            case 'Z': {
                return new WebNode('C', 0, this.C[0]);
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
                return new WebNode('C', webNode.giro, this.C[webNode.giro]);
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
                return new WebNode('E', webNode.giro, this.E[webNode.giro]);
            }
            case 'Z': {
                return new WebNode('D', 0, this.D[0]);
            }
            default: {
                return webNode;
            }
        }

    }

    getNodeOnBottom(webNode: WebNode) {
        switch (webNode.ramo) {
            case 'A': {
                return new WebNode('F', webNode.giro, this.F[webNode.giro]);
            }
            case 'B': {
                return this.goIn(webNode);
            }
            case 'C': {
                return new WebNode('D', webNode.giro, this.D[webNode.giro]);
            }
            case 'D': {
                return webNode;
            }
            case 'E': {
                return this.goOut(webNode);
            }
            case 'F': {
                return new WebNode('E', webNode.giro, this.E[webNode.giro]);
            }
            case 'Z': {
                return new WebNode('E', 0, this.E[0]);
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
                return new WebNode('E', webNode.giro, this.E[webNode.giro]);
            }
            case 'E': {
                return webNode;
            }
            case 'F': {
                return this.goOut(webNode);
            }
            case 'Z': {
                return new WebNode('F', 0, this.F[0]);
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
                return new WebNode('A', webNode.giro, this.A[webNode.giro]);
            }
            case 'C': {
                return this.goIn(webNode);
            }
            case 'D': {
                return new WebNode('E', webNode.giro, this.E[webNode.giro]);
            }
            case 'E': {
                return webNode;
            }
            case 'F': {
                return this.goOut(webNode);
            }
            case 'Z': {
                return new WebNode('F', 0, this.F[0]);
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
                return new WebNode('B', webNode.giro, this.B[webNode.giro]);
            }
            case 'D': {
                return this.goIn(webNode);
            }
            case 'E': {
                return new WebNode('F', webNode.giro, this.F[webNode.giro]);
            }
            case 'F': {
                return webNode;
            }
            case 'Z': {
                return new WebNode('A', 0, this.A[0]);
            }
            default: {
                return webNode;
            }
        }
    }

    private goOut(webNode: WebNode) {
        let newGiro = webNode.giro < 3 ? webNode.giro + 1 : webNode.giro;
        return new WebNode(webNode.ramo, newGiro, this[webNode.ramo][newGiro])
    }

    private goIn(webNode: WebNode) {
        if (webNode.giro > 0) {
            return new WebNode(webNode.ramo, webNode.giro-1, this[webNode.ramo][webNode.giro-1])
        } else {
            return new WebNode('Z', 0, this.Z[0]);
        }
    }
}
