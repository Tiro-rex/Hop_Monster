
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQyxNQUFNLENBQUM7NENBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDSztJQVl2QjtRQURDLFFBQVE7aURBQ21CO0lBRzVCO1FBREMsUUFBUTtpREFDbUI7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDSztJQUl2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VDQUNJO0lBTXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MkNBQ1E7SUFsQ2QsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQThJcEI7SUFBRCxXQUFDO0NBOUlMLEFBOElLLENBOUk2QixFQUFFLENBQUMsU0FBUyxHQThJekM7a0JBOUlnQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc3RhclBlcmZlYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdyb3VuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBiZzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBiZzE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgLy8gYmcyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1heFN0YXJEdXJhdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1pblN0YXJEdXJhdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBncm91bmRZOiBhbnk7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIHBsYXllclNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgdGltZXI6IG51bWJlcjtcclxuICAgIHN0YXJEdXJhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwbGF5U2NvcmU6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBzcGVlZDogbnVtYmVyID0gNDAwO1xyXG5cclxuXHJcbiAgICBnYW1lU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSArPSAxO1xyXG4gICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nID0gJ1NDT1JFOicgKyB0aGlzLnBsYXllclNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBsYXlTY29yZSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwd2FuTmV3U3RhcigpIHtcclxuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclBlcmZlYik7XHJcbiAgICAgICAgLy8gbmV3U3Rhci5hZGRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIG5ld1N0YXIuZ2V0Q29tcG9uZW50KGNjLkNpcmNsZUNvbGxpZGVyKS5yYWRpdXMgPSAyMDtcclxuICAgICAgICBuZXdTdGFyLmdyb3VwID0gJ1N0YXInO1xyXG4gICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5nZXROZXdTdGFyUG9zaXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xyXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gdGhpcy5taW5TdGFyRHVyYXRpb24gKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U3RhckR1cmF0aW9uKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgIH1cclxuICAgIGdldE5ld1N0YXJQb3NpdGlvbigpIHtcclxuICAgICAgICB2YXIgcmFuZFggPSAwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJhbmRZKTtcclxuICAgICAgICB2YXIgcmFuZFkgPSB0aGlzLmdyb3VuZFkgKyBNYXRoLnJhbmRvbSgpICogdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5qdW1wSGVpZ2h0ICsgNTA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmFuZFkpO1xyXG4gICAgICAgIHZhciBtYXhYID0gdGhpcy5ub2RlLndpZHRoIC8gMjtcclxuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xyXG4gICAgICAgIHJldHVybiBjYy52MihyYW5kWCwgcmFuZFkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAgIHBsYXllckJvdW5kYXRpb24oKXtcclxuICAgIC8vICAgdGhpcy5ub2RlLmdldENvbXBvbmVudCgnUGxheWVyJylcclxuICAgIC8vICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0IC8gMjtcclxuICAgICAgICB0aGlzLnNwd2FuTmV3U3RhcigpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnbWVudScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuc3RhckR1cmF0aW9uID0gMDtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQ9dHJ1ZTtcclxuICAgIH1cclxuICAgIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZW92ZXInKTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgLy8gbW92aW5nQmFja2dyb3VuZCgpe1xyXG4gICAgLy8gLy8gbGV0IHRwMSA9IHRoaXMuYmcxLmdldFBvc2l0aW9uKCkueDtcclxuXHJcbiAgICAvLyAvLyAgICAgbGV0IHRwMiA9IHRoaXMuYmcyLmdldFBvc2l0aW9uKCkueDtcclxuXHJcbiAgICAvLyAvLyAgICAgLy8gdmFyIG1heFg9ZHQqdGhpcy5iZzIueCt0aGlzLmJnMi54LzI7XHJcbiAgICAvLyAvLyAgICAgLy8gbGV0IG1heHk9dHAxLnk7XHJcbiAgICAvLyAvLyAgICAgbGV0IHBsYXllcnBvcyA9IHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCkueDtcclxuICAgIC8vIC8vICAgICAvLyBjb25zb2xlLmxvZygnYmFja2dyb3VuZycrIG1heFgpXHJcblxyXG4gICAgLy8gICAgIC8vIGlmICh0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpLnggPj0gdGhpcy5iZzIuZ2V0UG9zaXRpb24oKS54KVxyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCd0cnVlJylcclxuICAgIC8vICAgICAvLyB7XHJcbiAgICAvLyAgICAgLy8gICAgIHRoaXMuYmcuc2V0UG9zaXRpb24odGhpcy5iZzIuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuZ3JvdW5kLnNldFBvc2l0aW9uKHRoaXMuYmcyLmdldFBvc2l0aW9uKCkueSlcclxuXHJcbiAgICAvLyAgICAgLy8gaWYgKHRoaXMucGxheWVyLmdldFBvc2l0aW9uKCkueCkge1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgdGhpcy5iZzEuc2V0UG9zaXRpb24odGhpcy5iZy5nZXRQb3NpdGlvbigpKVxyXG4gICAgLy8gICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICAvLyBjaGVjaygpIHtcclxuXHJcbiAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIHZhciB0cDEgPSB0aGlzLmJnMS5nZXRQb3NpdGlvbigpLng7XHJcblxyXG4gICAgICAgIC8vIHZhciB0cDIgPSB0aGlzLmJnMi5nZXRQb3NpdGlvbigpLng7XHJcblxyXG4gICAgICAgIC8vIC8vIHZhciBtYXhYPWR0KnRoaXMuYmcyLngrdGhpcy5iZzIueC8yO1xyXG4gICAgICAgIC8vIC8vIGxldCBtYXh5PXRwMS55O1xyXG4gICAgICAgIC8vIHZhciBwbGF5ZXJwb3MgPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpLng7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZXIgPiB0aGlzLnN0YXJEdXJhdGlvbil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdhbWVPdmVyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGlzLnRpbWVyICs9IGR0O1xyXG4gICAgICAgICAgICAvL2JhY2tncm91bmRcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuYmdzW2ldLm5vZGUueCAtPSAxLjA7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5iZ3NbaV0ubm9kZS54IDw9IC05NjApIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmJnc1tpXS5ub2RlLnggPSA5NjA7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ==