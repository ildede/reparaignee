import * as Phaser from "phaser";
import {Ragno} from "./Ragno";
import {Ragnatela} from "./Ragnatela";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: true,
    visible: true,
    key: 'Game'
};

export class GameScene extends Phaser.Scene {

    private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
    private ragno: Ragno;
    private ragnatela: Ragnatela;

    constructor() {
        super(sceneConfig);
    }

    preload() {
        this.load.image('background', 'assets/sprites/sfondo.png');
        this.load.image('alberi', 'assets/sprites/alberi.png');
        this.load.image('ragno', 'assets/sprites/ragno.png');
    }

    create() {
        this.ragnatela = new Ragnatela(this, 'background');
        this.add.image(this.scale.width/2,this.scale.height/2, 'alberi');
        this.ragno = new Ragno(this, 'ragno', this.ragnatela);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.input.activePointer.isDown) {
            console.log('X:' + this.input.activePointer.x);
            console.log('Y:' + this.input.activePointer.y);
        }
        if (Phaser.Input.Keyboard.JustDown(this.cursorKeys.left)) {
            console.log('left');
            this.ragno.left();
        }
        if (Phaser.Input.Keyboard.JustDown(this.cursorKeys.right)) {
            console.log('right');
            this.ragno.right();
        }
        if (Phaser.Input.Keyboard.JustDown(this.cursorKeys.up)) {
            console.log('up');
            this.ragno.up();
        }
        if (Phaser.Input.Keyboard.JustDown(this.cursorKeys.down)) {
            console.log('down');
            this.ragno.down();
        }


    }
}