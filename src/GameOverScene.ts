import * as Phaser from "phaser";
import {RagnoTitolo} from "./RagnoTitolo";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'GameOver'
};

export class GameOverScene extends Phaser.Scene {

    private space: Phaser.Input.Keyboard.Key;
    private dedica: Phaser.GameObjects.Image;
    private flip: boolean;
    private credit: Phaser.GameObjects.Image;

    constructor() {
        super(sceneConfig);
    }

    preload() {
        this.load.image('dedica', 'assets/sprites/dedica.png');
        this.load.image('delilah', 'assets/sprites/delilah.png');
        this.load.image('ildede', 'assets/sprites/ildede.png');
    }

    create() {
        this.dedica = this.add.image(this.scale.width/2,this.scale.height/2, 'dedica');
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.flip = true;
    }

    update() {

        if (Phaser.Input.Keyboard.JustDown(this.space)) {
            if (this.dedica) {
                this.dedica.destroy();
                this.dedica = null;
                this.add.image(this.scale.width/2,this.scale.height/2, 'alberi');
                this.credit = this.add.image(this.scale.width/2,this.scale.height/2, 'delilah');
            } else {
                if (this.flip) {
                    this.credit.destroy();
                    this.credit = this.add.image(this.scale.width/2,this.scale.height/2, 'ildede');
                } else {
                    this.credit.destroy();
                    this.credit = this.add.image(this.scale.width/2,this.scale.height/2, 'delilah');
                }
                this.flip = !this.flip;
            }
        }

    }
}