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
    private up: Phaser.Input.Keyboard.Key;
    private upRight: Phaser.Input.Keyboard.Key;
    private right: Phaser.Input.Keyboard.Key;
    private downRight: Phaser.Input.Keyboard.Key;
    private down: Phaser.Input.Keyboard.Key;
    private downLeft: Phaser.Input.Keyboard.Key;
    private left: Phaser.Input.Keyboard.Key;
    private upLeft: Phaser.Input.Keyboard.Key;

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
        this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.upRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.downRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.downLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.upLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    }

    update() {
        if (this.input.activePointer.isDown) {
            console.log('X:' + this.input.activePointer.x);
            console.log('Y:' + this.input.activePointer.y);
        }

        if (Phaser.Input.Keyboard.JustDown(this.up)) {
            this.ragno.up();
        }
        if (Phaser.Input.Keyboard.JustDown(this.upRight)) {
            this.ragno.upRight();
        }
        if (Phaser.Input.Keyboard.JustDown(this.right)) {
            this.ragno.right();
        }
        if (Phaser.Input.Keyboard.JustDown(this.downRight)) {
            this.ragno.downRight();
        }
        if (Phaser.Input.Keyboard.JustDown(this.down)) {
            this.ragno.down();
        }
        if (Phaser.Input.Keyboard.JustDown(this.downLeft)) {
            this.ragno.downLeft();
        }
        if (Phaser.Input.Keyboard.JustDown(this.left)) {
            this.ragno.left();
        }
        if (Phaser.Input.Keyboard.JustDown(this.upLeft)) {
            this.ragno.upLeft();
        }


    }
}