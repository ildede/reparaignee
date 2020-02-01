import * as Phaser from "phaser";
import {Ragnatela} from "./Ragnatela";
import Scene = Phaser.Scene;

export class Ragno extends Phaser.GameObjects.Image {

    private nodoAttuale: { ramo: string; giro: number };
    private ragantela: Ragnatela;

    constructor(scene: Scene, texture: string, ragnatela: Ragnatela) {
        let nodoRandom = ragnatela.getNodoRandom();
        let point = ragnatela[nodoRandom.ramo][nodoRandom.giro];
        super(scene, point.x, point.y, texture);
        scene.add.existing(this);
        this.nodoAttuale = nodoRandom;
        this.ragantela = ragnatela;
    }

    left() {
        if (this.nodoAttuale.ramo === 'A') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro < 3 ? this.nodoAttuale.giro + 1 : this.nodoAttuale.giro,
                ramo: 'A'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'B') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro,
                ramo: 'A'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'C') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro,
                ramo: 'B'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'D') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro > 0 ? this.nodoAttuale.giro - 1 : this.nodoAttuale.giro,
                ramo: 'D'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'E') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro,
                ramo: 'F'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'F') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro < 3 ? this.nodoAttuale.giro + 1 : this.nodoAttuale.giro,
                ramo: 'F'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
    }

    right() {
        if (this.nodoAttuale.ramo === 'A') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro,
                ramo: 'B'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'B') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro,
                ramo: 'C'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'C') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro < 3 ? this.nodoAttuale.giro + 1 : this.nodoAttuale.giro,
                ramo: 'C'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'D') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro < 3 ? this.nodoAttuale.giro + 1 : this.nodoAttuale.giro,
                ramo: 'D'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'E') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro,
                ramo: 'D'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'F') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro > 0 ? this.nodoAttuale.giro - 1 : this.nodoAttuale.giro,
                ramo: 'F'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
    }

    up() {
        if (this.nodoAttuale.ramo === 'A') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro < 3 ? this.nodoAttuale.giro + 1 : this.nodoAttuale.giro,
                ramo: 'A'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'B') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro < 3 ? this.nodoAttuale.giro + 1 : this.nodoAttuale.giro,
                ramo: 'B'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'C') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro,
                ramo: 'B'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'D') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro,
                ramo: 'C'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'E') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro > 0 ? this.nodoAttuale.giro - 1 : this.nodoAttuale.giro,
                ramo: 'E'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'F') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro,
                ramo: 'A'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
    }

    down() {
        if (this.nodoAttuale.ramo === 'A') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro,
                ramo: 'F'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'B') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro > 0 ? this.nodoAttuale.giro-1 : this.nodoAttuale.giro,
                ramo: 'B'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'C') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro,
                ramo: 'D'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'D') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro,
                ramo: 'E'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'E') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro < 3 ? this.nodoAttuale.giro+1 : this.nodoAttuale.giro,
                ramo: 'E'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
        if (this.nodoAttuale.ramo === 'F') {
            this.nodoAttuale = {
                giro: this.nodoAttuale.giro,
                ramo: 'E'
            };
            let nodo = this.ragantela.getNodo(this.nodoAttuale);
            this.setPosition(nodo.x, nodo.y);
            return;
        }
    }
}
