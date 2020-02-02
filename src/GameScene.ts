import * as Phaser from "phaser";
import {Ragno} from "./Ragno";
import {RagnatelaMidRes} from "./RagnatelaMidRes";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game'
};

export class GameScene extends Phaser.Scene {

    private readonly MAX_HOLE_COUNT = 35;

    private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
    private ragno: Ragno;
    private ragnatela: RagnatelaMidRes;
    private up1: Phaser.Input.Keyboard.Key;
    private upRight1: Phaser.Input.Keyboard.Key;
    private right1: Phaser.Input.Keyboard.Key;
    private downRight1: Phaser.Input.Keyboard.Key;
    private down1: Phaser.Input.Keyboard.Key;
    private downLeft1: Phaser.Input.Keyboard.Key;
    private left1: Phaser.Input.Keyboard.Key;
    private upLeft1: Phaser.Input.Keyboard.Key;
    private up2: Phaser.Input.Keyboard.Key;
    private upRight2: Phaser.Input.Keyboard.Key;
    private right2: Phaser.Input.Keyboard.Key;
    private downRight2: Phaser.Input.Keyboard.Key;
    private down2: Phaser.Input.Keyboard.Key;
    private downLeft2: Phaser.Input.Keyboard.Key;
    private left2: Phaser.Input.Keyboard.Key;
    private upLeft2: Phaser.Input.Keyboard.Key;
    private alreadyDown: boolean;
    private space: Phaser.Input.Keyboard.Key;

    private mantideEvent: boolean;
    private mantideImage: Phaser.GameObjects.Image;

    constructor() {
        super(sceneConfig);
    }

    preload() {
        this.load.audio('flycatch', 'assets/audio/flycatch.mp3');
        // this.load.audio('spidermove', 'assets/audio/spidermove.mp3');
        this.load.audio('spiderrepair', 'assets/audio/webrepair.mp3');
        this.load.audio('music', 'assets/audio/music.mp3');
        this.load.audio('birds', 'assets/audio/birds.mp3');
        this.load.image('ragnatela', 'assets/sprites/ragnatelamidres.png');
        // this.load.image('sfondo', 'assets/sprites/prosfondo.png');
        this.load.image('alberi', 'assets/sprites/alberimidres.png');
        this.load.image('mantideninja', 'assets/sprites/mantininjamidres.png');
        this.load.image('ragno', 'assets/sprites/ragnomidres.png');
        this.load.image('tipula', 'assets/sprites/tipulamidres.png');
        this.load.image('falena', 'assets/sprites/falenamidres.png');
        this.load.image('coccinella', 'assets/sprites/coccinellamidres.png');
        this.load.image('hole', 'assets/sprites/hole.png');
        this.load.image('caffe', 'assets/sprites/caffemidres.png');
        this.load.image('pillola', 'assets/sprites/pillolamidres.png');
        this.load.image('fungo', 'assets/sprites/fungomidres.png');
        // this.load.spritesheet('ragnosheet',
        //     'assets/sprites/ragnosheet.png',
        //     { frameWidth: 89, frameHeight: 87 }
        // );
        this.load.image('particle', 'assets/sprites/particle.png');
    }

