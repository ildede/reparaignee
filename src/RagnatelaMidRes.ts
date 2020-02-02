import * as Phaser from "phaser";
import {WebNode} from "./WebNode";
import Point = Phaser.Geom.Point;

export class RagnatelaMidRes extends Phaser.GameObjects.Image {

    private A: Array<{point: Point}>;
    private B: Array<{point: Point}>;
    private C: Array<{point: Point}>;
    private D: Array<{point: Point}>;
    private E: Array<{point: Point}>;
    private F: Array<{point: Point}>;
    private G: Array<{point: Point}>;
    private H: Array<{point: Point}>;
    private Z: Array<{point: Point}>;

    private AB: Array<{point: Point, insect: boolean, bonus: boolean, broken: boolean, sprite: Phaser.GameObjects.Image }>;
    private BC: Array<{point: Point, insect: boolean, bonus: boolean, broken: boolean, sprite: Phaser.GameObjects.Image }>;
    private CD: Array<{point: Point, insect: boolean, bonus: boolean, broken: boolean, sprite: Phaser.GameObjects.Image }>;
    private DE: Array<{point: Point, insect: boolean, bonus: boolean, broken: boolean, sprite: Phaser.GameObjects.Image }>;
    private EF: Array<{point: Point, insect: boolean, bonus: boolean, broken: boolean, sprite: Phaser.GameObjects.Image }>;
    private FG: Array<{point: Point, insect: boolean, bonus: boolean, broken: boolean, sprite: Phaser.GameObjects.Image }>;
    private GH: Array<{point: Point, insect: boolean, bonus: boolean, broken: boolean, sprite: Phaser.GameObjects.Image }>;
    private HA: Array<{point: Point, insect: boolean, bonus: boolean, broken: boolean, sprite: Phaser.GameObjects.Image }>;

    constructor(scene: Phaser.Scene, texture: string) {
        super(
            scene,
            scene.scale.width/2,
            scene.scale.height/2,
            texture
        );
        scene.add.existing(this);

        this.A = [
            { point: new Point(189,144) },
            { point: new Point(173,120) },
            { point: new Point(161,102) },
            { point: new Point(146,80) },
            ];
        this.B = [
            { point: new Point(226,139) },
            { point: new Point(232,119) },
            { point: new Point(238,91) },
            { point: new Point(245,63) },
        ];
        this.C = [
            { point: new Point(252,154) },
            { point: new Point(272,137) },
            { point: new Point(290,124) },
            { point: new Point(310,108) },
            ];
        this.D = [
            { point: new Point(263,178) },
            { point: new Point(290,176) },
            { point: new Point(309,174) },
            { point: new Point(330,173) },
            ];
        this.E = [
            { point: new Point(240,220) },
            { point: new Point(255,245) },
            { point: new Point(275,274) },
            { point: new Point(291,299) },
            ];
        this.F = [
            { point: new Point(203,232) },
            { point: new Point(194,267) },
            { point: new Point(190,291) },
            { point: new Point(181,324) },
            ];
        this.G = [
            { point: new Point(184,210) },
            { point: new Point(161,227) },
            { point: new Point(141,241) },
            { point: new Point(122,258) },
            ];
        this.H = [
            { point: new Point(174,186) },
            { point: new Point(148,188) },
            { point: new Point(127,190) },
            { point: new Point(95,193) },
            ];
        this.AB = [
            { point: new Point(208,145), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(205,123), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(204,104), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(196,83), insect: false, bonus: false, broken: false, sprite: null },
            ];
        this.BC = [
            { point: new Point(237,149), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(247,133), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(258,113), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(274,91), insect: false, bonus: false, broken: false, sprite: null },
            ];
        this.CD = [
            { point: new Point(257,165), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(279,158), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(297,151), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(318,142), insect: false, bonus: false, broken: false, sprite: null },
            ];
        this.DE = [
            { point: new Point(251,198), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(269,207), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(285,212), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(308,224), insect: false, bonus: false, broken: false, sprite: null },
            ];
        this.EF = [
            { point: new Point(220,224), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(228,249), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(227,276), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(239,302), insect: false, bonus: false, broken: false, sprite: null },
            ];
        this.FG = [
            { point: new Point(191,218), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(177,243), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(165,260), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(149,282), insect: false, bonus: false, broken: false, sprite: null },
            ];
        this.GH = [
            { point: new Point(180,197), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(154,204), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(135,214), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(110,220), insect: false, bonus: false, broken: false, sprite: null },
            ];
        this.HA = [
            { point: new Point(184,166), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(162,157), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(149,142), insect: false, bonus: false, broken: false, sprite: null },
            { point: new Point(123,138), insect: false, bonus: false, broken: false, sprite: null },
            ];
        this.Z = [{ point: new Point(215,184) }];
    }

    getStartingNode() {
        return new WebNode('Z', 0);
    }

