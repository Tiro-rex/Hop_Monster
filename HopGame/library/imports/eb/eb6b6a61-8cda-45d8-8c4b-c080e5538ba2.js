"use strict";
cc._RF.push(module, 'eb6b6phjNpF2IxLwIDlU4ui', 'Player');
// scripts/Player.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jumpDuration = 0;
        _this.jumpHeight = 0;
        _this.maxMoveSpeed = 0;
        _this.accel = 0;
        _this.playerJump = null;
        return _this;
    }
    //character Jump method script
    // jumpAction() {
    //     var jumpup = cc.tween(this.node).by(this.jumpDuration, { y: this.jumpHeight }, { easing:'sineOut'})
    //     var jumpDown = cc.tween(this.node).by(this.jumpDuration, { y: -this.jumpHeight }, { easing:'sineIn'})
    //     //var jumpsound = cc.callFunc(this.playJumpSound,this);
    //     var tween = cc.tween().sequence(jumpup,jumpDown);
    //     console.log('dadadada')//
    //     // return cc.tween(this.node).repeatForever(tween);
    //     return tween;
    //  }
    Player.prototype.playJumpSound = function () {
        cc.audioEngine.playEffect(this.playerJump, false);
    };
    // LIFE-CYCLE CALLBACKS:
    // Key strock events
    Player.prototype.onKeyDonw = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                // console.log("aa persesd");
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                // console.log("dd persesd");
                break;
            case cc.macro.KEY.w:
                this.jump();
                break;
        }
    };
    Player.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
        }
    };
    // jumpAction1(event){
    //     switch(event.keycode){
    //         case cc.macro.KEY.w:
    //         this.jumpAction()
    //         break;
    //     }
    // }
    Player.prototype.onLoad = function () {
        // var jumpAction = this.jumpAction();
        //  cc.tween(this.node).then(jumpAction)
        //  .start()
        this.accLeft = false;
        this.accRight = false;
        this.xSpeed = 0;
        // this.jumpbtn=false;
        // this.yHeight=0
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDonw, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.jumpAction1,this);
        // cc.systemEvent.
    };
    Player.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDonw, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.jumpAction1,this);
    };
    Player.prototype.start = function () {
    };
    Player.prototype.update = function (dt) {
        if (this.accLeft) {
            // console.log("left");
            this.xSpeed -= this.accel * dt;
        }
        else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        else {
            this.xSpeed = 0;
        }
        //    if (this.accRight){
        //     console.log("right");
        //    }
        //    if(this.jumpbtn){
        //     this.yHeight += this.jumpHeight * dt ;
        //    }
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }
        this.node.x = cc.misc.clampf(this.node.x, 450, -450);
        this.node.x += this.xSpeed * dt;
        //    this.node.y +=this.yHeight * dt;
    };
    Player.prototype.jump = function () {
        this.node.y = cc.misc.clampf(this.node.y, this.jumpHeight, -20);
        cc.tween(this.node).by(0.5, { y: this.jumpHeight })
            .delay(0.2)
            .by(0.5, { y: -this.jumpHeight })
            .start();
    };
    __decorate([
        property
    ], Player.prototype, "jumpDuration", void 0);
    __decorate([
        property
    ], Player.prototype, "jumpHeight", void 0);
    __decorate([
        property
    ], Player.prototype, "maxMoveSpeed", void 0);
    __decorate([
        property
    ], Player.prototype, "accel", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "playerJump", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();