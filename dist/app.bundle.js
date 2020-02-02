/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/GameOverScene.ts":
/*!******************************!*\
  !*** ./src/GameOverScene.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'GameOver'
};
var GameOverScene = /** @class */ (function (_super) {
    __extends(GameOverScene, _super);
    function GameOverScene() {
        return _super.call(this, sceneConfig) || this;
    }
    GameOverScene.prototype.preload = function () {
        this.load.image('dedica', 'assets/sprites/dedica.png');
        this.load.image('delilah', 'assets/sprites/delilah.png');
        this.load.image('ildede', 'assets/sprites/ildede.png');
    };
    GameOverScene.prototype.create = function () {
        this.dedica = this.add.image(this.scale.width / 2, this.scale.height / 2, 'dedica');
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.flip = true;
    };
    GameOverScene.prototype.update = function () {
        if (Phaser.Input.Keyboard.JustDown(this.space)) {
            if (this.dedica) {
                this.dedica.destroy();
                this.dedica = null;
                this.add.image(this.scale.width / 2, this.scale.height / 2, 'alberi');
                this.credit = this.add.image(this.scale.width / 2, this.scale.height / 2, 'delilah');
            }
            else {
                if (this.flip) {
                    this.credit.destroy();
                    this.credit = this.add.image(this.scale.width / 2, this.scale.height / 2, 'ildede');
                }
                else {
                    this.credit.destroy();
                    this.credit = this.add.image(this.scale.width / 2, this.scale.height / 2, 'delilah');
                }
                this.flip = !this.flip;
            }
        }
    };
    return GameOverScene;
}(Phaser.Scene));
exports.GameOverScene = GameOverScene;


/***/ }),

/***/ "./src/GameScene.ts":
/*!**************************!*\
  !*** ./src/GameScene.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var Ragno_1 = __webpack_require__(/*! ./Ragno */ "./src/Ragno.ts");
var RagnatelaMidRes_1 = __webpack_require__(/*! ./RagnatelaMidRes */ "./src/RagnatelaMidRes.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game'
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.MAX_HOLE_COUNT = 20;
        return _this;
    }
    GameScene.prototype.preload = function () {
        this.load.audio('coccinellaperninja', 'assets/audio/coccinella.wav');
        this.load.audio('gameovermusic', 'assets/audio/gameover.mp3');
        this.load.audio('ninjamantide', 'assets/audio/ninjamantide.mp3');
        this.load.audio('flycatch', 'assets/audio/flycatch.mp3');
        // this.load.audio('spidermove', 'assets/audio/spidermove.mp3');
        this.load.audio('spiderrepair', 'assets/audio/webrepair.mp3');
        this.load.audio('music', 'assets/audio/music.mp3');
        this.load.audio('birds', 'assets/audio/birds.mp3');
        this.load.image('fumetto', 'assets/sprites/fumettomidres.png');
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
    };
    GameScene.prototype.create = function () {
        this.sound.play('music', {
            volume: .2,
            loop: true,
        });
        this.sound.play('birds', {
            volume: .6,
            loop: true,
        });
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'sfondo');
        this.ragnatela = new RagnatelaMidRes_1.RagnatelaMidRes(this, 'ragnatela');
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'alberi');
        this.ragno = new Ragno_1.Ragno(this, 'ragnosheet', this.ragnatela);
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
            startAt: 1000,
            timeScale: 1,
            paused: false
        });
        var mantideTimer = this.time.addEvent({
            delay: 30000,
            callback: this.startMantideEvent,
            args: [],
            callbackScope: this,
            loop: true,
            startAt: 2000,
            timeScale: 1,
            paused: false
        });
    };
    GameScene.prototype.startMantideEvent = function () {
        if (!this.mantideEvent && !this.ragno.dead) {
            this.mantideEvent = true;
            this.mantideImage = this.add.image(300, 340, 'mantide');
            var fumetto = this.add.image(this.scale.width / 2, this.scale.height / 2, 'fumetto');
            fumetto.setDepth(99);
            this.time.delayedCall(2000, this.beginEvent, [fumetto], this);
        }
    };
    GameScene.prototype.beginEvent = function (fumetto) {
        fumetto.destroy();
        this.time.delayedCall(10000, this.stopMantideEvent, [], this);
    };
    GameScene.prototype.stopMantideEvent = function () {
        if (!this.ragno.dead && this.mantideEvent) {
            if (this.ragno.conninellaTakenCount > 2) {
                console.log('HAPPY mantide con coccinelle', this.ragno.conninellaTakenCount);
                this.mantideEvent = false;
                this.mantideImage.destroy();
                this.ragno.conninellaTakenCount = 0;
            }
            else {
                this.sound.play('ninjamantide');
                this.mantideImage.destroy();
                this.mantideImage = this.add.image(300, 340, 'mantideninja');
                this.ragnatela.brokeFourLines();
                this.time.delayedCall(1500, this.removeMantideNinja, [], this);
            }
        }
    };
    GameScene.prototype.removeMantideNinja = function () {
        this.mantideEvent = false;
        this.mantideImage.destroy();
        this.ragno.conninellaTakenCount = 0;
    };
    GameScene.prototype.addRandomInsect = function () {
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
            }
            else {
                this.sound.play('flycatch', {
                    volume: 1.5
                });
                this.time.delayedCall(600, this.addRandomCoccinella, [true], this);
            }
        }
    };
    GameScene.prototype.addRandomBonus = function () {
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
    };
    GameScene.prototype.addRandomTipula = function (edible) {
        this.ragnatela.addInsectToRandomLine('tipula', edible);
    };
    GameScene.prototype.addRandomFalena = function (edible) {
        this.ragnatela.addInsectToRandomLine('falena', edible, 4000);
    };
    GameScene.prototype.addRandomCoccinella = function (edible) {
        this.ragnatela.addInsectToRandomLine('coccinella', edible, 5000);
    };
    GameScene.prototype.update = function () {
        if (this.ragnatela.holeCount > this.MAX_HOLE_COUNT) {
            if (!this.ragno.dead) {
                this.sound.play('gameovermusic');
                this.ragno.gameOver();
            }
            else {
                if (Phaser.Input.Keyboard.JustDown(this.space)) {
                    this.scene.switch('GameOver');
                }
            }
        }
        else {
            if (this.ragno.isMoving()) {
                this.ragno.updatePosition();
            }
            else {
                if (this.input.activePointer.isDown) {
                    if (!this.alreadyDown) {
                        this.alreadyDown = true;
                        console.log('X:' + this.input.activePointer.x);
                        console.log('Y:' + this.input.activePointer.y);
                    }
                }
                else {
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
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/RagnatelaMidRes.ts":
/*!********************************!*\
  !*** ./src/RagnatelaMidRes.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var WebNode_1 = __webpack_require__(/*! ./WebNode */ "./src/WebNode.ts");
var Point = Phaser.Geom.Point;
var RagnatelaMidRes = /** @class */ (function (_super) {
    __extends(RagnatelaMidRes, _super);
    function RagnatelaMidRes(scene, texture) {
        var _this = _super.call(this, scene, scene.scale.width / 2, scene.scale.height / 2, texture) || this;
        scene.add.existing(_this);
        _this.holeCount = 0;
        _this.A = [
            { point: new Point(189, 144) },
            { point: new Point(173, 120) },
            { point: new Point(161, 102) },
            { point: new Point(146, 80) },
        ];
        _this.B = [
            { point: new Point(226, 139) },
            { point: new Point(232, 119) },
            { point: new Point(238, 91) },
            { point: new Point(245, 63) },
        ];
        _this.C = [
            { point: new Point(252, 154) },
            { point: new Point(272, 137) },
            { point: new Point(290, 124) },
            { point: new Point(310, 108) },
        ];
        _this.D = [
            { point: new Point(263, 178) },
            { point: new Point(290, 176) },
            { point: new Point(309, 174) },
            { point: new Point(330, 173) },
        ];
        _this.E = [
            { point: new Point(240, 220) },
            { point: new Point(255, 245) },
            { point: new Point(275, 274) },
            { point: new Point(291, 299) },
        ];
        _this.F = [
            { point: new Point(203, 232) },
            { point: new Point(194, 267) },
            { point: new Point(190, 291) },
            { point: new Point(181, 324) },
        ];
        _this.G = [
            { point: new Point(184, 210) },
            { point: new Point(161, 227) },
            { point: new Point(141, 241) },
            { point: new Point(122, 258) },
        ];
        _this.H = [
            { point: new Point(174, 186) },
            { point: new Point(148, 188) },
            { point: new Point(127, 190) },
            { point: new Point(95, 193) },
        ];
        _this.AB = [
            { point: new Point(208, 145), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(205, 123), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(204, 104), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(196, 83), insect: false, bonus: false, broken: false, edible: false, sprite: null },
        ];
        _this.BC = [
            { point: new Point(237, 149), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(247, 133), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(258, 113), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(274, 91), insect: false, bonus: false, broken: false, edible: false, sprite: null },
        ];
        _this.CD = [
            { point: new Point(257, 165), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(279, 158), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(297, 151), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(318, 142), insect: false, bonus: false, broken: false, edible: false, sprite: null },
        ];
        _this.DE = [
            { point: new Point(251, 198), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(269, 207), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(285, 212), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(308, 224), insect: false, bonus: false, broken: false, edible: false, sprite: null },
        ];
        _this.EF = [
            { point: new Point(220, 224), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(228, 249), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(227, 276), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(239, 302), insect: false, bonus: false, broken: false, edible: false, sprite: null },
        ];
        _this.FG = [
            { point: new Point(191, 218), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(177, 243), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(165, 260), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(149, 282), insect: false, bonus: false, broken: false, edible: false, sprite: null },
        ];
        _this.GH = [
            { point: new Point(180, 197), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(154, 204), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(135, 214), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(110, 220), insect: false, bonus: false, broken: false, edible: false, sprite: null },
        ];
        _this.HA = [
            { point: new Point(184, 166), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(162, 157), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(149, 142), insect: false, bonus: false, broken: false, edible: false, sprite: null },
            { point: new Point(123, 138), insect: false, bonus: false, broken: false, edible: false, sprite: null },
        ];
        _this.Z = [{ point: new Point(215, 184) }];
        return _this;
    }
    RagnatelaMidRes.prototype.getStartingNode = function () {
        return new WebNode_1.WebNode('Z', 0);
    };
    RagnatelaMidRes.prototype.getRandomLine = function () {
        var ramo = Math.floor(Math.random() * 8);
        var node;
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
        }
        else {
            return node;
        }
    };
    RagnatelaMidRes.prototype.randomLineFrom = function (ramo) {
        var giro = Math.floor(Math.random() * this[ramo].length);
        return this[ramo][giro];
    };
    RagnatelaMidRes.prototype.getPoint = function (nodo) {
        return this[nodo.ramo][nodo.giro].point;
    };
    RagnatelaMidRes.prototype.getNodeOnTop = function (webNode) {
        switch (webNode.ramo) {
            case 'A': {
                return this.goOut(webNode);
            }
            case 'B': {
                return this.goOut(webNode);
            }
            case 'C': {
                return new WebNode_1.WebNode('B', webNode.giro);
            }
            case 'D': {
                return new WebNode_1.WebNode('C', webNode.giro);
            }
            case 'E': {
                return new WebNode_1.WebNode('D', webNode.giro);
            }
            case 'F': {
                return this.goIn(webNode);
            }
            case 'G': {
                return new WebNode_1.WebNode('H', webNode.giro);
            }
            case 'H': {
                return new WebNode_1.WebNode('A', webNode.giro);
            }
            case 'Z': {
                return new WebNode_1.WebNode('B', 0);
            }
            default: {
                return webNode;
            }
        }
    };
    RagnatelaMidRes.prototype.getNodeOnTopRight = function (webNode) {
        switch (webNode.ramo) {
            case 'A': {
                return new WebNode_1.WebNode('B', webNode.giro);
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
                return new WebNode_1.WebNode('D', webNode.giro);
            }
            case 'F': {
                return new WebNode_1.WebNode('E', webNode.giro);
            }
            case 'G': {
                return this.goIn(webNode);
            }
            case 'H': {
                return new WebNode_1.WebNode('A', webNode.giro);
            }
            case 'Z': {
                return new WebNode_1.WebNode('C', 0);
            }
            default: {
                return webNode;
            }
        }
    };
    RagnatelaMidRes.prototype.getNodeOnRight = function (webNode) {
        switch (webNode.ramo) {
            case 'A': {
                return new WebNode_1.WebNode('B', webNode.giro);
            }
            case 'B': {
                return new WebNode_1.WebNode('C', webNode.giro);
            }
            case 'C': {
                return this.goOut(webNode);
            }
            case 'D': {
                return this.goOut(webNode);
            }
            case 'E': {
                return new WebNode_1.WebNode('D', webNode.giro);
            }
            case 'F': {
                return new WebNode_1.WebNode('E', webNode.giro);
            }
            case 'G': {
                return this.goIn(webNode);
            }
            case 'H': {
                return this.goIn(webNode);
            }
            case 'Z': {
                return new WebNode_1.WebNode('D', 0);
            }
            default: {
                return webNode;
            }
        }
    };
    RagnatelaMidRes.prototype.getNodeOnBottomRight = function (webNode) {
        switch (webNode.ramo) {
            case 'A': {
                return this.goIn(webNode);
            }
            case 'B': {
                return new WebNode_1.WebNode('C', webNode.giro);
            }
            case 'C': {
                return new WebNode_1.WebNode('D', webNode.giro);
            }
            case 'D': {
                return webNode;
            }
            case 'E': {
                return this.goOut(webNode);
            }
            case 'F': {
                return new WebNode_1.WebNode('E', webNode.giro);
            }
            case 'G': {
                return new WebNode_1.WebNode('F', webNode.giro);
            }
            case 'H': {
                return new WebNode_1.WebNode('G', webNode.giro);
            }
            case 'Z': {
                return new WebNode_1.WebNode('E', 0);
            }
            default: {
                return webNode;
            }
        }
    };
    RagnatelaMidRes.prototype.getNodeOnBottom = function (webNode) {
        switch (webNode.ramo) {
            case 'A': {
                return new WebNode_1.WebNode('H', webNode.giro);
            }
            case 'B': {
                return this.goIn(webNode);
            }
            case 'C': {
                return new WebNode_1.WebNode('D', webNode.giro);
            }
            case 'D': {
                return new WebNode_1.WebNode('E', webNode.giro);
            }
            case 'E': {
                return this.goOut(webNode);
            }
            case 'F': {
                return this.goOut(webNode);
            }
            case 'G': {
                return new WebNode_1.WebNode('F', webNode.giro);
            }
            case 'H': {
                return new WebNode_1.WebNode('G', webNode.giro);
            }
            case 'Z': {
                return new WebNode_1.WebNode('F', 0);
            }
            default: {
                return webNode;
            }
        }
    };
    RagnatelaMidRes.prototype.getNodeOnBottomLeft = function (webNode) {
        switch (webNode.ramo) {
            case 'A': {
                return new WebNode_1.WebNode('H', webNode.giro);
            }
            case 'B': {
                return this.goIn(webNode);
            }
            case 'C': {
                return this.goIn(webNode);
            }
            case 'D': {
                return new WebNode_1.WebNode('E', webNode.giro);
            }
            case 'E': {
                return new WebNode_1.WebNode('F', webNode.giro);
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
                return new WebNode_1.WebNode('G', 0);
            }
            default: {
                return webNode;
            }
        }
    };
    RagnatelaMidRes.prototype.getNodeOnLeft = function (webNode) {
        switch (webNode.ramo) {
            case 'A': {
                return webNode;
            }
            case 'B': {
                return new WebNode_1.WebNode('A', webNode.giro);
            }
            case 'C': {
                return new WebNode_1.WebNode('B', webNode.giro);
            }
            case 'D': {
                return this.goIn(webNode);
            }
            case 'E': {
                return new WebNode_1.WebNode('F', webNode.giro);
            }
            case 'F': {
                return new WebNode_1.WebNode('G', webNode.giro);
            }
            case 'G': {
                return this.goOut(webNode);
            }
            case 'H': {
                return this.goOut(webNode);
            }
            case 'Z': {
                return new WebNode_1.WebNode('H', 0);
            }
            default: {
                return webNode;
            }
        }
    };
    RagnatelaMidRes.prototype.getNodeOnTopLeft = function (webNode) {
        switch (webNode.ramo) {
            case 'A': {
                return this.goOut(webNode);
            }
            case 'B': {
                return new WebNode_1.WebNode('A', webNode.giro);
            }
            case 'C': {
                return new WebNode_1.WebNode('B', webNode.giro);
            }
            case 'D': {
                return new WebNode_1.WebNode('C', webNode.giro);
            }
            case 'E': {
                return this.goIn(webNode);
            }
            case 'F': {
                return new WebNode_1.WebNode('G', webNode.giro);
            }
            case 'G': {
                return new WebNode_1.WebNode('H', webNode.giro);
            }
            case 'H': {
                return webNode;
            }
            case 'Z': {
                return new WebNode_1.WebNode('A', 0);
            }
            default: {
                return webNode;
            }
        }
    };
    RagnatelaMidRes.prototype.goOut = function (webNode) {
        var newGiro = webNode.giro < 3 ? webNode.giro + 1 : webNode.giro;
        return new WebNode_1.WebNode(webNode.ramo, newGiro);
    };
    RagnatelaMidRes.prototype.goIn = function (webNode) {
        if (webNode.giro > 0) {
            return new WebNode_1.WebNode(webNode.ramo, webNode.giro - 1);
        }
        else {
            return new WebNode_1.WebNode('Z', 0);
        }
    };
    RagnatelaMidRes.prototype.addInsectToRandomLine = function (texture, edible, destroyDelay) {
        if (destroyDelay === void 0) { destroyDelay = 1500; }
        var line = this.getRandomLine();
        line.insect = true;
        line.edible = edible;
        line.sprite = this.scene.add.image(line.point.x, line.point.y, texture);
        this.scene.time.delayedCall(destroyDelay, this.destroyInsect, [line], this);
    };
    RagnatelaMidRes.prototype.destroyInsect = function (line) {
        if (line.sprite) {
            line.sprite.destroy();
            line.insect = false;
            line.edible = false;
            this.holeCount += 1;
            line.sprite = this.scene.add.image(line.point.x, line.point.y, 'hole');
            line.broken = true;
        }
    };
    RagnatelaMidRes.prototype.addBonusToRandomLine = function (texture, destroyDelay) {
        if (destroyDelay === void 0) { destroyDelay = 5000; }
        var line = this.getRandomLine();
        line.bonus = true;
        line.sprite = this.scene.add.image(line.point.x, line.point.y, texture);
        this.scene.time.delayedCall(destroyDelay, this.destroyBonus, [line], this);
    };
    RagnatelaMidRes.prototype.destroyBonus = function (line) {
        if (line.sprite) {
            line.sprite.destroy();
            line.insect = false;
            line.edible = false;
            line.bonus = false;
        }
    };
    RagnatelaMidRes.prototype.getLineBetween = function (from, to) {
        if (this[from.ramo + to.ramo]) {
            return this[from.ramo + to.ramo][from.giro];
        }
        else {
            return this[to.ramo + from.ramo][from.giro];
        }
    };
    RagnatelaMidRes.prototype.isMovingOnRamo = function (from, to) {
        return from.ramo === 'Z' || to.ramo === 'Z' || from.ramo === to.ramo;
    };
    RagnatelaMidRes.prototype.repairBetween = function (from, to) {
        var lineBetween = this.getLineBetween(from, to);
        lineBetween.sprite.destroy();
        lineBetween.broken = false;
        this.holeCount -= 1;
    };
    RagnatelaMidRes.prototype.brokeFourLines = function () {
        var ramo = Math.floor(Math.random() * 8);
        switch (ramo) {
            case 0: {
                for (var _i = 0, _a = this.AB; _i < _a.length; _i++) {
                    var abElement = _a[_i];
                    this.brokeLine(abElement);
                }
                break;
            }
            case 1: {
                for (var _b = 0, _c = this.BC; _b < _c.length; _b++) {
                    var abElement = _c[_b];
                    this.brokeLine(abElement);
                }
                break;
            }
            case 2: {
                for (var _d = 0, _e = this.CD; _d < _e.length; _d++) {
                    var abElement = _e[_d];
                    this.brokeLine(abElement);
                }
                break;
            }
            case 3: {
                for (var _f = 0, _g = this.DE; _f < _g.length; _f++) {
                    var abElement = _g[_f];
                    this.brokeLine(abElement);
                }
                break;
            }
            case 4: {
                for (var _h = 0, _j = this.EF; _h < _j.length; _h++) {
                    var abElement = _j[_h];
                    this.brokeLine(abElement);
                }
                break;
            }
            case 5: {
                for (var _k = 0, _l = this.FG; _k < _l.length; _k++) {
                    var abElement = _l[_k];
                    this.brokeLine(abElement);
                }
                break;
            }
            case 6: {
                for (var _m = 0, _o = this.GH; _m < _o.length; _m++) {
                    var abElement = _o[_m];
                    this.brokeLine(abElement);
                }
                break;
            }
            case 7: {
                for (var _p = 0, _q = this.HA; _p < _q.length; _p++) {
                    var abElement = _q[_p];
                    this.brokeLine(abElement);
                }
                break;
            }
        }
    };
    RagnatelaMidRes.prototype.brokeLine = function (el) {
        if (el.sprite) {
            el.sprite.destroy();
        }
        el.insect = false;
        el.bonus = false;
        el.broken = true;
        el.edible = false;
        el.sprite = this.scene.add.image(el.point.x, el.point.y, 'hole');
    };
    return RagnatelaMidRes;
}(Phaser.GameObjects.Image));
exports.RagnatelaMidRes = RagnatelaMidRes;


/***/ }),