    private getRandomLine() {
        let ramo = Math.floor(Math.random() * 8);
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
                node = this.randomLineFrom('FG');
                break;
            }
            case 6: {
                node = this.randomLineFrom('GH');
                break;
            }
            case 7: {
                node = this.randomLineFrom('HA');
                break;
            }
        }
        if (node.broken || node.insect || node.bonus) {
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
                return this.goOut(webNode);
            }
            case 'B': {
                return this.goOut(webNode);
            }
            case 'C': {
                return new WebNode('B', webNode.giro);
            }
            case 'D': {
                return new WebNode('C', webNode.giro);
            }
            case 'E': {
                return new WebNode('D', webNode.giro);
            }
            case 'F': {
                return this.goIn(webNode);
            }
            case 'G': {
                return new WebNode('H', webNode.giro);
            }
            case 'H': {
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
                return new WebNode('B', webNode.giro);
            }
            case 'B': {
                return this.goOut(webNode);
            }
            case 'C': {
                return this.goOut(webNode);
            }
            case 'D': {
                return this.goOut(webNode);
            }
            case 'E': {
                return new WebNode('D', webNode.giro);
            }
            case 'F': {
                return new WebNode('E', webNode.giro);
            }
            case 'G': {
                return this.goIn(webNode);
            }
            case 'H': {
                return new WebNode('A', webNode.giro);
            }
            case 'Z': {
                return new WebNode('C', 0);
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
                return new WebNode('C', webNode.giro);
            }
            case 'C': {
                return this.goOut(webNode);
            }
            case 'D': {
                return this.goOut(webNode);
            }
            case 'E': {
                return new WebNode('D', webNode.giro);
            }
            case 'F': {
                return new WebNode('E', webNode.giro);
            }
            case 'G': {
                return this.goIn(webNode);
            }
            case 'H': {
                return this.goIn(webNode);
            }
            case 'Z': {
                return new WebNode('D', 0);
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
            case 'G': {
                return new WebNode('F', webNode.giro);
            }
            case 'H': {
                return new WebNode('G', webNode.giro);
            }
            case 'Z': {
                return new WebNode('E', 0);
            }
            default: {
                return webNode;
            }
        }
    }

    getNodeOnBottom(webNode: WebNode) {
        switch (webNode.ramo) {
            case 'A': {
                return new WebNode('H', webNode.giro);
            }
            case 'B': {
                return this.goIn(webNode);
            }
            case 'C': {
                return new WebNode('D', webNode.giro);
            }
            case 'D': {
                return new WebNode('E', webNode.giro);
            }
            case 'E': {
                return this.goOut(webNode);
            }
            case 'F': {
                return this.goOut(webNode);
            }
            case 'G': {
                return new WebNode('F', webNode.giro);
            }
            case 'H': {
                return new WebNode('G', webNode.giro);
            }
            case 'Z': {
                return new WebNode('F', 0);
            }
            default: {
                return webNode;
            }
        }
    }

    getNodeOnBottomLeft(webNode: WebNode) {
        switch (webNode.ramo) {
            case 'A': {
                return new WebNode('H', webNode.giro);
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
                return new WebNode('F', webNode.giro);
            }
            case 'F': {
                return this.goOut(webNode);
            }
            case 'G': {
                return this.goOut(webNode);
            }
            case 'H': {
                return webNode;
            }
            case 'Z': {
                return new WebNode('G', 0);
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
                return new WebNode('B', webNode.giro);
            }
            case 'D': {
                return this.goIn(webNode);
            }
            case 'E': {
                return new WebNode('F', webNode.giro);
            }
            case 'F': {
                return new WebNode('G', webNode.giro);
            }
            case 'G': {
                return this.goOut(webNode);
            }
            case 'H': {
                return this.goOut(webNode);
            }
            case 'Z': {
                return new WebNode('H', 0);
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
                return new WebNode('A', webNode.giro);
            }
            case 'C': {
                return new WebNode('B', webNode.giro);
            }
            case 'D': {
                return new WebNode('C', webNode.giro);
            }
            case 'E': {
                return this.goIn(webNode);
            }
            case 'F': {
                return new WebNode('G', webNode.giro);
            }
            case 'G': {
                return new WebNode('H', webNode.giro);
            }
            case 'H': {
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

    addInsectToRandomLine(texture: string, destroyDelay = 1500) {
        let line = this.getRandomLine();
        line.insect = true;
        let insect = this.scene.add.image(line.point.x, line.point.y, texture);
        this.scene.time.delayedCall(destroyDelay, this.destroyInsect, [insect, line], this);
    }

    destroyInsect(insect, line) {
        insect.destroy();
        line.insect = false;
        line.sprite = this.scene.add.image(line.point.x, line.point.y, 'hole');
        line.broken = true;
    }

    addBonusToRandomLine(texture: string, destroydelay = 3000) {
        let line = this.getRandomLine();
        line.bonus = true;
        let bonus = this.scene.add.image(line.point.x, line.point.y, texture);
        this.scene.time.delayedCall(destroydelay, this.destroyBonus, [bonus, line], this);
    }

    destroyBonus(bonus, line) {
        bonus.destroy();
        line.bonus = false;
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

    getLineBetween(from: WebNode, to: WebNode) {
        if (this[from.ramo+to.ramo]) {
            return this[from.ramo+to.ramo][from.giro];
        } else {
            return this[to.ramo+from.ramo][from.giro];
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
