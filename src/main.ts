import * as Phaser from 'phaser';
import {GameScene} from "./GameScene";

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Typeplay',

    type: Phaser.AUTO,
    zoom: 1,
    scale: {
        zoom: 5,
        width: 165,
        height: 165,
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
    scene: [GameScene]
};

export const game = new Phaser.Game(gameConfig);