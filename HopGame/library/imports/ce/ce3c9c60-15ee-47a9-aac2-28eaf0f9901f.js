"use strict";
cc._RF.push(module, 'ce3c9xgFe5HqarCKOrw+ZAf', 'Game');
// scripts/Game.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.starPerfeb = null;
        _this.ground = null;
        // @property(cc.Node)
        // bg: cc.Node = null;
        // @property(cc.Node)
        // bg1: cc.Node = null;
        // @property(cc.Node)
        // bg2: cc.Node = null;
        _this.maxStarDuration = 0;
        _this.minStarDuration = 0;
        _this.player = null;
        _this.score = null;
        _this.playerScore = 0;
        _this.playScore = null;
        _this.speed = 400;
        return _this;
    }
    Game.prototype.gameScore = function () {
        this.playerScore += 1;
        this.score.string = 'SCORE:' + this.playerScore.toString();
        cc.audioEngine.playEffect(this.playScore, false);
    };
    Game.prototype.spwanNewStar = function () {
        var newStar = cc.instantiate(this.starPerfeb);
        // newStar.addComponent(cc.CircleCollider);
        newStar.getComponent(cc.CircleCollider).radius = 20;
        newStar.group = 'Star';
        newStar.setPosition(this.getNewStarPosition());
        this.node.addChild(newStar);
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration);
        this.timer = 0;
    };
    Game.prototype.getNewStarPosition = function () {
        var randX = 0;
        // console.log(randY);
        var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
        // console.log(randY);
        var maxX = this.node.width / 2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        return cc.v2(randX, randY);
    };
    //   playerBoundation(){
    //   this.node.getComponent('Player')
    //   }
    // LIFE-CYCLE CALLBACKS:
    Game.prototype.onLoad = function () {
        this.groundY = this.ground.y + this.ground.height / 2;
        this.spwanNewStar();
        this.timer = 0;
        // cc.director.preloadScene('menu');
        // this.starDuration = 0;
        // cc.director.getPhysicsManager().enabled=true;
    };
    Game.prototype.gameOver = function () {
        this.player.stopAllActions;
        cc.director.loadScene('gameover');
    };
    // movingBackground(){
    // // let tp1 = this.bg1.getPosition().x;
    // //     let tp2 = this.bg2.getPosition().x;
    // //     // var maxX=dt*this.bg2.x+this.bg2.x/2;
    // //     // let maxy=tp1.y;
    // //     let playerpos = this.player.getPosition().x;
    // //     // console.log('backgroung'+ maxX)
    //     // if (this.player.getPosition().x >= this.bg2.getPosition().x)
    //     // console.log('true')
    //     // {
    //     //     this.bg.setPosition(this.bg2.getPosition());
    //         // this.ground.setPosition(this.bg2.getPosition().y)
    //     // if (this.player.getPosition().x) {
    //     //         this.bg1.setPosition(this.bg.getPosition())
    //     //     }
    //     }
    // }
    Game.prototype.start = function () {
    };
    // check() {
    //     return;
    // }
    Game.prototype.update = function (dt) {
        // var tp1 = this.bg1.getPosition().x;
        // var tp2 = this.bg2.getPosition().x;
        // // var maxX=dt*this.bg2.x+this.bg2.x/2;
        // // let maxy=tp1.y;
        // var playerpos = this.player.getPosition().x;
        if (this.timer > this.starDuration) {
            this.gameOver();
            console.log(this.gameOver);
            return;
        }
        // this.timer += dt;
        //background
        // for (let i = 0; i < this.bgs.length; i++) {
        //         this.bgs[i].node.x -= 1.0;
        //     if (this.bgs[i].node.x <= -960) {
        //         this.bgs[i].node.x = 960;
        //     }
    };
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "starPerfeb", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "ground", void 0);
    __decorate([
        property
    ], Game.prototype, "maxStarDuration", void 0);
    __decorate([
        property
    ], Game.prototype, "minStarDuration", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "player", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "score", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Game.prototype, "playScore", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

cc._RF.pop();