import * as Phaser from "phaser";
import {RagnoTitolo} from "./RagnoTitolo";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: true,
    visible: true,
    key: 'Titolo'
};

export class TitleScene extends Phaser.Scene {

    private ragno: RagnoTitolo;
    private start: Phaser.Input.Keyboard.Key;

    constructor() {
        super(sceneConfig);
    }

    preload() {
        this.load.audio('spidermove', 'assets/audio/spidermove.mp3');
        this.load.image('alberi', 'assets/sprites/alberimidres.png');
        this.load.image('sfondo', 'assets/sprites/prosfondo.png');
        this.load.image('mantide', 'assets/sprites/mantidemidres.png');
        this.load.image('titolo', 'assets/sprites/titolo.png');
        this.load.spritesheet('ragnosheet',
            'assets/sprites/ragnosheet.png',
            { frameWidth: 89, frameHeight: 87 }
        );
    }

    create() {
        this.add.image(this.scale.width/2,this.scale.height/2, 'sfondo');
        this.add.image(this.scale.width/2,this.scale.height/2, 'alberi');
        this.add.image(this.scale.width/2,this.scale.height/2, 'titolo');
        this.add.image(300,340, 'mantide');
        this.ragno = new RagnoTitolo(this, 'ragnosheet');
        this.start = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (this.ragno.isMoving()) {
            this.ragno.updatePosition();
        } else {
            if (Phaser.Input.Keyboard.JustDown(this.start)) {
                this.scene.switch('Game');
            }
        }
    }
}