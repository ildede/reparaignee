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
    private graphics: Phaser.GameObjects.Graphics;
    private alreadyDown: boolean;

    constructor() {
        super(sceneConfig);
    }

    preload() {
        this.load.image('background', 'assets/sprites/sfondo.png');
        this.load.image('alberi', 'assets/sprites/alberi.png');
        this.load.image('ragno', 'assets/sprites/ragno.png');
        this.load.image('tipula', 'assets/sprites/tipula.png');
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
        this.alreadyDown = false;

        this.graphics = this.add.graphics({
            lineStyle: {
                width: 1,
                color: 0x000000,
                alpha: 1
            },
            fillStyle: {
                color: 0x000000,
                alpha: 1
            }
        });
    }

    update() {
        if (this.input.activePointer.isDown) {
            if (!this.alreadyDown) {
                this.alreadyDown = true;
                console.log('X:' + this.input.activePointer.x);
                console.log('Y:' + this.input.activePointer.y);
                let line = this.ragnatela.getRandomLine();
                this.add.image(line.x,line.y, 'tipula');
                // var circle = new Phaser.Geom.Circle(line.x, line.y, 5);
                // this.graphics.fillCircleShape(circle);
            }
        } else {
            this.alreadyDown = false;
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