/***/ "./src/Ragno.ts":
/*!**********************!*\
  !*** ./src/Ragno.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var Ragno = /** @class */ (function (_super) {
    __extends(Ragno, _super);
    function Ragno(scene, texture, ragnatela) {
        var _this = _super.call(this, scene, 206, 0, texture) || this;
        _this.speed = 150;
        _this.lockOnRepair = false;
        _this.particles = [];
        _this.ragnatela = ragnatela;
        _this.myWebNode = _this.ragnatela.getStartingNode();
        _this.targetNode = null;
        _this.dead = false;
        _this.conninellaTakenCount = 0;
        _this.movingSound = _this.scene.sound.add('spidermove');
        _this.repairingSound = _this.scene.sound.add('spiderrepair', {
            volume: .2
        });
        _this.setDepth(10);
        scene.add.existing(_this);
        scene.physics.add.existing(_this);
        _this.updatePositionTo(_this.myWebNode);
        scene.anims.create({
            key: 'move',
            frames: scene.anims.generateFrameNumbers(texture, { start: 1, end: 7 }),
            frameRate: 15,
            repeat: -1
        });
        scene.anims.create({
            key: 'stay',
            frames: [{ key: texture, frame: 0 }],
            frameRate: 20
        });
        _this.rotation = 1.56;
        _this.anims.play('move', true);
        return _this;
    }
    Ragno.prototype.updatePositionTo = function (webNode) {
        var pointToMoveTo = this.prepareMovingAnimation(webNode);
        if (this.ragnatela.isMovingOnRamo(this.myWebNode, webNode)) {
            this.movingSound.play();
            this.anims.play('move', true);
            this.targetNode = new Phaser.Math.Vector2(pointToMoveTo.x, pointToMoveTo.y);
            this.scene.physics.moveToObject(this, this.targetNode, this.speed);
            this.myWebNode = webNode;
        }
        else {
            var lineBetween = this.ragnatela.getLineBetween(this.myWebNode, webNode);
            if (lineBetween.insect) {
                if (lineBetween.edible) {
                    this.movingSound.play();
                    this.anims.play('move', true);
                    this.targetNode = new Phaser.Math.Vector2(pointToMoveTo.x, pointToMoveTo.y);
                    this.scene.physics.moveToObject(this, this.targetNode, this.speed);
                    this.myWebNode = webNode;
                    // @ts-ignore
                    if (this.scene.mantideEvent && lineBetween.sprite.texture.key === 'coccinella') {
                        this.scene.sound.play('coccinellaperninja');
                        this.conninellaTakenCount += 1;
                    }
                    lineBetween.sprite.destroy();
                    lineBetween.insect = false;
                    lineBetween.edible = false;
                }
                else {
                    console.log('INSETTI grandi, non mi muovo');
                }
            }
            else if (lineBetween.broken) {
                this.movingSound.play();
                this.anims.play('move', true);
                this.waitNode = new Phaser.Math.Vector2(lineBetween.point.x, lineBetween.point.y);
                this.targetNode = new Phaser.Math.Vector2(pointToMoveTo.x, pointToMoveTo.y);
                this.scene.physics.moveToObject(this, this.waitNode, this.speed);
                this.previousNode = this.myWebNode;
                this.myWebNode = webNode;
            }
            else if (lineBetween.bonus) {
                switch (lineBetween.sprite.texture.key) {
                    case 'fungo': {
                        this.goOnDrugs();
                        this.scene.time.delayedCall(2000, this.finishDrugs, [], this);
                        break;
                    }
                    case 'caffe': {
                        this.speed += 50;
                        break;
                    }
                    default: {
                        console.log('raccolto boh');
                        break;
                    }
                }
                this.movingSound.play();
                this.anims.play('move', true);
                this.targetNode = new Phaser.Math.Vector2(pointToMoveTo.x, pointToMoveTo.y);
                this.scene.physics.moveToObject(this, this.targetNode, this.speed);
                this.myWebNode = webNode;
                lineBetween.sprite.destroy();
                lineBetween.bonus = false;
            }
            else {
                this.movingSound.play();
                this.anims.play('move', true);
                this.targetNode = new Phaser.Math.Vector2(pointToMoveTo.x, pointToMoveTo.y);
                this.scene.physics.moveToObject(this, this.targetNode, this.speed);
                this.myWebNode = webNode;
            }
        }
    };
    Ragno.prototype.prepareMovingAnimation = function (webNode) {
        var currentPoint = this.ragnatela.getPoint(this.myWebNode);
        var pointToMoveTo = this.ragnatela.getPoint(webNode);
        this.rotation = Phaser.Math.Angle.BetweenPoints(currentPoint, pointToMoveTo);
        return pointToMoveTo;
    };
    Ragno.prototype.up = function () {
        var webNode = this.ragnatela.getNodeOnTop(this.myWebNode);
        this.updatePositionTo(webNode);
    };
    Ragno.prototype.upRight = function () {
        var webNode = this.ragnatela.getNodeOnTopRight(this.myWebNode);
        this.updatePositionTo(webNode);
    };
    Ragno.prototype.right = function () {
        var webNode = this.ragnatela.getNodeOnRight(this.myWebNode);
        this.updatePositionTo(webNode);
    };
    Ragno.prototype.downRight = function () {
        var webNode = this.ragnatela.getNodeOnBottomRight(this.myWebNode);
        this.updatePositionTo(webNode);
    };
    Ragno.prototype.down = function () {
        var webNode = this.ragnatela.getNodeOnBottom(this.myWebNode);
        this.updatePositionTo(webNode);
    };
    Ragno.prototype.downLeft = function () {
        var webNode = this.ragnatela.getNodeOnBottomLeft(this.myWebNode);
        this.updatePositionTo(webNode);
    };
    Ragno.prototype.left = function () {
        var webNode = this.ragnatela.getNodeOnLeft(this.myWebNode);
        this.updatePositionTo(webNode);
    };
    Ragno.prototype.upLeft = function () {
        var webNode = this.ragnatela.getNodeOnTopLeft(this.myWebNode);
        this.updatePositionTo(webNode);
    };
    Ragno.prototype.updatePosition = function () {
        if (!this.lockOnRepair) {
            if (this.waitNode) {
                var distance = Phaser.Math.Distance.Between(this.x, this.y, this.waitNode.x, this.waitNode.y);
                if (distance < 4) {
                    this.body.reset(this.waitNode.x, this.waitNode.y);
                    this.waitNode = null;
                    this.startRepair();
                    if (this.speed > 1000) {
                        this.scene.time.delayedCall(500, this.finishRepair, [], this);
                    }
                    else {
                        this.scene.time.delayedCall(1500 - this.speed, this.finishRepair, [], this);
                    }
                }
            }
            else {
                var distance = Phaser.Math.Distance.Between(this.x, this.y, this.targetNode.x, this.targetNode.y);
                if (distance < 4) {
                    this.body.reset(this.targetNode.x, this.targetNode.y);
                    this.targetNode = null;
                    this.movingSound.stop();
                    this.anims.play('stay', true);
                }
            }
        }
    };
    Ragno.prototype.isMoving = function () {
        // @ts-ignore
        return this.targetNode && (this.body.speed > 0 || this.lockOnRepair);
    };
    Ragno.prototype.startRepair = function () {
        this.movingSound.stop();
        this.repairingSound.play();
        this.lockOnRepair = true;
        this.ragnatela.repairBetween(this.previousNode, this.myWebNode);
    };
    Ragno.prototype.finishRepair = function () {
        this.repairingSound.stop();
        this.movingSound.play();
        this.lockOnRepair = false;
        this.scene.physics.moveToObject(this, this.targetNode, this.speed);
    };
    Ragno.prototype.goOnDrugs = function () {
        this.particles = [];
        for (var i = 0; i < 300; i++) {
            var x = Phaser.Math.Between(-64, 500);
            var y = Phaser.Math.Between(-64, 500);
            var image = this.scene.add.image(x, y, 'particle');
            image.setDepth(11);
            image.setBlendMode(Phaser.BlendModes.ADD);
            this.particles.push({ s: image, r: 2 + Math.random() * 6 });
        }
    };
    Ragno.prototype.updateParticles = function () {
        for (var i = 0; i < this.particles.length; i++) {
            var sprite = this.particles[i].s;
            sprite.y -= this.particles[i].r;
            if (sprite.y < -256) {
                sprite.y = 700;
            }
        }
    };
    Ragno.prototype.finishDrugs = function () {
        for (var i = 0; i < this.particles.length; i++) {
            var sprite = this.particles[i].s;
            sprite.destroy();
        }
        this.particles = [];
    };
    Ragno.prototype.gameOver = function () {
        this.dead = true;
        this.anims.play('stay', true);
        var deathNode = new Phaser.Math.Vector2(this.body.x, 800);
        this.scene.physics.moveToObject(this, deathNode, 150);
    };
    return Ragno;
}(Phaser.Physics.Arcade.Sprite));
exports.Ragno = Ragno;


