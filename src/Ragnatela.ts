import * as Phaser from "phaser";
import Point = Phaser.Geom.Point;
import Scene = Phaser.Scene;

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
        let number = Math.floor(Math.random() * 6);
        if (number === 0) {
            return {
                ramo: 'A',
                giro: Math.floor(Math.random() * this.A.length)
            }
        }
        if (number === 1) {
            return {
                ramo: 'B',
                giro: Math.floor(Math.random() * this.B.length)
            }
        }
        if (number === 2) {
            return {
                ramo: 'C',
                giro: Math.floor(Math.random() * this.C.length)
            }
        }
        if (number === 3) {
            return {
                ramo: 'D',
                giro: Math.floor(Math.random() * this.D.length)
            }
        }
        if (number === 4) {
            return {
                ramo: 'E',
                giro: Math.floor(Math.random() * this.E.length)
            }
        }
        if (number === 5) {
            return {
                ramo: 'F',
                giro: Math.floor(Math.random() * this.F.length)
            }
        }
    }

    getNodo(nodo: { ramo: string; giro: number }) {
        return this[nodo.ramo][nodo.giro];
    }
}
