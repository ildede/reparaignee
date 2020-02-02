import * as Phaser from 'phaser';
import {GameScene} from "./GameScene";
import {TitleScene} from "./TitleScene";
import {GameOverScene} from "./GameOverScene";

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Typeplay',

    type: Phaser.AUTO,
    zoom: 1,
    scale: {
        zoom: 2,
        width: 412,
        height: 412,
    },

    render: {
        pixelArt: true
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },

    parent: 'game',
    scene: [TitleScene, GameScene, GameOverScene],
};

export const game = new Phaser.Game(gameConfig);