/***/ }),

/***/ "./src/RagnoTitolo.ts":
/*!****************************!*\
  !*** ./src/RagnoTitolo.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var RagnoTitolo = /** @class */ (function (_super) {
    __extends(RagnoTitolo, _super);
    function RagnoTitolo(scene, texture) {
        var _this = _super.call(this, scene, 135, 0, texture) || this;
        _this.speed = 150;
        _this.movingSound = _this.scene.sound.add('spidermove');
        _this.setDepth(10);
        scene.add.existing(_this);
        scene.physics.add.existing(_this);
        scene.anims.create({
            key: 'move',
            frames: scene.anims.generateFrameNumbers(texture, { start: 1, end: 7 }),
            frameRate: 15,
            repeat: -1
        });
        scene.anims.create({
            key: 'stay',
            frames: [{ key: texture, frame: 0 }],
            frameRate: 20
        });
        _this.rotation = 1.56;
        _this.anims.play('move', true);
        _this.targetPoint = new Phaser.Math.Vector2(121, 236);
        _this.startMovingTo();
        return _this;
    }
    RagnoTitolo.prototype.startMovingTo = function () {
        this.movingSound.play();
        this.anims.play('move', true);
        this.scene.physics.moveToObject(this, this.targetPoint, this.speed);
    };
    RagnoTitolo.prototype.updatePosition = function () {
        var distance = Phaser.Math.Distance.Between(this.x, this.y, this.targetPoint.x, this.targetPoint.y);
        if (distance < 4) {
            this.body.reset(this.targetPoint.x, this.targetPoint.y);
            this.targetPoint = null;
            this.movingSound.stop();
            this.anims.play('stay', true);
        }
    };
    RagnoTitolo.prototype.isMoving = function () {
        // @ts-ignore
        return this.targetPoint && this.body.speed > 0;
    };
    return RagnoTitolo;
}(Phaser.Physics.Arcade.Sprite));
exports.RagnoTitolo = RagnoTitolo;


/***/ }),

/***/ "./src/TitleScene.ts":
/*!***************************!*\
  !*** ./src/TitleScene.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var RagnoTitolo_1 = __webpack_require__(/*! ./RagnoTitolo */ "./src/RagnoTitolo.ts");
var sceneConfig = {
    active: true,
    visible: true,
    key: 'Titolo'
};
var TitleScene = /** @class */ (function (_super) {
    __extends(TitleScene, _super);
    function TitleScene() {
        return _super.call(this, sceneConfig) || this;
    }
    TitleScene.prototype.preload = function () {
        this.load.audio('spidermove', 'assets/audio/spidermove.mp3');
        this.load.image('alberi', 'assets/sprites/alberimidres.png');
        this.load.image('sfondo', 'assets/sprites/prosfondo.png');
        this.load.image('mantide', 'assets/sprites/mantidemidres.png');
        this.load.image('titolo', 'assets/sprites/titolo.png');
        this.load.spritesheet('ragnosheet', 'assets/sprites/ragnosheet.png', { frameWidth: 89, frameHeight: 87 });
    };
    TitleScene.prototype.create = function () {
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'sfondo');
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'alberi');
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'titolo');
        this.add.image(300, 340, 'mantide');
        this.ragno = new RagnoTitolo_1.RagnoTitolo(this, 'ragnosheet');
        this.start = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    };
    TitleScene.prototype.update = function () {
        if (this.ragno.isMoving()) {
            this.ragno.updatePosition();
        }
        else {
            if (Phaser.Input.Keyboard.JustDown(this.start)) {
                this.scene.switch('Game');
            }
        }
    };
    return TitleScene;
}(Phaser.Scene));
exports.TitleScene = TitleScene;


/***/ }),

