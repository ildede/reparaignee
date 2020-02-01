import * as Phaser from "phaser";
import Point = Phaser.Geom.Point;
import Scene = Phaser.Scene;
import {WebNode} from "./WebNode";

export class Ragnatela extends Phaser.GameObjects.Image {

    A: Array<Point>;
    B: Array<Point>;
    C: Array<Point>;
    D: Array<Point>;
    E: Array<Point>;
    F: Array<Point>;

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
    }

    getNodoRandom() {
        let ramo = Math.floor(Math.random() * 6);
        switch (ramo) {
            case 0: {
                let giro = Math.floor(Math.random() * this.A.length);
                return new WebNode('A', giro, this.A[giro]);
            }
            case 1: {
                let giro = Math.floor(Math.random() * this.B.length);
                return new WebNode('B', giro, this.B[giro]);
            }
            case 2: {
                let giro = Math.floor(Math.random() * this.C.length);
                return new WebNode('C', giro, this.C[giro]);
            }
            case 3: {
                let giro = Math.floor(Math.random() * this.D.length);
                return new WebNode('D', giro, this.D[giro]);
            }
            case 4: {
                let giro = Math.floor(Math.random() * this.E.length);
                return new WebNode('E', giro, this.E[giro]);
            }
            case 5: {
                let giro = Math.floor(Math.random() * this.F.length);
                return new WebNode('F', giro, this.F[giro]);
            }
        }
    }

    getPoint(nodo: { ramo: string; giro: number }) {
        return this[nodo.ramo][nodo.giro];
    }

    getNodeOnLeft(webNode: WebNode) {
        if (webNode.ramo === 'A') {
            let newGiro = Ragnatela.goOut(webNode);
            return new WebNode('A', newGiro, this.A[newGiro]);
        } else
        if (webNode.ramo === 'B') {
            return new WebNode('A', webNode.giro, this.A[webNode.giro]);
        } else
        if (webNode.ramo === 'C') {
            let newGiro = Ragnatela.goIn(webNode);
            return new WebNode('C', newGiro, this.C[newGiro]);
        } else
        if (webNode.ramo === 'D') {
            let newGiro = Ragnatela.goIn(webNode);
            return new WebNode('D', newGiro, this.D[newGiro]);
        } else
        if (webNode.ramo === 'E') {
            return new WebNode('F', webNode.giro, this.F[webNode.giro]);
        } else
        if (webNode.ramo === 'F') {
            let newGiro = Ragnatela.goOut(webNode);
            return new WebNode('F', newGiro, this.F[newGiro]);
        }
    }

    getNodeOnRight(webNode: WebNode) {
        if (webNode.ramo === 'A') {
            return new WebNode('B', webNode.giro, this.B[webNode.giro]);
        } else
        if (webNode.ramo === 'B') {
            return new WebNode('C', webNode.giro, this.C[webNode.giro]);
        } else
        if (webNode.ramo === 'C') {
            let newGiro = Ragnatela.goOut(webNode);
            return new WebNode('C', newGiro, this.C[newGiro]);
        } else
        if (webNode.ramo === 'D') {
            let newGiro = Ragnatela.goOut(webNode);
            return new WebNode('D', newGiro, this.D[newGiro]);
        } else
        if (webNode.ramo === 'E') {
            return new WebNode('D', webNode.giro, this.D[webNode.giro]);
        } else
        if (webNode.ramo === 'F') {
            let newGiro = Ragnatela.goIn(webNode);
            return new WebNode('F', newGiro, this.F[newGiro]);
        }
    }

    getNodeOnTop(webNode: WebNode) {
        if (webNode.ramo === 'A') {
            let newGiro = Ragnatela.goOut(webNode);
            return new WebNode('A', newGiro, this.A[newGiro]);
        } else
        if (webNode.ramo === 'B') {
            let newGiro = Ragnatela.goOut(webNode);
            return new WebNode('B', newGiro, this.B[newGiro]);
        } else
        if (webNode.ramo === 'C') {
            return new WebNode('B', webNode.giro, this.B[webNode.giro]);
        } else
        if (webNode.ramo === 'D') {
            return new WebNode('C', webNode.giro, this.C[webNode.giro]);
        } else
        if (webNode.ramo === 'E') {
            let newGiro = Ragnatela.goIn(webNode);
            return new WebNode('E', newGiro, this.E[newGiro]);
        } else
        if (webNode.ramo === 'F') {
            return new WebNode('A', webNode.giro, this.A[webNode.giro]);
        }
    }

    getNodeOnBottom(webNode: WebNode) {
        if (webNode.ramo === 'A') {
            return new WebNode('F', webNode.giro, this.F[webNode.giro]);
        } else
        if (webNode.ramo === 'B') {
            let newGiro = Ragnatela.goIn(webNode);
            return new WebNode('B', newGiro, this.B[newGiro]);
        } else
        if (webNode.ramo === 'C') {
            return new WebNode('D', webNode.giro, this.D[webNode.giro]);
        } else
        if (webNode.ramo === 'D') {
            return new WebNode('E', webNode.giro, this.E[webNode.giro]);
        } else
        if (webNode.ramo === 'E') {
            let newGiro = Ragnatela.goOut(webNode);
            return new WebNode('E', newGiro, this.E[newGiro]);
        } else
        if (webNode.ramo === 'F') {
            return new WebNode('E', webNode.giro, this.E[webNode.giro]);
        }
    }

    private static goOut(webNode: WebNode) {
        return webNode.giro < 3 ? webNode.giro + 1 : webNode.giro;
    }

    private static goIn(webNode: WebNode) {
        return webNode.giro > 0 ? webNode.giro - 1 : webNode.giro;
    }
}
