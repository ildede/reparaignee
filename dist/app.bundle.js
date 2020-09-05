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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameOverScene = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameScene = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RagnatelaMidRes = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ragno = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RagnoTitolo = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleScene = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
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
exports.WebNode = void 0;
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
exports.game = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVPdmVyU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmFnbmF0ZWxhTWlkUmVzLnRzIiwid2VicGFjazovLy8uL3NyYy9SYWduby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmFnbm9UaXRvbG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RpdGxlU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dlYk5vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FB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QUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxD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RSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFO1NBQzNCLENBQUM7UUFDTixLQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ0wsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUU7WUFDNUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFO1NBQy9CLENBQUM7UUFDRixLQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ0wsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1NBQzVCLENBQUM7UUFDTixLQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ0wsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1NBQzVCLENBQUM7UUFDTixLQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ0wsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1NBQzVCLENBQUM7UUFDTixLQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ0wsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1NBQzVCLENBQUM7UUFDTixLQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ0wsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1NBQzVCLENBQUM7UUFDTixLQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ0wsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQyxFQUFFO1NBQzNCLENBQUM7UUFDTixLQUFJLENBQUMsRUFBRSxHQUFHO1lBQ04sRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtTQUNwRyxDQUFDO1FBQ04sS0FBSSxDQUFDLEVBQUUsR0FBRztZQUNOLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7U0FDcEcsQ0FBQztRQUNOLEtBQUksQ0FBQyxFQUFFLEdBQUc7WUFDTixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1NBQ3JHLENBQUM7UUFDTixLQUFJLENBQUMsRUFBRSxHQUFHO1lBQ04sRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtTQUNyRyxDQUFDO1FBQ04sS0FBSSxDQUFDLEVBQUUsR0FBRztZQUNOLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7U0FDckcsQ0FBQztRQUNOLEtBQUksQ0FBQyxFQUFFLEdBQUc7WUFDTixFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1NBQ3JHLENBQUM7UUFDTixLQUFJLENBQUMsRUFBRSxHQUFHO1lBQ04sRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtTQUNyRyxDQUFDO1FBQ04sS0FBSSxDQUFDLEVBQUUsR0FBRztZQUNOLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FB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Qyx1QkFBVSxFQUFFLHFCQUFTLEVBQUUsNkJBQWEsQ0FBQztDQUNoRCxDQUFDO0FBRVcsWUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHtSYWdub1RpdG9sb30gZnJvbSBcIi4vUmFnbm9UaXRvbG9cIjtcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBrZXk6ICdHYW1lT3Zlcidcbn07XG5cbmV4cG9ydCBjbGFzcyBHYW1lT3ZlclNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblxuICAgIHByaXZhdGUgc3BhY2U6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gICAgcHJpdmF0ZSBkZWRpY2E6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcbiAgICBwcml2YXRlIGZsaXA6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBjcmVkaXQ6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdkZWRpY2EnLCAnYXNzZXRzL3Nwcml0ZXMvZGVkaWNhLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2RlbGlsYWgnLCAnYXNzZXRzL3Nwcml0ZXMvZGVsaWxhaC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdpbGRlZGUnLCAnYXNzZXRzL3Nwcml0ZXMvaWxkZWRlLnBuZycpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5kZWRpY2EgPSB0aGlzLmFkZC5pbWFnZSh0aGlzLnNjYWxlLndpZHRoLzIsdGhpcy5zY2FsZS5oZWlnaHQvMiwgJ2RlZGljYScpO1xuICAgICAgICB0aGlzLnNwYWNlID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNQQUNFKTtcbiAgICAgICAgdGhpcy5mbGlwID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgaWYgKFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLnNwYWNlKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVkaWNhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWRpY2EuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVkaWNhID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZC5pbWFnZSh0aGlzLnNjYWxlLndpZHRoLzIsdGhpcy5zY2FsZS5oZWlnaHQvMiwgJ2FsYmVyaScpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlZGl0ID0gdGhpcy5hZGQuaW1hZ2UodGhpcy5zY2FsZS53aWR0aC8yLHRoaXMuc2NhbGUuaGVpZ2h0LzIsICdkZWxpbGFoJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZsaXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVkaXQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWRpdCA9IHRoaXMuYWRkLmltYWdlKHRoaXMuc2NhbGUud2lkdGgvMix0aGlzLnNjYWxlLmhlaWdodC8yLCAnaWxkZWRlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVkaXQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWRpdCA9IHRoaXMuYWRkLmltYWdlKHRoaXMuc2NhbGUud2lkdGgvMix0aGlzLnNjYWxlLmhlaWdodC8yLCAnZGVsaWxhaCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmZsaXAgPSAhdGhpcy5mbGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCB7UmFnbm99IGZyb20gXCIuL1JhZ25vXCI7XG5pbXBvcnQge1JhZ25hdGVsYU1pZFJlc30gZnJvbSBcIi4vUmFnbmF0ZWxhTWlkUmVzXCI7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAga2V5OiAnR2FtZSdcbn07XG5cbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBNQVhfSE9MRV9DT1VOVCA9IDIwO1xuXG4gICAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcbiAgICBwcml2YXRlIHJhZ25vOiBSYWdubztcbiAgICBwcml2YXRlIHJhZ25hdGVsYTogUmFnbmF0ZWxhTWlkUmVzO1xuICAgIHByaXZhdGUgdXAxOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xuICAgIHByaXZhdGUgdXBSaWdodDE6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gICAgcHJpdmF0ZSByaWdodDE6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gICAgcHJpdmF0ZSBkb3duUmlnaHQxOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xuICAgIHByaXZhdGUgZG93bjE6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gICAgcHJpdmF0ZSBkb3duTGVmdDE6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gICAgcHJpdmF0ZSBsZWZ0MTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcbiAgICBwcml2YXRlIHVwTGVmdDE6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gICAgcHJpdmF0ZSB1cDI6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gICAgcHJpdmF0ZSB1cFJpZ2h0MjogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcbiAgICBwcml2YXRlIHJpZ2h0MjogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcbiAgICBwcml2YXRlIGRvd25SaWdodDI6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gICAgcHJpdmF0ZSBkb3duMjogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcbiAgICBwcml2YXRlIGRvd25MZWZ0MjogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcbiAgICBwcml2YXRlIGxlZnQyOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xuICAgIHByaXZhdGUgdXBMZWZ0MjogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcbiAgICBwcml2YXRlIGFscmVhZHlEb3duOiBib29sZWFuO1xuICAgIHByaXZhdGUgc3BhY2U6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG5cbiAgICBwcml2YXRlIG1hbnRpZGVFdmVudDogYm9vbGVhbjtcbiAgICBwcml2YXRlIG1hbnRpZGVJbWFnZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcbiAgICB9XG5cbiAgICBwcmVsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2NvY2NpbmVsbGFwZXJuaW5qYScsICdhc3NldHMvYXVkaW8vY29jY2luZWxsYS53YXYnKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdnYW1lb3Zlcm11c2ljJywgJ2Fzc2V0cy9hdWRpby9nYW1lb3Zlci5tcDMnKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCduaW5qYW1hbnRpZGUnLCAnYXNzZXRzL2F1ZGlvL25pbmphbWFudGlkZS5tcDMnKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdmbHljYXRjaCcsICdhc3NldHMvYXVkaW8vZmx5Y2F0Y2gubXAzJyk7XG4gICAgICAgIC8vIHRoaXMubG9hZC5hdWRpbygnc3BpZGVybW92ZScsICdhc3NldHMvYXVkaW8vc3BpZGVybW92ZS5tcDMnKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdzcGlkZXJyZXBhaXInLCAnYXNzZXRzL2F1ZGlvL3dlYnJlcGFpci5tcDMnKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdtdXNpYycsICdhc3NldHMvYXVkaW8vbXVzaWMubXAzJyk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnYmlyZHMnLCAnYXNzZXRzL2F1ZGlvL2JpcmRzLm1wMycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2Z1bWV0dG8nLCAnYXNzZXRzL3Nwcml0ZXMvZnVtZXR0b21pZHJlcy5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdyYWduYXRlbGEnLCAnYXNzZXRzL3Nwcml0ZXMvcmFnbmF0ZWxhbWlkcmVzLnBuZycpO1xuICAgICAgICAvLyB0aGlzLmxvYWQuaW1hZ2UoJ3Nmb25kbycsICdhc3NldHMvc3ByaXRlcy9wcm9zZm9uZG8ucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYWxiZXJpJywgJ2Fzc2V0cy9zcHJpdGVzL2FsYmVyaW1pZHJlcy5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdtYW50aWRlbmluamEnLCAnYXNzZXRzL3Nwcml0ZXMvbWFudGluaW5qYW1pZHJlcy5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdyYWdubycsICdhc3NldHMvc3ByaXRlcy9yYWdub21pZHJlcy5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd0aXB1bGEnLCAnYXNzZXRzL3Nwcml0ZXMvdGlwdWxhbWlkcmVzLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ZhbGVuYScsICdhc3NldHMvc3ByaXRlcy9mYWxlbmFtaWRyZXMucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnY29jY2luZWxsYScsICdhc3NldHMvc3ByaXRlcy9jb2NjaW5lbGxhbWlkcmVzLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2hvbGUnLCAnYXNzZXRzL3Nwcml0ZXMvaG9sZS5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdjYWZmZScsICdhc3NldHMvc3ByaXRlcy9jYWZmZW1pZHJlcy5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdwaWxsb2xhJywgJ2Fzc2V0cy9zcHJpdGVzL3BpbGxvbGFtaWRyZXMucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZnVuZ28nLCAnYXNzZXRzL3Nwcml0ZXMvZnVuZ29taWRyZXMucG5nJyk7XG4gICAgICAgIC8vIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncmFnbm9zaGVldCcsXG4gICAgICAgIC8vICAgICAnYXNzZXRzL3Nwcml0ZXMvcmFnbm9zaGVldC5wbmcnLFxuICAgICAgICAvLyAgICAgeyBmcmFtZVdpZHRoOiA4OSwgZnJhbWVIZWlnaHQ6IDg3IH1cbiAgICAgICAgLy8gKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdwYXJ0aWNsZScsICdhc3NldHMvc3ByaXRlcy9wYXJ0aWNsZS5wbmcnKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuc291bmQucGxheSgnbXVzaWMnLCB7XG4gICAgICAgICAgICB2b2x1bWU6IC4yLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc291bmQucGxheSgnYmlyZHMnLCB7XG4gICAgICAgICAgICB2b2x1bWU6IC42LFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkLmltYWdlKHRoaXMuc2NhbGUud2lkdGgvMix0aGlzLnNjYWxlLmhlaWdodC8yLCAnc2ZvbmRvJyk7XG4gICAgICAgIHRoaXMucmFnbmF0ZWxhID0gbmV3IFJhZ25hdGVsYU1pZFJlcyh0aGlzLCAncmFnbmF0ZWxhJyk7XG4gICAgICAgIHRoaXMuYWRkLmltYWdlKHRoaXMuc2NhbGUud2lkdGgvMix0aGlzLnNjYWxlLmhlaWdodC8yLCAnYWxiZXJpJyk7XG4gICAgICAgIHRoaXMucmFnbm8gPSBuZXcgUmFnbm8odGhpcywgJ3JhZ25vc2hlZXQnLCB0aGlzLnJhZ25hdGVsYSk7XG4gICAgICAgIHRoaXMuY3Vyc29yS2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICAgICAgICB0aGlzLnNwYWNlID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNQQUNFKTtcbiAgICAgICAgdGhpcy51cDEgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVyk7XG4gICAgICAgIHRoaXMudXBSaWdodDEgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRSk7XG4gICAgICAgIHRoaXMucmlnaHQxID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkQpO1xuICAgICAgICB0aGlzLmRvd25SaWdodDEgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuQyk7XG4gICAgICAgIHRoaXMuZG93bjEgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuWCk7XG4gICAgICAgIHRoaXMuZG93bkxlZnQxID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlopO1xuICAgICAgICB0aGlzLmxlZnQxID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkEpO1xuICAgICAgICB0aGlzLnVwTGVmdDEgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUSk7XG4gICAgICAgIHRoaXMudXAyID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkVJR0hUKTtcbiAgICAgICAgdGhpcy51cFJpZ2h0MiA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5OSU5FKTtcbiAgICAgICAgdGhpcy5yaWdodDIgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU0lYKTtcbiAgICAgICAgdGhpcy5kb3duUmlnaHQyID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlRIUkVFKTtcbiAgICAgICAgdGhpcy5kb3duMiA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5UV08pO1xuICAgICAgICB0aGlzLmRvd25MZWZ0MiA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5PTkUpO1xuICAgICAgICB0aGlzLmxlZnQyID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkZPVVIpO1xuICAgICAgICB0aGlzLnVwTGVmdDIgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU0VWRU4pO1xuICAgICAgICB0aGlzLmFscmVhZHlEb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWFudGlkZUV2ZW50ID0gZmFsc2U7XG4gICAgICAgIHZhciBpbnNlY3RUaW1lciA9IHRoaXMudGltZS5hZGRFdmVudCh7XG4gICAgICAgICAgICBkZWxheTogMzAwMCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLmFkZFJhbmRvbUluc2VjdCxcbiAgICAgICAgICAgIGFyZ3M6IFtdLFxuICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogdGhpcyxcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBzdGFydEF0OiAxMDAwLFxuICAgICAgICAgICAgdGltZVNjYWxlOiAxLFxuICAgICAgICAgICAgcGF1c2VkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGJvbnVzVGltZXIgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xuICAgICAgICAgICAgZGVsYXk6IDUwMDAsXG4gICAgICAgICAgICBjYWxsYmFjazogdGhpcy5hZGRSYW5kb21Cb251cyxcbiAgICAgICAgICAgIGFyZ3M6IFtdLFxuICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogdGhpcyxcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBzdGFydEF0OiAxMDAwLFxuICAgICAgICAgICAgdGltZVNjYWxlOiAxLFxuICAgICAgICAgICAgcGF1c2VkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG1hbnRpZGVUaW1lciA9IHRoaXMudGltZS5hZGRFdmVudCh7XG4gICAgICAgICAgICBkZWxheTogMzAwMDAsXG4gICAgICAgICAgICBjYWxsYmFjazogdGhpcy5zdGFydE1hbnRpZGVFdmVudCxcbiAgICAgICAgICAgIGFyZ3M6IFtdLFxuICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogdGhpcyxcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBzdGFydEF0OiAyMDAwLFxuICAgICAgICAgICAgdGltZVNjYWxlOiAxLFxuICAgICAgICAgICAgcGF1c2VkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydE1hbnRpZGVFdmVudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1hbnRpZGVFdmVudCAmJiAhdGhpcy5yYWduby5kZWFkKSB7XG4gICAgICAgICAgICB0aGlzLm1hbnRpZGVFdmVudCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1hbnRpZGVJbWFnZSA9IHRoaXMuYWRkLmltYWdlKDMwMCwzNDAsICdtYW50aWRlJyk7XG4gICAgICAgICAgICB2YXIgZnVtZXR0byA9IHRoaXMuYWRkLmltYWdlKHRoaXMuc2NhbGUud2lkdGgvMix0aGlzLnNjYWxlLmhlaWdodC8yLCAnZnVtZXR0bycpO1xuICAgICAgICAgICAgZnVtZXR0by5zZXREZXB0aCg5OSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuZGVsYXllZENhbGwoMjAwMCwgdGhpcy5iZWdpbkV2ZW50LCBbZnVtZXR0b10sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmVnaW5FdmVudChmdW1ldHRvKSB7XG4gICAgICAgIGZ1bWV0dG8uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnRpbWUuZGVsYXllZENhbGwoMTAwMDAsIHRoaXMuc3RvcE1hbnRpZGVFdmVudCwgW10sIHRoaXMpO1xuICAgIH1cblxuICAgIHN0b3BNYW50aWRlRXZlbnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5yYWduby5kZWFkICYmIHRoaXMubWFudGlkZUV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yYWduby5jb25uaW5lbGxhVGFrZW5Db3VudCA+IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSEFQUFkgbWFudGlkZSBjb24gY29jY2luZWxsZScsIHRoaXMucmFnbm8uY29ubmluZWxsYVRha2VuQ291bnQpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFudGlkZUV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5tYW50aWRlSW1hZ2UuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmFnbm8uY29ubmluZWxsYVRha2VuQ291bnQgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kLnBsYXkoJ25pbmphbWFudGlkZScpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFudGlkZUltYWdlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hbnRpZGVJbWFnZSA9IHRoaXMuYWRkLmltYWdlKDMwMCwzNDAsICdtYW50aWRlbmluamEnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJhZ25hdGVsYS5icm9rZUZvdXJMaW5lcygpO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZS5kZWxheWVkQ2FsbCgxNTAwLCB0aGlzLnJlbW92ZU1hbnRpZGVOaW5qYSwgW10sIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlTWFudGlkZU5pbmphKCkge1xuICAgICAgICB0aGlzLm1hbnRpZGVFdmVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hbnRpZGVJbWFnZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucmFnbm8uY29ubmluZWxsYVRha2VuQ291bnQgPSAwO1xuICAgIH1cblxuICAgIGFkZFJhbmRvbUluc2VjdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJhZ25vLmRlYWQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tYW50aWRlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kLnBsYXkoJ2ZseWNhdGNoJywge1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWU6IDEuNVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWUuZGVsYXllZENhbGwoNjAwLCB0aGlzLmFkZFJhbmRvbVRpcHVsYSwgW2ZhbHNlXSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZS5kZWxheWVkQ2FsbCg2MDAsIHRoaXMuYWRkUmFuZG9tRmFsZW5hLCBbdHJ1ZV0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWUuZGVsYXllZENhbGwoNjAwLCB0aGlzLmFkZFJhbmRvbUNvY2NpbmVsbGEsIFt0cnVlXSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZC5wbGF5KCdmbHljYXRjaCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lOiAxLjVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUuZGVsYXllZENhbGwoNjAwLCB0aGlzLmFkZFJhbmRvbUNvY2NpbmVsbGEsIFt0cnVlXSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgYWRkUmFuZG9tQm9udXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5tYW50aWRlRXZlbnQgJiYgIXRoaXMucmFnbm8uZGVhZCkge1xuICAgICAgICAgICAgc3dpdGNoIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDoge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmllbnRlIGJvbnVzIHF1ZXN0YSB2b2x0YScpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFnbmF0ZWxhLmFkZEJvbnVzVG9SYW5kb21MaW5lKCdjYWZmZScpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAyOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFnbmF0ZWxhLmFkZEJvbnVzVG9SYW5kb21MaW5lKCdmdW5nbycpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRSYW5kb21UaXB1bGEoZWRpYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMucmFnbmF0ZWxhLmFkZEluc2VjdFRvUmFuZG9tTGluZSgndGlwdWxhJywgZWRpYmxlKTtcbiAgICB9XG5cbiAgICBhZGRSYW5kb21GYWxlbmEoZWRpYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMucmFnbmF0ZWxhLmFkZEluc2VjdFRvUmFuZG9tTGluZSgnZmFsZW5hJywgZWRpYmxlICwgNDAwMCk7XG4gICAgfVxuXG4gICAgYWRkUmFuZG9tQ29jY2luZWxsYShlZGlibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5yYWduYXRlbGEuYWRkSW5zZWN0VG9SYW5kb21MaW5lKCdjb2NjaW5lbGxhJywgZWRpYmxlLCA1MDAwKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZ25hdGVsYS5ob2xlQ291bnQgPiB0aGlzLk1BWF9IT0xFX0NPVU5UKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucmFnbm8uZGVhZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc291bmQucGxheSgnZ2FtZW92ZXJtdXNpYycpO1xuICAgICAgICAgICAgICAgIHRoaXMucmFnbm8uZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKHRoaXMuc3BhY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuc3dpdGNoKCdHYW1lT3ZlcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJhZ25vLmlzTW92aW5nKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhZ25vLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIuaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hbHJlYWR5RG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbHJlYWR5RG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWDonICsgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLngpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1k6JyArIHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxyZWFkeURvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKHRoaXMudXAxKSB8fCBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy51cDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFnbm8udXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLnVwUmlnaHQxKSB8fCBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy51cFJpZ2h0MikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWduby51cFJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy5yaWdodDEpIHx8IFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLnJpZ2h0MikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWduby5yaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKHRoaXMuZG93blJpZ2h0MSkgfHwgUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKHRoaXMuZG93blJpZ2h0MikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWduby5kb3duUmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLmRvd24xKSB8fCBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy5kb3duMikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWduby5kb3duKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy5kb3duTGVmdDEpIHx8IFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLmRvd25MZWZ0MikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWduby5kb3duTGVmdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKHRoaXMubGVmdDEpIHx8IFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLmxlZnQyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhZ25vLmxlZnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLnVwTGVmdDEpIHx8IFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLnVwTGVmdDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFnbm8udXBMZWZ0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJhZ25vLnVwZGF0ZVBhcnRpY2xlcygpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQge1dlYk5vZGV9IGZyb20gXCIuL1dlYk5vZGVcIjtcbmltcG9ydCBQb2ludCA9IFBoYXNlci5HZW9tLlBvaW50O1xuXG5leHBvcnQgY2xhc3MgUmFnbmF0ZWxhTWlkUmVzIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIHtcblxuICAgIHByaXZhdGUgQTogQXJyYXk8e3BvaW50OiBQb2ludH0+O1xuICAgIHByaXZhdGUgQjogQXJyYXk8e3BvaW50OiBQb2ludH0+O1xuICAgIHByaXZhdGUgQzogQXJyYXk8e3BvaW50OiBQb2ludH0+O1xuICAgIHByaXZhdGUgRDogQXJyYXk8e3BvaW50OiBQb2ludH0+O1xuICAgIHByaXZhdGUgRTogQXJyYXk8e3BvaW50OiBQb2ludH0+O1xuICAgIHByaXZhdGUgRjogQXJyYXk8e3BvaW50OiBQb2ludH0+O1xuICAgIHByaXZhdGUgRzogQXJyYXk8e3BvaW50OiBQb2ludH0+O1xuICAgIHByaXZhdGUgSDogQXJyYXk8e3BvaW50OiBQb2ludH0+O1xuICAgIHByaXZhdGUgWjogQXJyYXk8e3BvaW50OiBQb2ludH0+O1xuXG4gICAgcHJpdmF0ZSBBQjogQXJyYXk8e3BvaW50OiBQb2ludCwgaW5zZWN0OiBib29sZWFuLCBib251czogYm9vbGVhbiwgYnJva2VuOiBib29sZWFuLCBlZGlibGU6IGJvb2xlYW4sIHNwcml0ZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIH0+O1xuICAgIHByaXZhdGUgQkM6IEFycmF5PHtwb2ludDogUG9pbnQsIGluc2VjdDogYm9vbGVhbiwgYm9udXM6IGJvb2xlYW4sIGJyb2tlbjogYm9vbGVhbiwgZWRpYmxlOiBib29sZWFuLCBzcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB9PjtcbiAgICBwcml2YXRlIENEOiBBcnJheTx7cG9pbnQ6IFBvaW50LCBpbnNlY3Q6IGJvb2xlYW4sIGJvbnVzOiBib29sZWFuLCBicm9rZW46IGJvb2xlYW4sIGVkaWJsZTogYm9vbGVhbiwgc3ByaXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2UgfT47XG4gICAgcHJpdmF0ZSBERTogQXJyYXk8e3BvaW50OiBQb2ludCwgaW5zZWN0OiBib29sZWFuLCBib251czogYm9vbGVhbiwgYnJva2VuOiBib29sZWFuLCBlZGlibGU6IGJvb2xlYW4sIHNwcml0ZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIH0+O1xuICAgIHByaXZhdGUgRUY6IEFycmF5PHtwb2ludDogUG9pbnQsIGluc2VjdDogYm9vbGVhbiwgYm9udXM6IGJvb2xlYW4sIGJyb2tlbjogYm9vbGVhbiwgZWRpYmxlOiBib29sZWFuLCBzcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB9PjtcbiAgICBwcml2YXRlIEZHOiBBcnJheTx7cG9pbnQ6IFBvaW50LCBpbnNlY3Q6IGJvb2xlYW4sIGJvbnVzOiBib29sZWFuLCBicm9rZW46IGJvb2xlYW4sIGVkaWJsZTogYm9vbGVhbiwgc3ByaXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2UgfT47XG4gICAgcHJpdmF0ZSBHSDogQXJyYXk8e3BvaW50OiBQb2ludCwgaW5zZWN0OiBib29sZWFuLCBib251czogYm9vbGVhbiwgYnJva2VuOiBib29sZWFuLCBlZGlibGU6IGJvb2xlYW4sIHNwcml0ZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIH0+O1xuICAgIHByaXZhdGUgSEE6IEFycmF5PHtwb2ludDogUG9pbnQsIGluc2VjdDogYm9vbGVhbiwgYm9udXM6IGJvb2xlYW4sIGJyb2tlbjogYm9vbGVhbiwgZWRpYmxlOiBib29sZWFuLCBzcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB9PjtcblxuICAgIGhvbGVDb3VudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgdGV4dHVyZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgc2NlbmUsXG4gICAgICAgICAgICBzY2VuZS5zY2FsZS53aWR0aC8yLFxuICAgICAgICAgICAgc2NlbmUuc2NhbGUuaGVpZ2h0LzIsXG4gICAgICAgICAgICB0ZXh0dXJlXG4gICAgICAgICk7XG4gICAgICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcblxuICAgICAgICB0aGlzLmhvbGVDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuQSA9IFtcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxODksMTQ0KSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDE3MywxMjApIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTYxLDEwMikgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxNDYsODApIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB0aGlzLkIgPSBbXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjI2LDEzOSkgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyMzIsMTE5KSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDIzOCw5MSkgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyNDUsNjMpIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuQyA9IFtcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyNTIsMTU0KSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDI3MiwxMzcpIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjkwLDEyNCkgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgzMTAsMTA4KSB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgdGhpcy5EID0gW1xuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDI2MywxNzgpIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjkwLDE3NikgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgzMDksMTc0KSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDMzMCwxNzMpIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB0aGlzLkUgPSBbXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjQwLDIyMCkgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyNTUsMjQ1KSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDI3NSwyNzQpIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjkxLDI5OSkgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIHRoaXMuRiA9IFtcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyMDMsMjMyKSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDE5NCwyNjcpIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTkwLDI5MSkgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxODEsMzI0KSB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgdGhpcy5HID0gW1xuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDE4NCwyMTApIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTYxLDIyNykgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxNDEsMjQxKSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDEyMiwyNTgpIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB0aGlzLkggPSBbXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTc0LDE4NikgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxNDgsMTg4KSB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDEyNywxOTApIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoOTUsMTkzKSB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgdGhpcy5BQiA9IFtcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyMDgsMTQ1KSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyMDUsMTIzKSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyMDQsMTA0KSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxOTYsODMpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgdGhpcy5CQyA9IFtcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyMzcsMTQ5KSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyNDcsMTMzKSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyNTgsMTEzKSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyNzQsOTEpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgdGhpcy5DRCA9IFtcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyNTcsMTY1KSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyNzksMTU4KSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgyOTcsMTUxKSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgzMTgsMTQyKSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIHRoaXMuREUgPSBbXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjUxLDE5OCksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjY5LDIwNyksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMjg1LDIxMiksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMzA4LDIyNCksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB0aGlzLkVGID0gW1xuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDIyMCwyMjQpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDIyOCwyNDkpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDIyNywyNzYpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDIzOSwzMDIpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgdGhpcy5GRyA9IFtcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxOTEsMjE4KSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxNzcsMjQzKSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxNjUsMjYwKSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIHsgcG9pbnQ6IG5ldyBQb2ludCgxNDksMjgyKSwgaW5zZWN0OiBmYWxzZSwgYm9udXM6IGZhbHNlLCBicm9rZW46IGZhbHNlLCBlZGlibGU6IGZhbHNlLCBzcHJpdGU6IG51bGwgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIHRoaXMuR0ggPSBbXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTgwLDE5NyksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTU0LDIwNCksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTM1LDIxNCksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICB7IHBvaW50OiBuZXcgUG9pbnQoMTEwLDIyMCksIGluc2VjdDogZmFsc2UsIGJvbnVzOiBmYWxzZSwgYnJva2VuOiBmYWxzZSwgZWRpYmxlOiBmYWxzZSwgc3ByaXRlOiBudWxsIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB0aGlzLkhBID0gW1xuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDE4NCwxNjYpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDE2MiwxNTcpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDE0OSwxNDIpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBwb2ludDogbmV3IFBvaW50KDEyMywxMzgpLCBpbnNlY3Q6IGZhbHNlLCBib251czogZmFsc2UsIGJyb2tlbjogZmFsc2UsIGVkaWJsZTogZmFsc2UsIHNwcml0ZTogbnVsbCB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgdGhpcy5aID0gW3sgcG9pbnQ6IG5ldyBQb2ludCgyMTUsMTg0KSB9XTtcbiAgICB9XG5cbiAgICBnZXRTdGFydGluZ05vZGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnWicsIDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTGluZSgpIHtcbiAgICAgICAgbGV0IHJhbW8gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgICAgbGV0IG5vZGU7XG4gICAgICAgIHN3aXRjaCAocmFtbykge1xuICAgICAgICAgICAgY2FzZSAwOiB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMucmFuZG9tTGluZUZyb20oJ0FCJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5yYW5kb21MaW5lRnJvbSgnQkMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLnJhbmRvbUxpbmVGcm9tKCdDRCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMucmFuZG9tTGluZUZyb20oJ0RFJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDQ6IHtcbiAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5yYW5kb21MaW5lRnJvbSgnRUYnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNToge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLnJhbmRvbUxpbmVGcm9tKCdGRycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSA2OiB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMucmFuZG9tTGluZUZyb20oJ0dIJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDc6IHtcbiAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5yYW5kb21MaW5lRnJvbSgnSEEnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5icm9rZW4gfHwgbm9kZS5pbnNlY3QgfHwgbm9kZS5ib251cykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZG9tTGluZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJhbmRvbUxpbmVGcm9tKHJhbW86IHN0cmluZykge1xuICAgICAgICBsZXQgZ2lybyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXNbcmFtb10ubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNbcmFtb11bZ2lyb107XG4gICAgfVxuXG4gICAgZ2V0UG9pbnQobm9kbzogeyByYW1vOiBzdHJpbmc7IGdpcm86IG51bWJlciB9KSB7XG4gICAgICAgIHJldHVybiB0aGlzW25vZG8ucmFtb11bbm9kby5naXJvXS5wb2ludDtcbiAgICB9XG5cbiAgICBnZXROb2RlT25Ub3Aod2ViTm9kZTogV2ViTm9kZSkge1xuICAgICAgICBzd2l0Y2ggKHdlYk5vZGUucmFtbykge1xuICAgICAgICAgICAgY2FzZSAnQSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb091dCh3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0InOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29PdXQod2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdDJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnQicsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdEJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnQycsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdFJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnRCcsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdGJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvSW4od2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdHJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnSCcsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdIJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnQScsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdaJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnQicsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWJOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Tm9kZU9uVG9wUmlnaHQod2ViTm9kZTogV2ViTm9kZSkge1xuICAgICAgICBzd2l0Y2ggKHdlYk5vZGUucmFtbykge1xuICAgICAgICAgICAgY2FzZSAnQSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0InLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnQic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb091dCh3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0MnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29PdXQod2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdEJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvT3V0KHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0QnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0UnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRyc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb0luKHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnSCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0EnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnWic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0MnLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2ViTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE5vZGVPblJpZ2h0KHdlYk5vZGU6IFdlYk5vZGUpIHtcbiAgICAgICAgc3dpdGNoICh3ZWJOb2RlLnJhbW8pIHtcbiAgICAgICAgICAgIGNhc2UgJ0EnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdCJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0InOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdDJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0MnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29PdXQod2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdEJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvT3V0KHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0QnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0UnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRyc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb0luKHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnSCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb0luKHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnWic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0QnLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2ViTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE5vZGVPbkJvdHRvbVJpZ2h0KHdlYk5vZGU6IFdlYk5vZGUpIHtcbiAgICAgICAgc3dpdGNoICh3ZWJOb2RlLnJhbW8pIHtcbiAgICAgICAgICAgIGNhc2UgJ0EnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29Jbih3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0InOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdDJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0MnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdEJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0QnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdFJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvT3V0KHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0UnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRyc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0YnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnSCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0cnLCB3ZWJOb2RlLmdpcm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnWic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0UnLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2ViTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE5vZGVPbkJvdHRvbSh3ZWJOb2RlOiBXZWJOb2RlKSB7XG4gICAgICAgIHN3aXRjaCAod2ViTm9kZS5yYW1vKSB7XG4gICAgICAgICAgICBjYXNlICdBJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnSCcsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdCJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvSW4od2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdDJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnRCcsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdEJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnRScsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdFJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvT3V0KHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnRic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb091dCh3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0cnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdGJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0gnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdHJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ1onOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdGJywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXROb2RlT25Cb3R0b21MZWZ0KHdlYk5vZGU6IFdlYk5vZGUpIHtcbiAgICAgICAgc3dpdGNoICh3ZWJOb2RlLnJhbW8pIHtcbiAgICAgICAgICAgIGNhc2UgJ0EnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdIJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0InOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29Jbih3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0MnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29Jbih3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0QnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdFJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0UnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdGJywgd2ViTm9kZS5naXJvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ0YnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29PdXQod2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdHJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvT3V0KHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnSCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2ViTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ1onOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdHJywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXROb2RlT25MZWZ0KHdlYk5vZGU6IFdlYk5vZGUpIHtcbiAgICAgICAgc3dpdGNoICh3ZWJOb2RlLnJhbW8pIHtcbiAgICAgICAgICAgIGNhc2UgJ0EnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdCJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnQScsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdDJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnQicsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdEJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvSW4od2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdFJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnRicsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdGJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnRycsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdHJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvT3V0KHdlYk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnSCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nb091dCh3ZWJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ1onOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWJOb2RlKCdIJywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXROb2RlT25Ub3BMZWZ0KHdlYk5vZGU6IFdlYk5vZGUpIHtcbiAgICAgICAgc3dpdGNoICh3ZWJOb2RlLnJhbW8pIHtcbiAgICAgICAgICAgIGNhc2UgJ0EnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29PdXQod2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdCJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnQScsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdDJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnQicsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdEJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnQycsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdFJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdvSW4od2ViTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdGJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnRycsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdHJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnSCcsIHdlYk5vZGUuZ2lybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdIJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWJOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnWic6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUoJ0EnLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2ViTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ29PdXQod2ViTm9kZTogV2ViTm9kZSkge1xuICAgICAgICBsZXQgbmV3R2lybyA9IHdlYk5vZGUuZ2lybyA8IDMgPyB3ZWJOb2RlLmdpcm8gKyAxIDogd2ViTm9kZS5naXJvO1xuICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUod2ViTm9kZS5yYW1vLCBuZXdHaXJvKVxuICAgIH1cblxuICAgIHByaXZhdGUgZ29Jbih3ZWJOb2RlOiBXZWJOb2RlKSB7XG4gICAgICAgIGlmICh3ZWJOb2RlLmdpcm8gPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5vZGUod2ViTm9kZS5yYW1vLCB3ZWJOb2RlLmdpcm8tMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgV2ViTm9kZSgnWicsIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkSW5zZWN0VG9SYW5kb21MaW5lKHRleHR1cmU6IHN0cmluZywgZWRpYmxlOiBib29sZWFuLCBkZXN0cm95RGVsYXkgPSAxNTAwKSB7XG4gICAgICAgIGxldCBsaW5lID0gdGhpcy5nZXRSYW5kb21MaW5lKCk7XG4gICAgICAgIGxpbmUuaW5zZWN0ID0gdHJ1ZTtcbiAgICAgICAgbGluZS5lZGlibGUgPSBlZGlibGU7XG4gICAgICAgIGxpbmUuc3ByaXRlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UobGluZS5wb2ludC54LCBsaW5lLnBvaW50LnksIHRleHR1cmUpO1xuICAgICAgICB0aGlzLnNjZW5lLnRpbWUuZGVsYXllZENhbGwoZGVzdHJveURlbGF5LCB0aGlzLmRlc3Ryb3lJbnNlY3QsIFtsaW5lXSwgdGhpcyk7XG4gICAgfVxuXG4gICAgZGVzdHJveUluc2VjdChsaW5lKSB7XG4gICAgICAgIGlmIChsaW5lLnNwcml0ZSkge1xuICAgICAgICAgICAgbGluZS5zcHJpdGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgbGluZS5pbnNlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgIGxpbmUuZWRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmhvbGVDb3VudCArPSAxO1xuICAgICAgICAgICAgbGluZS5zcHJpdGUgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZShsaW5lLnBvaW50LngsIGxpbmUucG9pbnQueSwgJ2hvbGUnKTtcbiAgICAgICAgICAgIGxpbmUuYnJva2VuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEJvbnVzVG9SYW5kb21MaW5lKHRleHR1cmU6IHN0cmluZywgZGVzdHJveURlbGF5ID0gNTAwMCkge1xuICAgICAgICBsZXQgbGluZSA9IHRoaXMuZ2V0UmFuZG9tTGluZSgpO1xuICAgICAgICBsaW5lLmJvbnVzID0gdHJ1ZTtcbiAgICAgICAgbGluZS5zcHJpdGUgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZShsaW5lLnBvaW50LngsIGxpbmUucG9pbnQueSwgdGV4dHVyZSk7XG4gICAgICAgIHRoaXMuc2NlbmUudGltZS5kZWxheWVkQ2FsbChkZXN0cm95RGVsYXksIHRoaXMuZGVzdHJveUJvbnVzLCBbbGluZV0sIHRoaXMpO1xuICAgIH1cblxuICAgIGRlc3Ryb3lCb251cyhsaW5lKSB7XG4gICAgICAgIGlmIChsaW5lLnNwcml0ZSkge1xuICAgICAgICAgICAgbGluZS5zcHJpdGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgbGluZS5pbnNlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgIGxpbmUuZWRpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBsaW5lLmJvbnVzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMaW5lQmV0d2Vlbihmcm9tOiBXZWJOb2RlLCB0bzogV2ViTm9kZSkge1xuICAgICAgICBpZiAodGhpc1tmcm9tLnJhbW8rdG8ucmFtb10pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2Zyb20ucmFtbyt0by5yYW1vXVtmcm9tLmdpcm9dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdG8ucmFtbytmcm9tLnJhbW9dW2Zyb20uZ2lyb107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc01vdmluZ09uUmFtbyhmcm9tOiBXZWJOb2RlLCB0bzogV2ViTm9kZSkge1xuICAgICAgICByZXR1cm4gZnJvbS5yYW1vID09PSAnWicgfHwgdG8ucmFtbyA9PT0gJ1onIHx8IGZyb20ucmFtbyA9PT0gdG8ucmFtbztcbiAgICB9XG5cbiAgICByZXBhaXJCZXR3ZWVuKGZyb206IFdlYk5vZGUsIHRvOiBXZWJOb2RlKSB7XG4gICAgICAgIGxldCBsaW5lQmV0d2VlbiA9IHRoaXMuZ2V0TGluZUJldHdlZW4oZnJvbSwgdG8pO1xuICAgICAgICBsaW5lQmV0d2Vlbi5zcHJpdGUuZGVzdHJveSgpO1xuICAgICAgICBsaW5lQmV0d2Vlbi5icm9rZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ob2xlQ291bnQgLT0gMTtcbiAgICB9XG5cbiAgICBicm9rZUZvdXJMaW5lcygpIHtcbiAgICAgICAgbGV0IHJhbW8gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgICAgc3dpdGNoIChyYW1vKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhYkVsZW1lbnQgb2YgdGhpcy5BQikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlTGluZShhYkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGFiRWxlbWVudCBvZiB0aGlzLkJDKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJva2VMaW5lKGFiRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAyOiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYWJFbGVtZW50IG9mIHRoaXMuQ0QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZUxpbmUoYWJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDM6IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhYkVsZW1lbnQgb2YgdGhpcy5ERSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlTGluZShhYkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDQ6IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhYkVsZW1lbnQgb2YgdGhpcy5FRikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlTGluZShhYkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNToge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGFiRWxlbWVudCBvZiB0aGlzLkZHKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJva2VMaW5lKGFiRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSA2OiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYWJFbGVtZW50IG9mIHRoaXMuR0gpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZUxpbmUoYWJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDc6IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhYkVsZW1lbnQgb2YgdGhpcy5IQSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlTGluZShhYkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYnJva2VMaW5lKGVsOiB7IHBvaW50OiBQaGFzZXIuR2VvbS5Qb2ludDsgaW5zZWN0OiBib29sZWFuOyBib251czogYm9vbGVhbjsgYnJva2VuOiBib29sZWFuOyBlZGlibGU6IGJvb2xlYW47IHNwcml0ZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIH0pIHtcbiAgICAgICAgaWYgKGVsLnNwcml0ZSkge1xuICAgICAgICAgICAgZWwuc3ByaXRlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBlbC5pbnNlY3QgPSBmYWxzZTtcbiAgICAgICAgZWwuYm9udXMgPSBmYWxzZTtcbiAgICAgICAgZWwuYnJva2VuID0gdHJ1ZTtcbiAgICAgICAgZWwuZWRpYmxlID0gZmFsc2U7XG4gICAgICAgIGVsLnNwcml0ZSA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKGVsLnBvaW50LngsIGVsLnBvaW50LnksICdob2xlJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCB7V2ViTm9kZX0gZnJvbSBcIi4vV2ViTm9kZVwiO1xuaW1wb3J0IHtSYWduYXRlbGFNaWRSZXN9IGZyb20gXCIuL1JhZ25hdGVsYU1pZFJlc1wiO1xuaW1wb3J0IFNjZW5lID0gUGhhc2VyLlNjZW5lO1xuXG5leHBvcnQgY2xhc3MgUmFnbm8gZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcblxuICAgIHByaXZhdGUgbXlXZWJOb2RlOiBXZWJOb2RlO1xuICAgIHByaXZhdGUgcmFnbmF0ZWxhOiBSYWduYXRlbGFNaWRSZXM7XG4gICAgcHJpdmF0ZSB0YXJnZXROb2RlOiBQaGFzZXIuTWF0aC5WZWN0b3IyO1xuICAgIHByaXZhdGUgbW92aW5nU291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG4gICAgcHJpdmF0ZSByZXBhaXJpbmdTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSAxNTA7XG4gICAgcHJpdmF0ZSB3YWl0Tm9kZTogUGhhc2VyLk1hdGguVmVjdG9yMjtcbiAgICBwcml2YXRlIGxvY2tPblJlcGFpcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgcHJldmlvdXNOb2RlOiBXZWJOb2RlO1xuICAgIHByaXZhdGUgcGFydGljbGVzOiBBcnJheTxhbnk+ID0gW107XG4gICAgZGVhZDogYm9vbGVhbjtcbiAgICBjb25uaW5lbGxhVGFrZW5Db3VudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lLCB0ZXh0dXJlOiBzdHJpbmcsIHJhZ25hdGVsYTogUmFnbmF0ZWxhTWlkUmVzKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCAyMDYsIDAsIHRleHR1cmUpO1xuICAgICAgICB0aGlzLnJhZ25hdGVsYSA9IHJhZ25hdGVsYTtcbiAgICAgICAgdGhpcy5teVdlYk5vZGUgPSB0aGlzLnJhZ25hdGVsYS5nZXRTdGFydGluZ05vZGUoKTtcbiAgICAgICAgdGhpcy50YXJnZXROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29ubmluZWxsYVRha2VuQ291bnQgPSAwO1xuICAgICAgICB0aGlzLm1vdmluZ1NvdW5kID0gdGhpcy5zY2VuZS5zb3VuZC5hZGQoJ3NwaWRlcm1vdmUnKTtcbiAgICAgICAgdGhpcy5yZXBhaXJpbmdTb3VuZCA9IHRoaXMuc2NlbmUuc291bmQuYWRkKCdzcGlkZXJyZXBhaXInLCB7XG4gICAgICAgICAgICB2b2x1bWU6IC4yXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldERlcHRoKDEwKTtcbiAgICAgICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xuICAgICAgICBzY2VuZS5waHlzaWNzLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvblRvKHRoaXMubXlXZWJOb2RlKTtcblxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnbW92ZScsXG4gICAgICAgICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKHRleHR1cmUsIHsgc3RhcnQ6IDEsIGVuZDogNyB9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTUsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnc3RheScsXG4gICAgICAgICAgICBmcmFtZXM6IFsgeyBrZXk6IHRleHR1cmUsIGZyYW1lOiAwIH0gXSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMjBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSAxLjU2O1xuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ21vdmUnLCB0cnVlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQb3NpdGlvblRvKHdlYk5vZGU6IFdlYk5vZGUpIHtcbiAgICAgICAgbGV0IHBvaW50VG9Nb3ZlVG8gPSB0aGlzLnByZXBhcmVNb3ZpbmdBbmltYXRpb24od2ViTm9kZSk7XG5cbiAgICAgICAgaWYgKHRoaXMucmFnbmF0ZWxhLmlzTW92aW5nT25SYW1vKHRoaXMubXlXZWJOb2RlLCB3ZWJOb2RlKSkge1xuXG4gICAgICAgICAgICB0aGlzLm1vdmluZ1NvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbXMucGxheSgnbW92ZScsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIocG9pbnRUb01vdmVUby54LCBwb2ludFRvTW92ZVRvLnkpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLm1vdmVUb09iamVjdCh0aGlzLCB0aGlzLnRhcmdldE5vZGUsIHRoaXMuc3BlZWQpO1xuICAgICAgICAgICAgdGhpcy5teVdlYk5vZGUgPSB3ZWJOb2RlO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbGluZUJldHdlZW4gPSB0aGlzLnJhZ25hdGVsYS5nZXRMaW5lQmV0d2Vlbih0aGlzLm15V2ViTm9kZSwgd2ViTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChsaW5lQmV0d2Vlbi5pbnNlY3QpIHtcblxuICAgICAgICAgICAgICAgIGlmIChsaW5lQmV0d2Vlbi5lZGlibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmdTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbXMucGxheSgnbW92ZScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMihwb2ludFRvTW92ZVRvLngsIHBvaW50VG9Nb3ZlVG8ueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5tb3ZlVG9PYmplY3QodGhpcywgdGhpcy50YXJnZXROb2RlLCB0aGlzLnNwZWVkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teVdlYk5vZGUgPSB3ZWJOb2RlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmUubWFudGlkZUV2ZW50ICYmIGxpbmVCZXR3ZWVuLnNwcml0ZS50ZXh0dXJlLmtleSA9PT0gJ2NvY2NpbmVsbGEnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoJ2NvY2NpbmVsbGFwZXJuaW5qYScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uaW5lbGxhVGFrZW5Db3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGluZUJldHdlZW4uc3ByaXRlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZUJldHdlZW4uaW5zZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVCZXR3ZWVuLmVkaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0lOU0VUVEkgZ3JhbmRpLCBub24gbWkgbXVvdm8nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGlmIChsaW5lQmV0d2Vlbi5icm9rZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1NvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ21vdmUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLndhaXROb2RlID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIobGluZUJldHdlZW4ucG9pbnQueCwgbGluZUJldHdlZW4ucG9pbnQueSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIocG9pbnRUb01vdmVUby54LCBwb2ludFRvTW92ZVRvLnkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5tb3ZlVG9PYmplY3QodGhpcywgdGhpcy53YWl0Tm9kZSwgdGhpcy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c05vZGUgPSB0aGlzLm15V2ViTm9kZTtcbiAgICAgICAgICAgICAgICB0aGlzLm15V2ViTm9kZSA9IHdlYk5vZGU7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGlmIChsaW5lQmV0d2Vlbi5ib251cykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobGluZUJldHdlZW4uc3ByaXRlLnRleHR1cmUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Z1bmdvJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nb09uRHJ1Z3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUudGltZS5kZWxheWVkQ2FsbCgyMDAwLCB0aGlzLmZpbmlzaERydWdzLCBbXSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjYWZmZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgKz0gNTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmFjY29sdG8gYm9oJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1NvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ21vdmUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMihwb2ludFRvTW92ZVRvLngsIHBvaW50VG9Nb3ZlVG8ueSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLm1vdmVUb09iamVjdCh0aGlzLCB0aGlzLnRhcmdldE5vZGUsIHRoaXMuc3BlZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubXlXZWJOb2RlID0gd2ViTm9kZTtcbiAgICAgICAgICAgICAgICBsaW5lQmV0d2Vlbi5zcHJpdGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGxpbmVCZXR3ZWVuLmJvbnVzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZ1NvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ21vdmUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMihwb2ludFRvTW92ZVRvLngsIHBvaW50VG9Nb3ZlVG8ueSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLm1vdmVUb09iamVjdCh0aGlzLCB0aGlzLnRhcmdldE5vZGUsIHRoaXMuc3BlZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubXlXZWJOb2RlID0gd2ViTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcHJlcGFyZU1vdmluZ0FuaW1hdGlvbih3ZWJOb2RlOiBXZWJOb2RlKSB7XG4gICAgICAgIGxldCBjdXJyZW50UG9pbnQgPSB0aGlzLnJhZ25hdGVsYS5nZXRQb2ludCh0aGlzLm15V2ViTm9kZSk7XG4gICAgICAgIGxldCBwb2ludFRvTW92ZVRvID0gdGhpcy5yYWduYXRlbGEuZ2V0UG9pbnQod2ViTm9kZSk7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuUG9pbnRzKGN1cnJlbnRQb2ludCwgcG9pbnRUb01vdmVUbyk7XG4gICAgICAgIHJldHVybiBwb2ludFRvTW92ZVRvO1xuICAgIH1cblxuICAgIHVwKCkge1xuICAgICAgICBsZXQgd2ViTm9kZSA9IHRoaXMucmFnbmF0ZWxhLmdldE5vZGVPblRvcCh0aGlzLm15V2ViTm9kZSk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Ubyh3ZWJOb2RlKTtcbiAgICB9XG5cbiAgICB1cFJpZ2h0KCkge1xuICAgICAgICBsZXQgd2ViTm9kZSA9IHRoaXMucmFnbmF0ZWxhLmdldE5vZGVPblRvcFJpZ2h0KHRoaXMubXlXZWJOb2RlKTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvblRvKHdlYk5vZGUpO1xuICAgIH1cblxuICAgIHJpZ2h0KCkge1xuICAgICAgICBsZXQgd2ViTm9kZSA9IHRoaXMucmFnbmF0ZWxhLmdldE5vZGVPblJpZ2h0KHRoaXMubXlXZWJOb2RlKTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvblRvKHdlYk5vZGUpO1xuICAgIH1cblxuICAgIGRvd25SaWdodCgpIHtcbiAgICAgICAgbGV0IHdlYk5vZGUgPSB0aGlzLnJhZ25hdGVsYS5nZXROb2RlT25Cb3R0b21SaWdodCh0aGlzLm15V2ViTm9kZSk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Ubyh3ZWJOb2RlKTtcbiAgICB9XG5cbiAgICBkb3duKCkge1xuICAgICAgICBsZXQgd2ViTm9kZSA9IHRoaXMucmFnbmF0ZWxhLmdldE5vZGVPbkJvdHRvbSh0aGlzLm15V2ViTm9kZSk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Ubyh3ZWJOb2RlKTtcbiAgICB9XG5cbiAgICBkb3duTGVmdCgpIHtcbiAgICAgICAgbGV0IHdlYk5vZGUgPSB0aGlzLnJhZ25hdGVsYS5nZXROb2RlT25Cb3R0b21MZWZ0KHRoaXMubXlXZWJOb2RlKTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvblRvKHdlYk5vZGUpO1xuICAgIH1cblxuICAgIGxlZnQoKSB7XG4gICAgICAgIGxldCB3ZWJOb2RlID0gdGhpcy5yYWduYXRlbGEuZ2V0Tm9kZU9uTGVmdCh0aGlzLm15V2ViTm9kZSk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Ubyh3ZWJOb2RlKTtcbiAgICB9XG5cbiAgICB1cExlZnQoKSB7XG4gICAgICAgIGxldCB3ZWJOb2RlID0gdGhpcy5yYWduYXRlbGEuZ2V0Tm9kZU9uVG9wTGVmdCh0aGlzLm15V2ViTm9kZSk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25Ubyh3ZWJOb2RlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxvY2tPblJlcGFpcikge1xuICAgICAgICAgICAgaWYgKHRoaXMud2FpdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuKHRoaXMueCwgdGhpcy55LCB0aGlzLndhaXROb2RlLngsIHRoaXMud2FpdE5vZGUueSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgNCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkucmVzZXQodGhpcy53YWl0Tm9kZS54LCB0aGlzLndhaXROb2RlLnkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXROb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydFJlcGFpcigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA+IDEwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUudGltZS5kZWxheWVkQ2FsbCg1MDAsIHRoaXMuZmluaXNoUmVwYWlyLCBbXSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnRpbWUuZGVsYXllZENhbGwoMTUwMC10aGlzLnNwZWVkLCB0aGlzLmZpbmlzaFJlcGFpciwgW10sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuKHRoaXMueCwgdGhpcy55LCB0aGlzLnRhcmdldE5vZGUueCwgdGhpcy50YXJnZXROb2RlLnkpO1xuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5LnJlc2V0KHRoaXMudGFyZ2V0Tm9kZS54LCB0aGlzLnRhcmdldE5vZGUueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92aW5nU291bmQuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ3N0YXknLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc01vdmluZygpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXROb2RlICYmICh0aGlzLmJvZHkuc3BlZWQgPiAwIHx8IHRoaXMubG9ja09uUmVwYWlyKTtcbiAgICB9XG5cbiAgICBzdGFydFJlcGFpcigpIHtcbiAgICAgICAgdGhpcy5tb3ZpbmdTb3VuZC5zdG9wKCk7XG4gICAgICAgIHRoaXMucmVwYWlyaW5nU291bmQucGxheSgpO1xuICAgICAgICB0aGlzLmxvY2tPblJlcGFpciA9IHRydWU7XG4gICAgICAgIHRoaXMucmFnbmF0ZWxhLnJlcGFpckJldHdlZW4odGhpcy5wcmV2aW91c05vZGUsIHRoaXMubXlXZWJOb2RlKTtcbiAgICB9XG5cbiAgICBmaW5pc2hSZXBhaXIoKSB7XG4gICAgICAgIHRoaXMucmVwYWlyaW5nU291bmQuc3RvcCgpO1xuICAgICAgICB0aGlzLm1vdmluZ1NvdW5kLnBsYXkoKTtcbiAgICAgICAgdGhpcy5sb2NrT25SZXBhaXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLm1vdmVUb09iamVjdCh0aGlzLCB0aGlzLnRhcmdldE5vZGUsIHRoaXMuc3BlZWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ29PbkRydWdzKCkge1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDMwMDsgaSsrKSB7XG5cbiAgICAgICAgICAgIHZhciB4ID0gUGhhc2VyLk1hdGguQmV0d2VlbigtNjQsIDUwMCk7XG4gICAgICAgICAgICB2YXIgeSA9IFBoYXNlci5NYXRoLkJldHdlZW4oLTY0LCA1MDApO1xuXG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSh4LCB5LCAncGFydGljbGUnKTtcbiAgICAgICAgICAgIGltYWdlLnNldERlcHRoKDExKTtcbiAgICAgICAgICAgIGltYWdlLnNldEJsZW5kTW9kZShQaGFzZXIuQmxlbmRNb2Rlcy5BREQpO1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaCh7IHM6IGltYWdlLCByOiAyICsgTWF0aC5yYW5kb20oKSAqIDYgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVQYXJ0aWNsZXMoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzcHJpdGUgPSB0aGlzLnBhcnRpY2xlc1tpXS5zO1xuXG4gICAgICAgICAgICBzcHJpdGUueSAtPSB0aGlzLnBhcnRpY2xlc1tpXS5yO1xuXG4gICAgICAgICAgICBpZiAoc3ByaXRlLnkgPCAtMjU2KSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnkgPSA3MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmlzaERydWdzKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc3ByaXRlID0gdGhpcy5wYXJ0aWNsZXNbaV0ucztcbiAgICAgICAgICAgIHNwcml0ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltcy5wbGF5KCdzdGF5JywgdHJ1ZSk7XG4gICAgICAgIHZhciBkZWF0aE5vZGUgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMih0aGlzLmJvZHkueCwgODAwKTtcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLm1vdmVUb09iamVjdCh0aGlzLCBkZWF0aE5vZGUsIDE1MCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCBTY2VuZSA9IFBoYXNlci5TY2VuZTtcblxuZXhwb3J0IGNsYXNzIFJhZ25vVGl0b2xvIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XG5cbiAgICBwcml2YXRlIG1vdmluZ1NvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDE1MDtcbiAgICBwcml2YXRlIHRhcmdldFBvaW50OiBQaGFzZXIuTWF0aC5WZWN0b3IyO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUsIHRleHR1cmU6IHN0cmluZykge1xuICAgICAgICBzdXBlcihzY2VuZSwgMTM1LCAwLCB0ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5tb3ZpbmdTb3VuZCA9IHRoaXMuc2NlbmUuc291bmQuYWRkKCdzcGlkZXJtb3ZlJyk7XG4gICAgICAgIHRoaXMuc2V0RGVwdGgoMTApO1xuICAgICAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgICAgIHNjZW5lLnBoeXNpY3MuYWRkLmV4aXN0aW5nKHRoaXMpO1xuXG4gICAgICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdtb3ZlJyxcbiAgICAgICAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnModGV4dHVyZSwgeyBzdGFydDogMSwgZW5kOiA3IH0pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxNSxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG4gICAgICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdzdGF5JyxcbiAgICAgICAgICAgIGZyYW1lczogWyB7IGtleTogdGV4dHVyZSwgZnJhbWU6IDAgfSBdLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAyMFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDEuNTY7XG4gICAgICAgIHRoaXMuYW5pbXMucGxheSgnbW92ZScsIHRydWUpO1xuICAgICAgICB0aGlzLnRhcmdldFBvaW50ID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIoMTIxLCAyMzYpO1xuICAgICAgICB0aGlzLnN0YXJ0TW92aW5nVG8oKTtcbiAgICB9XG5cbiAgICBzdGFydE1vdmluZ1RvKCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmdTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ21vdmUnLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5tb3ZlVG9PYmplY3QodGhpcywgdGhpcy50YXJnZXRQb2ludCwgdGhpcy5zcGVlZCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBkaXN0YW5jZSA9IFBoYXNlci5NYXRoLkRpc3RhbmNlLkJldHdlZW4odGhpcy54LCB0aGlzLnksIHRoaXMudGFyZ2V0UG9pbnQueCwgdGhpcy50YXJnZXRQb2ludC55KTtcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgNCkge1xuICAgICAgICAgICAgdGhpcy5ib2R5LnJlc2V0KHRoaXMudGFyZ2V0UG9pbnQueCwgdGhpcy50YXJnZXRQb2ludC55KTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmdTb3VuZC5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ3N0YXknLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaXNNb3ZpbmcoKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0UG9pbnQgJiYgdGhpcy5ib2R5LnNwZWVkID4gMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHtSYWdub1RpdG9sb30gZnJvbSBcIi4vUmFnbm9UaXRvbG9cIjtcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAga2V5OiAnVGl0b2xvJ1xufTtcblxuZXhwb3J0IGNsYXNzIFRpdGxlU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuXG4gICAgcHJpdmF0ZSByYWdubzogUmFnbm9UaXRvbG87XG4gICAgcHJpdmF0ZSBzdGFydDogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdzcGlkZXJtb3ZlJywgJ2Fzc2V0cy9hdWRpby9zcGlkZXJtb3ZlLm1wMycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2FsYmVyaScsICdhc3NldHMvc3ByaXRlcy9hbGJlcmltaWRyZXMucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnc2ZvbmRvJywgJ2Fzc2V0cy9zcHJpdGVzL3Byb3Nmb25kby5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdtYW50aWRlJywgJ2Fzc2V0cy9zcHJpdGVzL21hbnRpZGVtaWRyZXMucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndGl0b2xvJywgJ2Fzc2V0cy9zcHJpdGVzL3RpdG9sby5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdyYWdub3NoZWV0JyxcbiAgICAgICAgICAgICdhc3NldHMvc3ByaXRlcy9yYWdub3NoZWV0LnBuZycsXG4gICAgICAgICAgICB7IGZyYW1lV2lkdGg6IDg5LCBmcmFtZUhlaWdodDogODcgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UodGhpcy5zY2FsZS53aWR0aC8yLHRoaXMuc2NhbGUuaGVpZ2h0LzIsICdzZm9uZG8nKTtcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UodGhpcy5zY2FsZS53aWR0aC8yLHRoaXMuc2NhbGUuaGVpZ2h0LzIsICdhbGJlcmknKTtcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UodGhpcy5zY2FsZS53aWR0aC8yLHRoaXMuc2NhbGUuaGVpZ2h0LzIsICd0aXRvbG8nKTtcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoMzAwLDM0MCwgJ21hbnRpZGUnKTtcbiAgICAgICAgdGhpcy5yYWdubyA9IG5ldyBSYWdub1RpdG9sbyh0aGlzLCAncmFnbm9zaGVldCcpO1xuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNQQUNFKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZ25vLmlzTW92aW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMucmFnbm8udXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy5zdGFydCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnN3aXRjaCgnR2FtZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBXZWJOb2RlIHtcbiAgICBwdWJsaWMgcmFtbzogc3RyaW5nO1xuICAgIHB1YmxpYyBnaXJvOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihyYW1vOiBzdHJpbmcsIGdpcm86IG51bWJlcikge1xuICAgICAgICB0aGlzLnJhbW8gPSByYW1vO1xuICAgICAgICB0aGlzLmdpcm8gPSBnaXJvO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7R2FtZVNjZW5lfSBmcm9tIFwiLi9HYW1lU2NlbmVcIjtcbmltcG9ydCB7VGl0bGVTY2VuZX0gZnJvbSBcIi4vVGl0bGVTY2VuZVwiO1xuaW1wb3J0IHtHYW1lT3ZlclNjZW5lfSBmcm9tIFwiLi9HYW1lT3ZlclNjZW5lXCI7XG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gICAgdGl0bGU6ICdUeXBlcGxheScsXG5cbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcbiAgICB6b29tOiAxLFxuICAgIHNjYWxlOiB7XG4gICAgICAgIHpvb206IDIsXG4gICAgICAgIHdpZHRoOiA0MTIsXG4gICAgICAgIGhlaWdodDogNDEyLFxuICAgIH0sXG5cbiAgICByZW5kZXI6IHtcbiAgICAgICAgcGl4ZWxBcnQ6IHRydWVcbiAgICB9LFxuXG4gICAgcGh5c2ljczoge1xuICAgICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICAgICAgYXJjYWRlOiB7XG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHBhcmVudDogJ2dhbWUnLFxuICAgIHNjZW5lOiBbVGl0bGVTY2VuZSwgR2FtZVNjZW5lLCBHYW1lT3ZlclNjZW5lXSxcbn07XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==