    create() {
        this.sound.play('music', {
            volume: .2,
            loop: true,
        });
        this.sound.play('birds', {
            volume: .6,
            loop: true,
        });
        this.add.image(this.scale.width/2,this.scale.height/2, 'sfondo');
        this.ragnatela = new RagnatelaMidRes(this, 'ragnatela');
        this.add.image(this.scale.width/2,this.scale.height/2, 'alberi');
        this.ragno = new Ragno(this, 'ragnosheet', this.ragnatela);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.up1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.upRight1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.right1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.downRight1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.down1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        this.downLeft1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        this.left1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.upLeft1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.up2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.EIGHT);
        this.upRight2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NINE);
        this.right2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX);
        this.downRight2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
        this.down2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        this.downLeft2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        this.left2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
        this.upLeft2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN);
        this.alreadyDown = false;
        this.mantideEvent = false;
        var insectTimer = this.time.addEvent({
            delay: 3000,
            callback: this.addRandomInsect,
            args: [],
            callbackScope: this,
            loop: true,
            startAt: 1000,
            timeScale: 1,
            paused: false
        });
        var bonusTimer = this.time.addEvent({
            delay: 5000,
            callback: this.addRandomBonus,
            args: [],
            callbackScope: this,
            loop: true,
            startAt: 4000,
            timeScale: 1,
            paused: false
        });
        var mantideTimer = this.time.addEvent({
            delay: 5000,
            callback: this.startMantideEvent,
            args: [],
            callbackScope: this,
            loop: true,
            startAt: 2000,
            timeScale: 1,
            paused: false
        });
    }

    startMantideEvent() {
        if (!this.mantideEvent && !this.ragno.dead) {
            this.mantideEvent = true;
            this.mantideImage = this.add.image(300,340, 'mantide');
            this.time.delayedCall(10000, this.stopMantideEvent, [], this);
        }
    }

    stopMantideEvent() {
        if (!this.ragno.dead && this.mantideEvent) {
            if (this.ragno.conninellaTakenCount > 2) {
                console.log('HAPPY mantide con coccinelle', this.ragno.conninellaTakenCount);
            } else {
                this.ragnatela.brokeFourLines();
                console.log('NINJA mantide con coccinelle', this.ragno.conninellaTakenCount);
            }
            this.mantideEvent = false;
            this.mantideImage.destroy();
            this.ragno.conninellaTakenCount = 0;
        }
    }

    addRandomInsect() {
        if (!this.ragno.dead) {
            if (!this.mantideEvent) {
                this.sound.play('flycatch', {
                    volume: 1.5
                });
                switch (Math.floor(Math.random() * 3)) {
                    case 0: {
                        this.time.delayedCall(600, this.addRandomTipula, [false], this);
                        break;
                    }
                    case 1: {
                        this.time.delayedCall(600, this.addRandomFalena, [true], this);
                        break;
                    }
                    case 2: {
                        this.time.delayedCall(600, this.addRandomCoccinella, [true], this);
                        break;
                    }
                }
            } else {
                this.sound.play('flycatch', {
                    volume: 1.5
                });
                this.time.delayedCall(600, this.addRandomCoccinella, [true], this);
            }
        }


    }

    addRandomBonus() {
        if (!this.mantideEvent && !this.ragno.dead) {
            switch (Math.floor(Math.random() * 3)) {
                case 0: {
                    console.log('niente bonus questa volta');
                    break;
                }
                case 1: {
                    this.ragnatela.addBonusToRandomLine('caffe');
                    break;
                }
                case 2: {
                    this.ragnatela.addBonusToRandomLine('fungo');
                    break;
                }
            }
        }
    }

    addRandomTipula(edible: boolean) {
        this.ragnatela.addInsectToRandomLine('tipula', edible);
    }

    addRandomFalena(edible: boolean) {
        this.ragnatela.addInsectToRandomLine('falena', edible , 4000);
    }

    addRandomCoccinella(edible: boolean) {
        this.ragnatela.addInsectToRandomLine('coccinella', edible, 5000);
    }

    update() {
        if (this.ragnatela.holeCount > this.MAX_HOLE_COUNT) {
            if (!this.ragno.dead) {
                this.ragno.gameOver();
            } else {

                if (Phaser.Input.Keyboard.JustDown(this.space)) {
                    this.scene.switch('GameOver');
                }
            }
        } else {
            if (this.ragno.isMoving()) {
                this.ragno.updatePosition();
            } else {
                if (this.input.activePointer.isDown) {
                    if (!this.alreadyDown) {
                        this.alreadyDown = true;
                        console.log('X:' + this.input.activePointer.x);
                        console.log('Y:' + this.input.activePointer.y);
                    }
                } else {
                    this.alreadyDown = false;
                }

                if (Phaser.Input.Keyboard.JustDown(this.up1) || Phaser.Input.Keyboard.JustDown(this.up2)) {
                    this.ragno.up();
                }
                if (Phaser.Input.Keyboard.JustDown(this.upRight1) || Phaser.Input.Keyboard.JustDown(this.upRight2)) {
                    this.ragno.upRight();
                }
                if (Phaser.Input.Keyboard.JustDown(this.right1) || Phaser.Input.Keyboard.JustDown(this.right2)) {
                    this.ragno.right();
                }
                if (Phaser.Input.Keyboard.JustDown(this.downRight1) || Phaser.Input.Keyboard.JustDown(this.downRight2)) {
                    this.ragno.downRight();
                }
                if (Phaser.Input.Keyboard.JustDown(this.down1) || Phaser.Input.Keyboard.JustDown(this.down2)) {
                    this.ragno.down();
                }
                if (Phaser.Input.Keyboard.JustDown(this.downLeft1) || Phaser.Input.Keyboard.JustDown(this.downLeft2)) {
                    this.ragno.downLeft();
                }
                if (Phaser.Input.Keyboard.JustDown(this.left1) || Phaser.Input.Keyboard.JustDown(this.left2)) {
                    this.ragno.left();
                }
                if (Phaser.Input.Keyboard.JustDown(this.upLeft1) || Phaser.Input.Keyboard.JustDown(this.upLeft2)) {
                    this.ragno.upLeft();
                }

            }
            this.ragno.updateParticles();
        }
    }
}