import * as Phaser from "phaser";
import Point = Phaser.Geom.Point;

export class WebNode {
    public point: Point;
    public ramo: string;
    public giro: number;
    private line: Point;

    constructor(ramo: string, giro: number, point: Point, line: Point) {
        this.ramo = ramo;
        this.giro = giro;
        this.point = point;
        this.line = line;
    }
}