/***/ "./src/WebNode.ts":
/*!************************!*\
  !*** ./src/WebNode.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WebNode = /** @class */ (function () {
    function WebNode(ramo, giro) {
        this.ramo = ramo;
        this.giro = giro;
    }
    return WebNode;
}());
exports.WebNode = WebNode;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var GameScene_1 = __webpack_require__(/*! ./GameScene */ "./src/GameScene.ts");
var TitleScene_1 = __webpack_require__(/*! ./TitleScene */ "./src/TitleScene.ts");
var GameOverScene_1 = __webpack_require__(/*! ./GameOverScene */ "./src/GameOverScene.ts");
var gameConfig = {
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
    scene: [TitleScene_1.TitleScene, GameScene_1.GameScene, GameOverScene_1.GameOverScene],
};
exports.game = new Phaser.Game(gameConfig);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVPdmVyU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmFnbmF0ZWxhTWlkUmVzLnRzIiwid2VicGFjazovLy8uL3NyYy9SYWduby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmFnbm9UaXRvbG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RpdGxlU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dlYk5vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FB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USxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FB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QUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFO1NBQzNCLENBQUM7UUFDTixLQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ0wsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUU7WUFDNUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFO1NBQy9CLENBQUM7UUFDRixLQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ0wsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1NBQzVCLENBQUM7UUFDTixLQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ0wsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1NBQzVCLENBQUM7UUFDTixLQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ0wsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1NBQzVCLENBQUM7UUFDTixLQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ0wsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1NBQzVCLENBQUM7UUFDTixLQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ0wsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1NBQzVCLENBQUM7UUFDTixLQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ0wsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQyxFQUFFO1NBQzNCLENBQUM7UUFDTixLQUFJLENBQUMsRUFBRSxHQUFHO1lBQ04sRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtTQUNwRyxDQUFDO1FBQ04sS0FBSSxDQUFDLEVBQUUsR0FBRztZQUNOLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7U0FDcEcsQ0FBQztRQUNOLEtBQUksQ0FBQyxFQUFFLEdBQUc7WUFDTixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1NBQ3JHLENBQUM7UUFDTixLQUFJLENBQUMsRUFBRSxHQUFHO1lBQ04sRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtTQUNyRyxDQUFDO1FBQ04sS0FBSSxDQUFDLEVBQUUsR0FBRztZQUNOLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7U0FDckcsQ0FBQztRQUNOLEtBQUksQ0FBQyxFQUFFLEdBQUc7WUFDTixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1NBQ3JHLENBQUM7UUFDTixLQUFJLENBQUMsRUFBRSxHQUFHO1lBQ04sRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtTQUNyRyxDQUFDO1FBQ04sS0FBSSxDQUFDLEVBQUUsR0FBRztZQUNOLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxH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RUFBRSxxQkFBUyxFQUFFLDZCQUFhLENBQUM7Q0FDaEQsQ0FBQztBQUVXLFlBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCB7UmFnbm9UaXRvbG99IGZyb20gXCIuL1JhZ25vVGl0b2xvXCI7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAga2V5OiAnR2FtZU92ZXInXG59O1xuXG5leHBvcnQgY2xhc3MgR2FtZU92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG5cbiAgICBwcml2YXRlIHNwYWNlOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xuICAgIHByaXZhdGUgZGVkaWNhOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XG4gICAgcHJpdmF0ZSBmbGlwOiBib29sZWFuO1xuICAgIHByaXZhdGUgY3JlZGl0OiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICAgIH1cblxuICAgIHByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZGVkaWNhJywgJ2Fzc2V0cy9zcHJpdGVzL2RlZGljYS5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdkZWxpbGFoJywgJ2Fzc2V0cy9zcHJpdGVzL2RlbGlsYWgucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaWxkZWRlJywgJ2Fzc2V0cy9zcHJpdGVzL2lsZGVkZS5wbmcnKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuZGVkaWNhID0gdGhpcy5hZGQuaW1hZ2UodGhpcy5zY2FsZS53aWR0aC8yLHRoaXMuc2NhbGUuaGVpZ2h0LzIsICdkZWRpY2EnKTtcbiAgICAgICAgdGhpcy5zcGFjZSA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TUEFDRSk7XG4gICAgICAgIHRoaXMuZmxpcCA9IHRydWU7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIGlmIChQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy5zcGFjZSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZGljYSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVkaWNhLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZGljYSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQuaW1hZ2UodGhpcy5zY2FsZS53aWR0aC8yLHRoaXMuc2NhbGUuaGVpZ2h0LzIsICdhbGJlcmknKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWRpdCA9IHRoaXMuYWRkLmltYWdlKHRoaXMuc2NhbGUud2lkdGgvMix0aGlzLnNjYWxlLmhlaWdodC8yLCAnZGVsaWxhaCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mbGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlZGl0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVkaXQgPSB0aGlzLmFkZC5pbWFnZSh0aGlzLnNjYWxlLndpZHRoLzIsdGhpcy5zY2FsZS5oZWlnaHQvMiwgJ2lsZGVkZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlZGl0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVkaXQgPSB0aGlzLmFkZC5pbWFnZSh0aGlzLnNjYWxlLndpZHRoLzIsdGhpcy5zY2FsZS5oZWlnaHQvMiwgJ2RlbGlsYWgnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mbGlwID0gIXRoaXMuZmxpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQge1JhZ25vfSBmcm9tIFwiLi9SYWdub1wiO1xuaW1wb3J0IHtSYWduYXRlbGFNaWRSZXN9IGZyb20gXCIuL1JhZ25hdGVsYU1pZFJlc1wiO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIGtleTogJ0dhbWUnXG59O1xuXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgTUFYX0hPTEVfQ09VTlQgPSAyMDtcblxuICAgIHByaXZhdGUgY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XG4gICAgcHJpdmF0ZSByYWdubzogUmFnbm87XG4gICAgcHJpdmF0ZSByYWduYXRlbGE6IFJhZ25hdGVsYU1pZFJlcztcbiAgICBwcml2YXRlIHVwMTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcbiAgICBwcml2YXRlIHVwUmlnaHQxOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xuICAgIHByaXZhdGUgcmlnaHQxOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xuICAgIHByaXZhdGUgZG93blJpZ2h0MTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcbiAgICBwcml2YXRlIGRvd24xOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xuICAgIHByaXZhdGUgZG93bkxlZnQxOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xuICAgIHByaXZhdGUgbGVmdDE6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gICAgcHJpdmF0ZSB1cExlZnQxOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xuICAgIHByaXZhdGUgdXAyOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xuICAgIHByaXZhdGUgdXBSaWdodDI6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gICAgcHJpdmF0ZSByaWdodDI6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gICAgcHJpdmF0ZSBkb3duUmlnaHQyOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xuICAgIHByaXZhdGUgZG93bjI6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gICAgcHJpdmF0ZSBkb3duTGVmdDI6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gICAgcHJpdmF0ZSBsZWZ0MjogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcbiAgICBwcml2YXRlIHVwTGVmdDI6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gICAgcHJpdmF0ZSBhbHJlYWR5RG93bjogYm9vbGVhbjtcbiAgICBwcml2YXRlIHNwYWNlOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xuXG4gICAgcHJpdmF0ZSBtYW50aWRlRXZlbnQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBtYW50aWRlSW1hZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdjb2NjaW5lbGxhcGVybmluamEnLCAnYXNzZXRzL2F1ZGlvL2NvY2NpbmVsbGEud2F2Jyk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnZ2FtZW92ZXJtdXNpYycsICdhc3NldHMvYXVkaW8vZ2FtZW92ZXIubXAzJyk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbmluamFtYW50aWRlJywgJ2Fzc2V0cy9hdWRpby9uaW5qYW1hbnRpZGUubXAzJyk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnZmx5Y2F0Y2gnLCAnYXNzZXRzL2F1ZGlvL2ZseWNhdGNoLm1wMycpO1xuICAgICAgICAvLyB0aGlzLmxvYWQuYXVkaW8oJ3NwaWRlcm1vdmUnLCAnYXNzZXRzL2F1ZGlvL3NwaWRlcm1vdmUubXAzJyk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnc3BpZGVycmVwYWlyJywgJ2Fzc2V0cy9hdWRpby93ZWJyZXBhaXIubXAzJyk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbXVzaWMnLCAnYXNzZXRzL2F1ZGlvL211c2ljLm1wMycpO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2JpcmRzJywgJ2Fzc2V0cy9hdWRpby9iaXJkcy5tcDMnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdmdW1ldHRvJywgJ2Fzc2V0cy9zcHJpdGVzL2Z1bWV0dG9taWRyZXMucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncmFnbmF0ZWxhJywgJ2Fzc2V0cy9zcHJpdGVzL3JhZ25hdGVsYW1pZHJlcy5wbmcnKTtcbiAgICAgICAgLy8gdGhpcy5sb2FkLmltYWdlKCdzZm9uZG8nLCAnYXNzZXRzL3Nwcml0ZXMvcHJvc2ZvbmRvLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2FsYmVyaScsICdhc3NldHMvc3ByaXRlcy9hbGJlcmltaWRyZXMucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnbWFudGlkZW5pbmphJywgJ2Fzc2V0cy9zcHJpdGVzL21hbnRpbmluamFtaWRyZXMucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncmFnbm8nLCAnYXNzZXRzL3Nwcml0ZXMvcmFnbm9taWRyZXMucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndGlwdWxhJywgJ2Fzc2V0cy9zcHJpdGVzL3RpcHVsYW1pZHJlcy5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdmYWxlbmEnLCAnYXNzZXRzL3Nwcml0ZXMvZmFsZW5hbWlkcmVzLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2NvY2NpbmVsbGEnLCAnYXNzZXRzL3Nwcml0ZXMvY29jY2luZWxsYW1pZHJlcy5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdob2xlJywgJ2Fzc2V0cy9zcHJpdGVzL2hvbGUucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnY2FmZmUnLCAnYXNzZXRzL3Nwcml0ZXMvY2FmZmVtaWRyZXMucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGlsbG9sYScsICdhc3NldHMvc3ByaXRlcy9waWxsb2xhbWlkcmVzLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2Z1bmdvJywgJ2Fzc2V0cy9zcHJpdGVzL2Z1bmdvbWlkcmVzLnBuZycpO1xuICAgICAgICAvLyB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3JhZ25vc2hlZXQnLFxuICAgICAgICAvLyAgICAgJ2Fzc2V0cy9zcHJpdGVzL3JhZ25vc2hlZXQucG5nJyxcbiAgICAgICAgLy8gICAgIHsgZnJhbWVXaWR0aDogODksIGZyYW1lSGVpZ2h0OiA4NyB9XG4gICAgICAgIC8vICk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGFydGljbGUnLCAnYXNzZXRzL3Nwcml0ZXMvcGFydGljbGUucG5nJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoJ211c2ljJywge1xuICAgICAgICAgICAgdm9sdW1lOiAuMixcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoJ2JpcmRzJywge1xuICAgICAgICAgICAgdm9sdW1lOiAuNixcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZC5pbWFnZSh0aGlzLnNjYWxlLndpZHRoLzIsdGhpcy5zY2FsZS5oZWlnaHQvMiwgJ3Nmb25kbycpO1xuICAgICAgICB0aGlzLnJhZ25hdGVsYSA9IG5ldyBSYWduYXRlbGFNaWRSZXModGhpcywgJ3JhZ25hdGVsYScpO1xuICAgICAgICB0aGlzLmFkZC5pbWFnZSh0aGlzLnNjYWxlLndpZHRoLzIsdGhpcy5zY2FsZS5oZWlnaHQvMiwgJ2FsYmVyaScpO1xuICAgICAgICB0aGlzLnJhZ25vID0gbmV3IFJhZ25vKHRoaXMsICdyYWdub3NoZWV0JywgdGhpcy5yYWduYXRlbGEpO1xuICAgICAgICB0aGlzLmN1cnNvcktleXMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcbiAgICAgICAgdGhpcy5zcGFjZSA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TUEFDRSk7XG4gICAgICAgIHRoaXMudXAxID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlcpO1xuICAgICAgICB0aGlzLnVwUmlnaHQxID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkUpO1xuICAgICAgICB0aGlzLnJpZ2h0MSA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5EKTtcbiAgICAgICAgdGhpcy5kb3duUmlnaHQxID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkMpO1xuICAgICAgICB0aGlzLmRvd24xID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlgpO1xuICAgICAgICB0aGlzLmRvd25MZWZ0MSA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5aKTtcbiAgICAgICAgdGhpcy5sZWZ0MSA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5BKTtcbiAgICAgICAgdGhpcy51cExlZnQxID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlEpO1xuICAgICAgICB0aGlzLnVwMiA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5FSUdIVCk7XG4gICAgICAgIHRoaXMudXBSaWdodDIgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuTklORSk7XG4gICAgICAgIHRoaXMucmlnaHQyID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNJWCk7XG4gICAgICAgIHRoaXMuZG93blJpZ2h0MiA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5USFJFRSk7XG4gICAgICAgIHRoaXMuZG93bjIgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVFdPKTtcbiAgICAgICAgdGhpcy5kb3duTGVmdDIgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuT05FKTtcbiAgICAgICAgdGhpcy5sZWZ0MiA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5GT1VSKTtcbiAgICAgICAgdGhpcy51cExlZnQyID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNFVkVOKTtcbiAgICAgICAgdGhpcy5hbHJlYWR5RG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hbnRpZGVFdmVudCA9IGZhbHNlO1xuICAgICAgICB2YXIgaW5zZWN0VGltZXIgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXG4gICAgICAgICAgICBjYWxsYmFjazogdGhpcy5hZGRSYW5kb21JbnNlY3QsXG4gICAgICAgICAgICBhcmdzOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgc3RhcnRBdDogMTAwMCxcbiAgICAgICAgICAgIHRpbWVTY2FsZTogMSxcbiAgICAgICAgICAgIHBhdXNlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBib251c1RpbWVyID0gdGhpcy50aW1lLmFkZEV2ZW50KHtcbiAgICAgICAgICAgIGRlbGF5OiA1MDAwLFxuICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMuYWRkUmFuZG9tQm9udXMsXG4gICAgICAgICAgICBhcmdzOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgc3RhcnRBdDogMTAwMCxcbiAgICAgICAgICAgIHRpbWVTY2FsZTogMSxcbiAgICAgICAgICAgIHBhdXNlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBtYW50aWRlVGltZXIgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xuICAgICAgICAgICAgZGVsYXk6IDMwMDAwLFxuICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMuc3RhcnRNYW50aWRlRXZlbnQsXG4gICAgICAgICAgICBhcmdzOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgc3RhcnRBdDogMjAwMCxcbiAgICAgICAgICAgIHRpbWVTY2FsZTogMSxcbiAgICAgICAgICAgIHBhdXNlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnRNYW50aWRlRXZlbnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5tYW50aWRlRXZlbnQgJiYgIXRoaXMucmFnbm8uZGVhZCkge1xuICAgICAgICAgICAgdGhpcy5tYW50aWRlRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tYW50aWRlSW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSgzMDAsMzQwLCAnbWFudGlkZScpO1xuICAgICAgICAgICAgdmFyIGZ1bWV0dG8gPSB0aGlzLmFkZC5pbWFnZSh0aGlzLnNjYWxlLndpZHRoLzIsdGhpcy5zY2FsZS5oZWlnaHQvMiwgJ2Z1bWV0dG8nKTtcbiAgICAgICAgICAgIGZ1bWV0dG8uc2V0RGVwdGgoOTkpO1xuICAgICAgICAgICAgdGhpcy50aW1lLmRlbGF5ZWRDYWxsKDIwMDAsIHRoaXMuYmVnaW5FdmVudCwgW2Z1bWV0dG9dLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJlZ2luRXZlbnQoZnVtZXR0bykge1xuICAgICAgICBmdW1ldHRvLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy50aW1lLmRlbGF5ZWRDYWxsKDEwMDAwLCB0aGlzLnN0b3BNYW50aWRlRXZlbnQsIFtdLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdG9wTWFudGlkZUV2ZW50KCkge1xuICAgICAgICBpZiAoIXRoaXMucmFnbm8uZGVhZCAmJiB0aGlzLm1hbnRpZGVFdmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmFnbm8uY29ubmluZWxsYVRha2VuQ291bnQgPiAyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hBUFBZIG1hbnRpZGUgY29uIGNvY2NpbmVsbGUnLCB0aGlzLnJhZ25vLmNvbm5pbmVsbGFUYWtlbkNvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hbnRpZGVFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubWFudGlkZUltYWdlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJhZ25vLmNvbm5pbmVsbGFUYWtlbkNvdW50ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZC5wbGF5KCduaW5qYW1hbnRpZGUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hbnRpZGVJbWFnZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYW50aWRlSW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSgzMDAsMzQwLCAnbWFudGlkZW5pbmphJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yYWduYXRlbGEuYnJva2VGb3VyTGluZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUuZGVsYXllZENhbGwoMTUwMCwgdGhpcy5yZW1vdmVNYW50aWRlTmluamEsIFtdLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZU1hbnRpZGVOaW5qYSgpIHtcbiAgICAgICAgdGhpcy5tYW50aWRlRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYW50aWRlSW1hZ2UuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnJhZ25vLmNvbm5pbmVsbGFUYWtlbkNvdW50ID0gMDtcbiAgICB9XG5cbiAgICBhZGRSYW5kb21JbnNlY3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5yYWduby5kZWFkKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubWFudGlkZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZC5wbGF5KCdmbHljYXRjaCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lOiAxLjVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lLmRlbGF5ZWRDYWxsKDYwMCwgdGhpcy5hZGRSYW5kb21UaXB1bGEsIFtmYWxzZV0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWUuZGVsYXllZENhbGwoNjAwLCB0aGlzLmFkZFJhbmRvbUZhbGVuYSwgW3RydWVdLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lLmRlbGF5ZWRDYWxsKDYwMCwgdGhpcy5hZGRSYW5kb21Db2NjaW5lbGxhLCBbdHJ1ZV0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc291bmQucGxheSgnZmx5Y2F0Y2gnLCB7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZTogMS41XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lLmRlbGF5ZWRDYWxsKDYwMCwgdGhpcy5hZGRSYW5kb21Db2NjaW5lbGxhLCBbdHJ1ZV0sIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGFkZFJhbmRvbUJvbnVzKCkge1xuICAgICAgICBpZiAoIXRoaXMubWFudGlkZUV2ZW50ICYmICF0aGlzLnJhZ25vLmRlYWQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25pZW50ZSBib251cyBxdWVzdGEgdm9sdGEnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhZ25hdGVsYS5hZGRCb251c1RvUmFuZG9tTGluZSgnY2FmZmUnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhZ25hdGVsYS5hZGRCb251c1RvUmFuZG9tTGluZSgnZnVuZ28nKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkUmFuZG9tVGlwdWxhKGVkaWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnJhZ25hdGVsYS5hZGRJbnNlY3RUb1JhbmRvbUxpbmUoJ3RpcHVsYScsIGVkaWJsZSk7XG4gICAgfVxuXG4gICAgYWRkUmFuZG9tRmFsZW5hKGVkaWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnJhZ25hdGVsYS5hZGRJbnNlY3RUb1JhbmRvbUxpbmUoJ2ZhbGVuYScsIGVkaWJsZSAsIDQwMDApO1xuICAgIH1cblxuICAgIGFkZFJhbmRvbUNvY2NpbmVsbGEoZWRpYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMucmFnbmF0ZWxhLmFkZEluc2VjdFRvUmFuZG9tTGluZSgnY29jY2luZWxsYScsIGVkaWJsZSwgNTAwMCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5yYWduYXRlbGEuaG9sZUNvdW50ID4gdGhpcy5NQVhfSE9MRV9DT1VOVCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJhZ25vLmRlYWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kLnBsYXkoJ2dhbWVvdmVybXVzaWMnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJhZ25vLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgaWYgKFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLnNwYWNlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnN3aXRjaCgnR2FtZU92ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yYWduby5pc01vdmluZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yYWduby51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLmlzRG93bikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWxyZWFkeURvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxyZWFkeURvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1g6JyArIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci54KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZOicgKyB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIueSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFscmVhZHlEb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLnVwMSkgfHwgUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKHRoaXMudXAyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhZ25vLnVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy51cFJpZ2h0MSkgfHwgUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKHRoaXMudXBSaWdodDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFnbm8udXBSaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKHRoaXMucmlnaHQxKSB8fCBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy5yaWdodDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFnbm8ucmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLmRvd25SaWdodDEpIHx8IFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLmRvd25SaWdodDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFnbm8uZG93blJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy5kb3duMSkgfHwgUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKHRoaXMuZG93bjIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFnbm8uZG93bigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKHRoaXMuZG93bkxlZnQxKSB8fCBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy5kb3duTGVmdDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFnbm8uZG93bkxlZnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLmxlZnQxKSB8fCBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy5sZWZ0MikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWduby5sZWZ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy51cExlZnQxKSB8fCBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy51cExlZnQyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhZ25vLnVwTGVmdCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yYWduby51cGRhdGVQYXJ0aWNsZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHtXZWJOb2RlfSBmcm9tIFwiLi9XZWJOb2RlXCI7XG5pbXBvcnQgUG9pbnQgPSBQaGFzZXIuR2VvbS5Qb2ludDtcblxuZXhwb3J0IGNsYXNzIFJhZ25hdGVsYU1pZFJlcyBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB7XG5cbiAgICBwcml2YXRlIEE6IEFycmF5PHtwb2ludDogUG9pbnR9PjtcbiAgICBwcml2YXRlIEI6IEFycmF5PHtwb2ludDogUG9pbnR9PjtcbiAgICBwcml2YXRlIEM6IEFycmF5PHtwb2ludDogUG9pbnR9PjtcbiAgICBwcml2YXRlIEQ6IEFycmF5PHtwb2ludDogUG9pbnR9PjtcbiAgICBwcml2YXRlIEU6IEFycmF5PHtwb2ludDogUG9pbnR9PjtcbiAgICBwcml2YXRlIEY6IEFycmF5PHtwb2ludDogUG9pbnR9PjtcbiAgICBwcml2YXRlIEc6IEFycmF5PHtwb2ludDogUG9pbnR9PjtcbiAgICBwcml2YXRlIEg6IEFycmF5PHtwb2ludDogUG9pbnR9PjtcbiAgICBwcml2YXRlIFo6IEFycmF5PHtwb2ludDogUG9pbnR9PjtcblxuICAgIHByaXZhdGUgQUI6IEFycmF5PHtwb2ludDogUG9pbnQsIGluc2VjdDogYm9vbGVhbiwgYm9udXM6IGJvb2xlYW4sIGJyb2tlbjogYm9vbGVhbiwgZWRpYmxlOiBib29sZWFuLCBzcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB9PjtcbiAgICBwcml2YXRlIEJDOiBBcnJheTx7cG9pbnQ6IFBvaW50LCBpbnNlY3Q6IGJvb2xlYW4sIGJvbnVzOiBib29sZWFuLCBicm9rZW46IGJvb2xlYW4sIGVkaWJsZTogYm9vbGVhbiwgc3ByaXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2UgfT47XG4gICAgcHJpdmF0ZSBDRDogQXJyYXk8e3BvaW50OiBQb2ludCwgaW5zZWN0OiBib29sZWFuLCBib251czogYm9vbGVhbiwgYnJva2VuOiBib29sZWFuLCBlZGlibGU6IGJvb2xlYW4sIHNwcml0ZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIH0+O1xuICAgIHByaXZhdGUgREU6IEFycmF5PHtwb2ludDogUG9pbnQsIGluc2VjdDogYm9vbGVhbiwgYm9udXM6IGJvb2xlYW4sIGJyb2tlbjogYm9vbGVhbiwgZWRpYmxlOiBib29sZWFuLCBzcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB9PjtcbiAgICBwcml2YXRlIEVGOiBBcnJheTx7cG9pbnQ6IFBvaW50LCBpbnNlY3Q6IGJvb2xlYW4sIGJvbnVzOiBib29sZWFuLCBicm9rZW46IGJvb2xlYW4sIGVkaWJsZTogYm9vbGVhbiwgc3ByaXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2UgfT47XG4gICAgcHJpdmF0ZSBGRzogQXJyYXk8e3BvaW50OiBQb2ludCwgaW5zZWN0OiBib29sZWFuLCBib251czogYm9vbGVhbiwgYnJva2VuOiBib29sZWFuLCBlZGlibGU6IGJvb2xlYW4sIHNwcml0ZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIH0+O1xuICAgIHByaXZhdGUgR0g6IEFycmF5PHtwb2ludDogUG9pbnQsIGluc2VjdDogYm9vbGVhbiwgYm9udXM6IGJvb2xlYW4sIGJyb2tlbjogYm9vbGVhbiwgZWRpYmxlOiBib29sZWFuLCBzcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB9PjtcbiAgICBwcml2YXRlIEhBOiBBcnJheTx7cG9pbnQ6IFBvaW50LCBpbnNlY3Q6IGJvb2xlYW4sIGJvbnVzOiBib29sZWFuLCBicm9rZW46IGJvb2xlYW4sIGVkaWJsZTogYm9vbGVhbiwgc3ByaXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2UgfT47XG5cbiAgICBob2xlQ291bnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHRleHR1cmU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIHNjZW5lLFxuICAgICAgICAgICAgc2NlbmUuc2NhbGUud2lkdGgvMixcbiAgICAgICAgICAgIHNjZW5lLnNjYWxlLmhlaWdodC8yLFxuICAgICAgICAgICAgdGV4dHVyZVxuICAgICAgICApO1xuICAgICAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XG5cbiAgICAgICAgdGhpcy5ob2xlQ291bnQgPSAwO1xuICAgICAgICB0aGlzLkEgPSBbXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTg5LDE0NCkgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxNzMsMTIwKSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDE2MSwxMDIpIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTQ2LDgwKSB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgdGhpcy5CID0gW1xuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDIyNiwxMzkpIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjMyLDExOSkgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyMzgsOTEpIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjQ1LDYzKSB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLkMgPSBbXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjUyLDE1NCkgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyNzIsMTM3KSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDI5MCwxMjQpIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMzEwLDEwOCkgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIHRoaXMuRCA9IFtcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyNjMsMTc4KSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDI5MCwxNzYpIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMzA5LDE3NCkgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgzMzAsMTczKSB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgdGhpcy5FID0gW1xuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDI0MCwyMjApIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjU1LDI0NSkgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyNzUsMjc0KSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDI5MSwyOTkpIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB0aGlzLkYgPSBbXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjAzLDIzMikgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxOTQsMjY3KSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDE5MCwyOTEpIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTgxLDMyNCkgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIHRoaXMuRyA9IFtcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxODQsMjEwKSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDE2MSwyMjcpIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTQxLDI0MSkgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxMjIsMjU4KSB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgdGhpcy5IID0gW1xuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDE3NCwxODYpIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTQ4LDE4OCkgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxMjcsMTkwKSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDk1LDE5MykgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIHRoaXMuQUIgPSBbXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjA4LDE0NSksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjA1LDEyMyksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjA0LDEwNCksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTk2LDgzKSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIHRoaXMuQkMgPSBbXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjM3LDE0OSksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjQ3LDEzMyksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjU4LDExMyksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjc0LDkxKSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIHRoaXMuQ0QgPSBbXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjU3LDE2NSksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjc5LDE1OCksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjk3LDE1MSksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMzE4LDE0MiksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB0aGlzLkRFID0gW1xuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDI1MSwxOTgpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDI2OSwyMDcpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDI4NSwyMTIpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDMwOCwyMjQpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgdGhpcy5FRiA9IFtcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyMjAsMjI0KSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyMjgsMjQ5KSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyMjcsMjc2KSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyMzksMzAyKSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIHRoaXMuRkcgPSBbXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTkxLDIxOCksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTc3LDI0MyksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTY1LDI2MCksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTQ5LDI4MiksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB0aGlzLkdIID0gW1xuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDE4MCwxOTcpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDE1NCwyMDQpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDEzNSwyMTQpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDExMCwyMjApLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgdGhpcy5IQSA9IFtcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxODQsMTY2KSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxNjIsMTU3KSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxNDksMTQyKSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxMjMsMTM4KSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIHRoaXMuWiA9IFt7IHBvaW50OiBuZXcgUG9pbnQoMjE1LDE4NCkgfV07XG4gICAgfVxuXG4gICAgZ2V0U3RhcnRpbmdOb2RlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ1onLCAwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJhbmRvbUxpbmUoKSB7XG4gICAgICAgIGxldCByYW1vID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgIGxldCBub2RlO1xuICAgICAgICBzd2l0Y2ggKHJhbW8pIHtcbiAgICAgICAgICAgIGNhc2UgMDoge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLnJhbmRvbUxpbmVGcm9tKCdBQicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMucmFuZG9tTGluZUZyb20oJ0JDJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5yYW5kb21MaW5lRnJvbSgnQ0QnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMzoge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLnJhbmRvbUxpbmVGcm9tKCdERScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSA0OiB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMucmFuZG9tTGluZUZyb20oJ0VGJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDU6IHtcbiAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5yYW5kb21MaW5lRnJvbSgnRkcnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNjoge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLnJhbmRvbUxpbmVGcm9tKCdHSCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSA3OiB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMucmFuZG9tTGluZUZyb20oJ0hBJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuYnJva2VuIHx8IG5vZGUuaW5zZWN0IHx8IG5vZGUuYm9udXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmRvbUxpbmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByYW5kb21MaW5lRnJvbShyYW1vOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGdpcm8gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzW3JhbW9dLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB0aGlzW3JhbW9dW2dpcm9dO1xuICAgIH1cblxuICAgIGdldFBvaW50KG5vZG86IHsgcmFtbzogc3RyaW5nOyBnaXJvOiBudW1iZXIgfSkge1xuICAgICAgICByZXR1cm4gdGhpc1tub2RvLnJhbW9dW25vZG8uZ2lyb10ucG9pbnQ7XG4gICAgfVxuXG4gICAgZ2V0Tm9kZU9uVG9wKHdlYk5vZGU6IFdlYk5vZGUpIHtcbiAgICAgICAgc3dpdGNoICh3ZWJOb2RlLnJhbW8pIHtcbiAgICAgICAgICAgIGNhc2UgJ0EnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29PdXQod2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdCJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvT3V0KHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnQyc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0InLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0MnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0QnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb0luKHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRyc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0gnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnSCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0EnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnWic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0InLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2ViTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE5vZGVPblRvcFJpZ2h0KHdlYk5vZGU6IFdlYk5vZGUpIHtcbiAgICAgICAgc3dpdGNoICh3ZWJOb2RlLnJhbW8pIHtcbiAgICAgICAgICAgIGNhc2UgJ0EnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdCJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0InOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29PdXQod2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdDJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvT3V0KHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb091dCh3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0UnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdEJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0YnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdFJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0cnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29Jbih3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0gnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdBJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ1onOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdDJywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXROb2RlT25SaWdodCh3ZWJOb2RlOiBXZWJOb2RlKSB7XG4gICAgICAgIHN3aXRjaCAod2ViTm9kZS5yYW1vKSB7XG4gICAgICAgICAgICBjYXNlICdBJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnQicsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdCJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnQycsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdDJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvT3V0KHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb091dCh3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0UnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdEJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0YnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdFJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0cnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29Jbih3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0gnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29Jbih3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ1onOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdEJywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXROb2RlT25Cb3R0b21SaWdodCh3ZWJOb2RlOiBXZWJOb2RlKSB7XG4gICAgICAgIHN3aXRjaCAod2ViTm9kZS5yYW1vKSB7XG4gICAgICAgICAgICBjYXNlICdBJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvSW4od2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdCJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnQycsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdDJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnRCcsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdEJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWJOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb091dCh3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0YnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdFJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0cnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdGJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0gnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdHJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ1onOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdFJywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXROb2RlT25Cb3R0b20od2ViTm9kZTogV2ViTm9kZSkge1xuICAgICAgICBzd2l0Y2ggKHdlYk5vZGUucmFtbykge1xuICAgICAgICAgICAgY2FzZSAnQSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0gnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnQic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb0luKHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnQyc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0QnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0UnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb091dCh3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0YnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29PdXQod2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdHJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnRicsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdIJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnRycsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdaJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnRicsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWJOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Tm9kZU9uQm90dG9tTGVmdCh3ZWJOb2RlOiBXZWJOb2RlKSB7XG4gICAgICAgIHN3aXRjaCAod2ViTm9kZS5yYW1vKSB7XG4gICAgICAgICAgICBjYXNlICdBJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnSCcsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdCJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvSW4od2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdDJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvSW4od2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdEJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnRScsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdFJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnRicsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdGJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvT3V0KHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRyc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb091dCh3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0gnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdaJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnRycsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWJOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Tm9kZU9uTGVmdCh3ZWJOb2RlOiBXZWJOb2RlKSB7XG4gICAgICAgIHN3aXRjaCAod2ViTm9kZS5yYW1vKSB7XG4gICAgICAgICAgICBjYXNlICdBJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWJOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnQic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0EnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnQyc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0InLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb0luKHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0YnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0cnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRyc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb091dCh3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0gnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29PdXQod2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdaJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnSCcsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWJOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Tm9kZU9uVG9wTGVmdCh3ZWJOb2RlOiBXZWJOb2RlKSB7XG4gICAgICAgIHN3aXRjaCAod2ViTm9kZS5yYW1vKSB7XG4gICAgICAgICAgICBjYXNlICdBJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvT3V0KHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnQic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0EnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnQyc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0InLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0MnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb0luKHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0cnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRyc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0gnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnSCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2ViTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ1onOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdBJywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdvT3V0KHdlYk5vZGU6IFdlYk5vZGUpIHtcbiAgICAgICAgbGV0IG5ld0dpcm8gPSB3ZWJOb2RlLmdpcm8gPCAzID8gd2ViTm9kZS5naXJvICsgMSA6IHdlYk5vZGUuZ2lybztcbiAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKHdlYk5vZGUucmFtbywgbmV3R2lybylcbiAgICB9XG5cbiAgICBwcml2YXRlIGdvSW4od2ViTm9kZTogV2ViTm9kZSkge1xuICAgICAgICBpZiAod2ViTm9kZS5naXJvID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKHdlYk5vZGUucmFtbywgd2ViTm9kZS5naXJvLTEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ1onLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEluc2VjdFRvUmFuZG9tTGluZSh0ZXh0dXJlOiBzdHJpbmcsIGVkaWJsZTogYm9vbGVhbiwgZGVzdHJveURlbGF5ID0gMTUwMCkge1xuICAgICAgICBsZXQgbGluZSA9IHRoaXMuZ2V0UmFuZG9tTGluZSgpO1xuICAgICAgICBsaW5lLmluc2VjdCA9IHRydWU7XG4gICAgICAgIGxpbmUuZWRpYmxlID0gZWRpYmxlO1xuICAgICAgICBsaW5lLnNwcml0ZSA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKGxpbmUucG9pbnQueCwgbGluZS5wb2ludC55LCB0ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5zY2VuZS50aW1lLmRlbGF5ZWRDYWxsKGRlc3Ryb3lEZWxheSwgdGhpcy5kZXN0cm95SW5zZWN0LCBbbGluZV0sIHRoaXMpO1xuICAgIH1cblxuICAgIGRlc3Ryb3lJbnNlY3QobGluZSkge1xuICAgICAgICBpZiAobGluZS5zcHJpdGUpIHtcbiAgICAgICAgICAgIGxpbmUuc3ByaXRlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGxpbmUuaW5zZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICBsaW5lLmVkaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ob2xlQ291bnQgKz0gMTtcbiAgICAgICAgICAgIGxpbmUuc3ByaXRlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UobGluZS5wb2ludC54LCBsaW5lLnBvaW50LnksICdob2xlJyk7XG4gICAgICAgICAgICBsaW5lLmJyb2tlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRCb251c1RvUmFuZG9tTGluZSh0ZXh0dXJlOiBzdHJpbmcsIGRlc3Ryb3lEZWxheSA9IDUwMDApIHtcbiAgICAgICAgbGV0IGxpbmUgPSB0aGlzLmdldFJhbmRvbUxpbmUoKTtcbiAgICAgICAgbGluZS5ib251cyA9IHRydWU7XG4gICAgICAgIGxpbmUuc3ByaXRlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UobGluZS5wb2ludC54LCBsaW5lLnBvaW50LnksIHRleHR1cmUpO1xuICAgICAgICB0aGlzLnNjZW5lLnRpbWUuZGVsYXllZENhbGwoZGVzdHJveURlbGF5LCB0aGlzLmRlc3Ryb3lCb251cywgW2xpbmVdLCB0aGlzKTtcbiAgICB9XG5cbiAgICBkZXN0cm95Qm9udXMobGluZSkge1xuICAgICAgICBpZiAobGluZS5zcHJpdGUpIHtcbiAgICAgICAgICAgIGxpbmUuc3ByaXRlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGxpbmUuaW5zZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICBsaW5lLmVkaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGluZS5ib251cyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGluZUJldHdlZW4oZnJvbTogV2ViTm9kZSwgdG86IFdlYk5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXNbZnJvbS5yYW1vK3RvLnJhbW9dKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tmcm9tLnJhbW8rdG8ucmFtb11bZnJvbS5naXJvXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3RvLnJhbW8rZnJvbS5yYW1vXVtmcm9tLmdpcm9dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNNb3ZpbmdPblJhbW8oZnJvbTogV2ViTm9kZSwgdG86IFdlYk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZyb20ucmFtbyA9PT0gJ1onIHx8IHRvLnJhbW8gPT09ICdaJyB8fCBmcm9tLnJhbW8gPT09IHRvLnJhbW87XG4gICAgfVxuXG4gICAgcmVwYWlyQmV0d2Vlbihmcm9tOiBXZWJOb2RlLCB0bzogV2ViTm9kZSkge1xuICAgICAgICBsZXQgbGluZUJldHdlZW4gPSB0aGlzLmdldExpbmVCZXR3ZWVuKGZyb20sIHRvKTtcbiAgICAgICAgbGluZUJldHdlZW4uc3ByaXRlLmRlc3Ryb3koKTtcbiAgICAgICAgbGluZUJldHdlZW4uYnJva2VuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaG9sZUNvdW50IC09IDE7XG4gICAgfVxuXG4gICAgYnJva2VGb3VyTGluZXMoKSB7XG4gICAgICAgIGxldCByYW1vID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgIHN3aXRjaCAocmFtbykge1xuICAgICAgICAgICAgY2FzZSAwOiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYWJFbGVtZW50IG9mIHRoaXMuQUIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZUxpbmUoYWJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhYkVsZW1lbnQgb2YgdGhpcy5CQykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlTGluZShhYkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGFiRWxlbWVudCBvZiB0aGlzLkNEKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJva2VMaW5lKGFiRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYWJFbGVtZW50IG9mIHRoaXMuREUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZUxpbmUoYWJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSA0OiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYWJFbGVtZW50IG9mIHRoaXMuRUYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZUxpbmUoYWJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDU6IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhYkVsZW1lbnQgb2YgdGhpcy5GRykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlTGluZShhYkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNjoge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGFiRWxlbWVudCBvZiB0aGlzLkdIKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJva2VMaW5lKGFiRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSA3OiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYWJFbGVtZW50IG9mIHRoaXMuSEEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZUxpbmUoYWJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGJyb2tlTGluZShlbDogeyBwb2ludDogUGhhc2VyLkdlb20uUG9pbnQ7IGluc2VjdDogYm9vbGVhbjsgYm9udXM6IGJvb2xlYW47IGJyb2tlbjogYm9vbGVhbjsgZWRpYmxlOiBib29sZWFuOyBzcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB9KSB7XG4gICAgICAgIGlmIChlbC5zcHJpdGUpIHtcbiAgICAgICAgICAgIGVsLnNwcml0ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWwuaW5zZWN0ID0gZmFsc2U7XG4gICAgICAgIGVsLmJvbnVzID0gZmFsc2U7XG4gICAgICAgIGVsLmJyb2tlbiA9IHRydWU7XG4gICAgICAgIGVsLmVkaWJsZSA9IGZhbHNlO1xuICAgICAgICBlbC5zcHJpdGUgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZShlbC5wb2ludC54LCBlbC5wb2ludC55LCAnaG9sZScpO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQge1dlYk5vZGV9IGZyb20gXCIuL1dlYk5vZGVcIjtcbmltcG9ydCB7UmFnbmF0ZWxhTWlkUmVzfSBmcm9tIFwiLi9SYWduYXRlbGFNaWRSZXNcIjtcbmltcG9ydCBTY2VuZSA9IFBoYXNlci5TY2VuZTtcblxuZXhwb3J0IGNsYXNzIFJhZ25vIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XG5cbiAgICBwcml2YXRlIG15V2ViTm9kZTogV2ViTm9kZTtcbiAgICBwcml2YXRlIHJhZ25hdGVsYTogUmFnbmF0ZWxhTWlkUmVzO1xuICAgIHByaXZhdGUgdGFyZ2V0Tm9kZTogUGhhc2VyLk1hdGguVmVjdG9yMjtcbiAgICBwcml2YXRlIG1vdmluZ1NvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xuICAgIHByaXZhdGUgcmVwYWlyaW5nU291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG4gICAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyID0gMTUwO1xuICAgIHByaXZhdGUgd2FpdE5vZGU6IFBoYXNlci5NYXRoLlZlY3RvcjI7XG4gICAgcHJpdmF0ZSBsb2NrT25SZXBhaXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHByZXZpb3VzTm9kZTogV2ViTm9kZTtcbiAgICBwcml2YXRlIHBhcnRpY2xlczogQXJyYXk8YW55PiA9IFtdO1xuICAgIGRlYWQ6IGJvb2xlYW47XG4gICAgY29ubmluZWxsYVRha2VuQ291bnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSwgdGV4dHVyZTogc3RyaW5nLCByYWduYXRlbGE6IFJhZ25hdGVsYU1pZFJlcykge1xuICAgICAgICBzdXBlcihzY2VuZSwgMjA2LCAwLCB0ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5yYWduYXRlbGEgPSByYWduYXRlbGE7XG4gICAgICAgIHRoaXMubXlXZWJOb2RlID0gdGhpcy5yYWduYXRlbGEuZ2V0U3RhcnRpbmdOb2RlKCk7XG4gICAgICAgIHRoaXMudGFyZ2V0Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbm5pbmVsbGFUYWtlbkNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5tb3ZpbmdTb3VuZCA9IHRoaXMuc2NlbmUuc291bmQuYWRkKCdzcGlkZXJtb3ZlJyk7XG4gICAgICAgIHRoaXMucmVwYWlyaW5nU291bmQgPSB0aGlzLnNjZW5lLnNvdW5kLmFkZCgnc3BpZGVycmVwYWlyJywge1xuICAgICAgICAgICAgdm9sdW1lOiAuMlxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXREZXB0aCgxMCk7XG4gICAgICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICAgICAgc2NlbmUucGh5c2ljcy5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Ubyh0aGlzLm15V2ViTm9kZSk7XG5cbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ21vdmUnLFxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyh0ZXh0dXJlLCB7IHN0YXJ0OiAxLCBlbmQ6IDcgfSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDE1LFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ3N0YXknLFxuICAgICAgICAgICAgZnJhbWVzOiBbIHsga2V5OiB0ZXh0dXJlLCBmcmFtZTogMCB9IF0sXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDIwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMS41NjtcbiAgICAgICAgdGhpcy5hbmltcy5wbGF5KCdtb3ZlJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb25Ubyh3ZWJOb2RlOiBXZWJOb2RlKSB7XG4gICAgICAgIGxldCBwb2ludFRvTW92ZVRvID0gdGhpcy5wcmVwYXJlTW92aW5nQW5pbWF0aW9uKHdlYk5vZGUpO1xuXG4gICAgICAgIGlmICh0aGlzLnJhZ25hdGVsYS5pc01vdmluZ09uUmFtbyh0aGlzLm15V2ViTm9kZSwgd2ViTm9kZSkpIHtcblxuICAgICAgICAgICAgdGhpcy5tb3ZpbmdTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ21vdmUnLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZSA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKHBvaW50VG9Nb3ZlVG8ueCwgcG9pbnRUb01vdmVUby55KTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5tb3ZlVG9PYmplY3QodGhpcywgdGhpcy50YXJnZXROb2RlLCB0aGlzLnNwZWVkKTtcbiAgICAgICAgICAgIHRoaXMubXlXZWJOb2RlID0gd2ViTm9kZTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxpbmVCZXR3ZWVuID0gdGhpcy5yYWduYXRlbGEuZ2V0TGluZUJldHdlZW4odGhpcy5teVdlYk5vZGUsIHdlYk5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobGluZUJldHdlZW4uaW5zZWN0KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAobGluZUJldHdlZW4uZWRpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nU291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ21vdmUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIocG9pbnRUb01vdmVUby54LCBwb2ludFRvTW92ZVRvLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnBoeXNpY3MubW92ZVRvT2JqZWN0KHRoaXMsIHRoaXMudGFyZ2V0Tm9kZSwgdGhpcy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlXZWJOb2RlID0gd2ViTm9kZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lLm1hbnRpZGVFdmVudCAmJiBsaW5lQmV0d2Vlbi5zcHJpdGUudGV4dHVyZS5rZXkgPT09ICdjb2NjaW5lbGxhJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KCdjb2NjaW5lbGxhcGVybmluamEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmluZWxsYVRha2VuQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxpbmVCZXR3ZWVuLnNwcml0ZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVCZXR3ZWVuLmluc2VjdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBsaW5lQmV0d2Vlbi5lZGlibGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJTlNFVFRJIGdyYW5kaSwgbm9uIG1pIG11b3ZvJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBpZiAobGluZUJldHdlZW4uYnJva2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KCdtb3ZlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy53YWl0Tm9kZSA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKGxpbmVCZXR3ZWVuLnBvaW50LngsIGxpbmVCZXR3ZWVuLnBvaW50LnkpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZSA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKHBvaW50VG9Nb3ZlVG8ueCwgcG9pbnRUb01vdmVUby55KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnBoeXNpY3MubW92ZVRvT2JqZWN0KHRoaXMsIHRoaXMud2FpdE5vZGUsIHRoaXMuc3BlZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNOb2RlID0gdGhpcy5teVdlYk5vZGU7XG4gICAgICAgICAgICAgICAgdGhpcy5teVdlYk5vZGUgPSB3ZWJOb2RlO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBpZiAobGluZUJldHdlZW4uYm9udXMpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGxpbmVCZXR3ZWVuLnNwcml0ZS50ZXh0dXJlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmdW5nbyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29PbkRydWdzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnRpbWUuZGVsYXllZENhbGwoMjAwMCwgdGhpcy5maW5pc2hEcnVncywgW10sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2FmZmUnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkICs9IDUwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JhY2NvbHRvIGJvaCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KCdtb3ZlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIocG9pbnRUb01vdmVUby54LCBwb2ludFRvTW92ZVRvLnkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5tb3ZlVG9PYmplY3QodGhpcywgdGhpcy50YXJnZXROb2RlLCB0aGlzLnNwZWVkKTtcbiAgICAgICAgICAgICAgICB0aGlzLm15V2ViTm9kZSA9IHdlYk5vZGU7XG4gICAgICAgICAgICAgICAgbGluZUJldHdlZW4uc3ByaXRlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBsaW5lQmV0d2Vlbi5ib251cyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KCdtb3ZlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIocG9pbnRUb01vdmVUby54LCBwb2ludFRvTW92ZVRvLnkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5tb3ZlVG9PYmplY3QodGhpcywgdGhpcy50YXJnZXROb2RlLCB0aGlzLnNwZWVkKTtcbiAgICAgICAgICAgICAgICB0aGlzLm15V2ViTm9kZSA9IHdlYk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHByZXBhcmVNb3ZpbmdBbmltYXRpb24od2ViTm9kZTogV2ViTm9kZSkge1xuICAgICAgICBsZXQgY3VycmVudFBvaW50ID0gdGhpcy5yYWduYXRlbGEuZ2V0UG9pbnQodGhpcy5teVdlYk5vZGUpO1xuICAgICAgICBsZXQgcG9pbnRUb01vdmVUbyA9IHRoaXMucmFnbmF0ZWxhLmdldFBvaW50KHdlYk5vZGUpO1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2VlblBvaW50cyhjdXJyZW50UG9pbnQsIHBvaW50VG9Nb3ZlVG8pO1xuICAgICAgICByZXR1cm4gcG9pbnRUb01vdmVUbztcbiAgICB9XG5cbiAgICB1cCgpIHtcbiAgICAgICAgbGV0IHdlYk5vZGUgPSB0aGlzLnJhZ25hdGVsYS5nZXROb2RlT25Ub3AodGhpcy5teVdlYk5vZGUpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uVG8od2ViTm9kZSk7XG4gICAgfVxuXG4gICAgdXBSaWdodCgpIHtcbiAgICAgICAgbGV0IHdlYk5vZGUgPSB0aGlzLnJhZ25hdGVsYS5nZXROb2RlT25Ub3BSaWdodCh0aGlzLm15V2ViTm9kZSk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Ubyh3ZWJOb2RlKTtcbiAgICB9XG5cbiAgICByaWdodCgpIHtcbiAgICAgICAgbGV0IHdlYk5vZGUgPSB0aGlzLnJhZ25hdGVsYS5nZXROb2RlT25SaWdodCh0aGlzLm15V2ViTm9kZSk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Ubyh3ZWJOb2RlKTtcbiAgICB9XG5cbiAgICBkb3duUmlnaHQoKSB7XG4gICAgICAgIGxldCB3ZWJOb2RlID0gdGhpcy5yYWduYXRlbGEuZ2V0Tm9kZU9uQm90dG9tUmlnaHQodGhpcy5teVdlYk5vZGUpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uVG8od2ViTm9kZSk7XG4gICAgfVxuXG4gICAgZG93bigpIHtcbiAgICAgICAgbGV0IHdlYk5vZGUgPSB0aGlzLnJhZ25hdGVsYS5nZXROb2RlT25Cb3R0b20odGhpcy5teVdlYk5vZGUpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uVG8od2ViTm9kZSk7XG4gICAgfVxuXG4gICAgZG93bkxlZnQoKSB7XG4gICAgICAgIGxldCB3ZWJOb2RlID0gdGhpcy5yYWduYXRlbGEuZ2V0Tm9kZU9uQm90dG9tTGVmdCh0aGlzLm15V2ViTm9kZSk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Ubyh3ZWJOb2RlKTtcbiAgICB9XG5cbiAgICBsZWZ0KCkge1xuICAgICAgICBsZXQgd2ViTm9kZSA9IHRoaXMucmFnbmF0ZWxhLmdldE5vZGVPbkxlZnQodGhpcy5teVdlYk5vZGUpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uVG8od2ViTm9kZSk7XG4gICAgfVxuXG4gICAgdXBMZWZ0KCkge1xuICAgICAgICBsZXQgd2ViTm9kZSA9IHRoaXMucmFnbmF0ZWxhLmdldE5vZGVPblRvcExlZnQodGhpcy5teVdlYk5vZGUpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uVG8od2ViTm9kZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5sb2NrT25SZXBhaXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndhaXROb2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gUGhhc2VyLk1hdGguRGlzdGFuY2UuQmV0d2Vlbih0aGlzLngsIHRoaXMueSwgdGhpcy53YWl0Tm9kZS54LCB0aGlzLndhaXROb2RlLnkpO1xuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5LnJlc2V0KHRoaXMud2FpdE5vZGUueCwgdGhpcy53YWl0Tm9kZS55KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRSZXBhaXIoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPiAxMDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnRpbWUuZGVsYXllZENhbGwoNTAwLCB0aGlzLmZpbmlzaFJlcGFpciwgW10sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS50aW1lLmRlbGF5ZWRDYWxsKDE1MDAtdGhpcy5zcGVlZCwgdGhpcy5maW5pc2hSZXBhaXIsIFtdLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gUGhhc2VyLk1hdGguRGlzdGFuY2UuQmV0d2Vlbih0aGlzLngsIHRoaXMueSwgdGhpcy50YXJnZXROb2RlLngsIHRoaXMudGFyZ2V0Tm9kZS55KTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9keS5yZXNldCh0aGlzLnRhcmdldE5vZGUueCwgdGhpcy50YXJnZXROb2RlLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1NvdW5kLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KCdzdGF5JywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNNb3ZpbmcoKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0Tm9kZSAmJiAodGhpcy5ib2R5LnNwZWVkID4gMCB8fCB0aGlzLmxvY2tPblJlcGFpcik7XG4gICAgfVxuXG4gICAgc3RhcnRSZXBhaXIoKSB7XG4gICAgICAgIHRoaXMubW92aW5nU291bmQuc3RvcCgpO1xuICAgICAgICB0aGlzLnJlcGFpcmluZ1NvdW5kLnBsYXkoKTtcbiAgICAgICAgdGhpcy5sb2NrT25SZXBhaXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnJhZ25hdGVsYS5yZXBhaXJCZXR3ZWVuKHRoaXMucHJldmlvdXNOb2RlLCB0aGlzLm15V2ViTm9kZSk7XG4gICAgfVxuXG4gICAgZmluaXNoUmVwYWlyKCkge1xuICAgICAgICB0aGlzLnJlcGFpcmluZ1NvdW5kLnN0b3AoKTtcbiAgICAgICAgdGhpcy5tb3ZpbmdTb3VuZC5wbGF5KCk7XG4gICAgICAgIHRoaXMubG9ja09uUmVwYWlyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5tb3ZlVG9PYmplY3QodGhpcywgdGhpcy50YXJnZXROb2RlLCB0aGlzLnNwZWVkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdvT25EcnVncygpIHtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzMDA7IGkrKykge1xuXG4gICAgICAgICAgICB2YXIgeCA9IFBoYXNlci5NYXRoLkJldHdlZW4oLTY0LCA1MDApO1xuICAgICAgICAgICAgdmFyIHkgPSBQaGFzZXIuTWF0aC5CZXR3ZWVuKC02NCwgNTAwKTtcblxuICAgICAgICAgICAgdmFyIGltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoeCwgeSwgJ3BhcnRpY2xlJyk7XG4gICAgICAgICAgICBpbWFnZS5zZXREZXB0aCgxMSk7XG4gICAgICAgICAgICBpbWFnZS5zZXRCbGVuZE1vZGUoUGhhc2VyLkJsZW5kTW9kZXMuQUREKTtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnB1c2goeyBzOiBpbWFnZSwgcjogMiArIE1hdGgucmFuZG9tKCkgKiA2IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUGFydGljbGVzKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc3ByaXRlID0gdGhpcy5wYXJ0aWNsZXNbaV0ucztcblxuICAgICAgICAgICAgc3ByaXRlLnkgLT0gdGhpcy5wYXJ0aWNsZXNbaV0ucjtcblxuICAgICAgICAgICAgaWYgKHNwcml0ZS55IDwgLTI1Nikge1xuICAgICAgICAgICAgICAgIHNwcml0ZS55ID0gNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5pc2hEcnVncygpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNwcml0ZSA9IHRoaXMucGFydGljbGVzW2ldLnM7XG4gICAgICAgICAgICBzcHJpdGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gW107XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbXMucGxheSgnc3RheScsIHRydWUpO1xuICAgICAgICB2YXIgZGVhdGhOb2RlID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIodGhpcy5ib2R5LngsIDgwMCk7XG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5tb3ZlVG9PYmplY3QodGhpcywgZGVhdGhOb2RlLCAxNTApO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQgU2NlbmUgPSBQaGFzZXIuU2NlbmU7XG5cbmV4cG9ydCBjbGFzcyBSYWdub1RpdG9sbyBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xuXG4gICAgcHJpdmF0ZSBtb3ZpbmdTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSAxNTA7XG4gICAgcHJpdmF0ZSB0YXJnZXRQb2ludDogUGhhc2VyLk1hdGguVmVjdG9yMjtcblxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lLCB0ZXh0dXJlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIDEzNSwgMCwgdGV4dHVyZSk7XG4gICAgICAgIHRoaXMubW92aW5nU291bmQgPSB0aGlzLnNjZW5lLnNvdW5kLmFkZCgnc3BpZGVybW92ZScpO1xuICAgICAgICB0aGlzLnNldERlcHRoKDEwKTtcbiAgICAgICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xuICAgICAgICBzY2VuZS5waHlzaWNzLmFkZC5leGlzdGluZyh0aGlzKTtcblxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnbW92ZScsXG4gICAgICAgICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKHRleHR1cmUsIHsgc3RhcnQ6IDEsIGVuZDogNyB9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTUsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnc3RheScsXG4gICAgICAgICAgICBmcmFtZXM6IFsgeyBrZXk6IHRleHR1cmUsIGZyYW1lOiAwIH0gXSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMjBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSAxLjU2O1xuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ21vdmUnLCB0cnVlKTtcbiAgICAgICAgdGhpcy50YXJnZXRQb2ludCA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKDEyMSwgMjM2KTtcbiAgICAgICAgdGhpcy5zdGFydE1vdmluZ1RvKCk7XG4gICAgfVxuXG4gICAgc3RhcnRNb3ZpbmdUbygpIHtcbiAgICAgICAgICAgIHRoaXMubW92aW5nU291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KCdtb3ZlJywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBoeXNpY3MubW92ZVRvT2JqZWN0KHRoaXMsIHRoaXMudGFyZ2V0UG9pbnQsIHRoaXMuc3BlZWQpO1xuICAgIH1cblxuICAgIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgZGlzdGFuY2UgPSBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuKHRoaXMueCwgdGhpcy55LCB0aGlzLnRhcmdldFBvaW50LngsIHRoaXMudGFyZ2V0UG9pbnQueSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8IDQpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keS5yZXNldCh0aGlzLnRhcmdldFBvaW50LngsIHRoaXMudGFyZ2V0UG9pbnQueSk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldFBvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMubW92aW5nU291bmQuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KCdzdGF5JywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGlzTW92aW5nKCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldFBvaW50ICYmIHRoaXMuYm9keS5zcGVlZCA+IDA7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCB7UmFnbm9UaXRvbG99IGZyb20gXCIuL1JhZ25vVGl0b2xvXCI7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGtleTogJ1RpdG9sbydcbn07XG5cbmV4cG9ydCBjbGFzcyBUaXRsZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblxuICAgIHByaXZhdGUgcmFnbm86IFJhZ25vVGl0b2xvO1xuICAgIHByaXZhdGUgc3RhcnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICAgIH1cblxuICAgIHByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnc3BpZGVybW92ZScsICdhc3NldHMvYXVkaW8vc3BpZGVybW92ZS5tcDMnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdhbGJlcmknLCAnYXNzZXRzL3Nwcml0ZXMvYWxiZXJpbWlkcmVzLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Nmb25kbycsICdhc3NldHMvc3ByaXRlcy9wcm9zZm9uZG8ucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnbWFudGlkZScsICdhc3NldHMvc3ByaXRlcy9tYW50aWRlbWlkcmVzLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RpdG9sbycsICdhc3NldHMvc3ByaXRlcy90aXRvbG8ucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncmFnbm9zaGVldCcsXG4gICAgICAgICAgICAnYXNzZXRzL3Nwcml0ZXMvcmFnbm9zaGVldC5wbmcnLFxuICAgICAgICAgICAgeyBmcmFtZVdpZHRoOiA4OSwgZnJhbWVIZWlnaHQ6IDg3IH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuYWRkLmltYWdlKHRoaXMuc2NhbGUud2lkdGgvMix0aGlzLnNjYWxlLmhlaWdodC8yLCAnc2ZvbmRvJyk7XG4gICAgICAgIHRoaXMuYWRkLmltYWdlKHRoaXMuc2NhbGUud2lkdGgvMix0aGlzLnNjYWxlLmhlaWdodC8yLCAnYWxiZXJpJyk7XG4gICAgICAgIHRoaXMuYWRkLmltYWdlKHRoaXMuc2NhbGUud2lkdGgvMix0aGlzLnNjYWxlLmhlaWdodC8yLCAndGl0b2xvJyk7XG4gICAgICAgIHRoaXMuYWRkLmltYWdlKDMwMCwzNDAsICdtYW50aWRlJyk7XG4gICAgICAgIHRoaXMucmFnbm8gPSBuZXcgUmFnbm9UaXRvbG8odGhpcywgJ3JhZ25vc2hlZXQnKTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TUEFDRSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5yYWduby5pc01vdmluZygpKSB7XG4gICAgICAgICAgICB0aGlzLnJhZ25vLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKHRoaXMuc3RhcnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zd2l0Y2goJ0dhbWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgV2ViTm9kZSB7XG4gICAgcHVibGljIHJhbW86IHN0cmluZztcbiAgICBwdWJsaWMgZ2lybzogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocmFtbzogc3RyaW5nLCBnaXJvOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5yYW1vID0gcmFtbztcbiAgICAgICAgdGhpcy5naXJvID0gZ2lybztcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQge0dhbWVTY2VuZX0gZnJvbSBcIi4vR2FtZVNjZW5lXCI7XG5pbXBvcnQge1RpdGxlU2NlbmV9IGZyb20gXCIuL1RpdGxlU2NlbmVcIjtcbmltcG9ydCB7R2FtZU92ZXJTY2VuZX0gZnJvbSBcIi4vR2FtZU92ZXJTY2VuZVwiO1xuXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xuICAgIHRpdGxlOiAnVHlwZXBsYXknLFxuXG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXG4gICAgem9vbTogMSxcbiAgICBzY2FsZToge1xuICAgICAgICB6b29tOiAyLFxuICAgICAgICB3aWR0aDogNDEyLFxuICAgICAgICBoZWlnaHQ6IDQxMixcbiAgICB9LFxuXG4gICAgcmVuZGVyOiB7XG4gICAgICAgIHBpeGVsQXJ0OiB0cnVlXG4gICAgfSxcblxuICAgIHBoeXNpY3M6IHtcbiAgICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgICAgIGFyY2FkZToge1xuICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBwYXJlbnQ6ICdnYW1lJyxcbiAgICBzY2VuZTogW1RpdGxlU2NlbmUsIEdhbWVTY2VuZSwgR2FtZU92ZXJTY2VuZV0sXG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=