
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Button');
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/Retry');
require('./assets/scripts/Sid/Scroller');
require('./assets/scripts/Star');
require('./assets/scripts/cameracr');
require('./assets/scripts/walls');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTBJQztRQXZJRyxrQkFBWSxHQUFRLENBQUMsQ0FBQztRQUd0QixnQkFBVSxHQUFRLENBQUMsQ0FBQztRQUdwQixrQkFBWSxHQUFRLENBQUMsQ0FBQztRQUd0QixXQUFLLEdBQVEsQ0FBQyxDQUFDO1FBTWYsZ0JBQVUsR0FBYyxJQUFJLENBQUM7O0lBd0hqQyxDQUFDO0lBcEhHLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsMEdBQTBHO0lBQzFHLDRHQUE0RztJQUU1Ryw4REFBOEQ7SUFDOUQsd0RBQXdEO0lBQ3hELGdDQUFnQztJQUVoQywwREFBMEQ7SUFDMUQsb0JBQW9CO0lBQ3BCLEtBQUs7SUFDTCw4QkFBYSxHQUFiO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0Qsd0JBQXdCO0lBRTVCLG9CQUFvQjtJQUNoQiwwQkFBUyxHQUFULFVBQVUsS0FBSztRQUNYLFFBQU8sS0FBSyxDQUFDLE9BQU8sRUFBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLDZCQUE2QjtnQkFDN0IsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsUUFB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Q0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEMsc0NBQXNDO0lBQ3RDLENBQUM7SUFFRCxxQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzVELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxDQUFDO2FBQzlDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxDQUFDO2FBQzVCLEtBQUssRUFBRSxDQUFBO0lBQ1osQ0FBQztJQXJJRDtRQURDLFFBQVE7Z0RBQ2E7SUFHdEI7UUFEQyxRQUFROzhDQUNXO0lBR3BCO1FBREMsUUFBUTtnREFDYTtJQUd0QjtRQURDLFFBQVE7eUNBQ007SUFNZjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNNO0lBbEJaLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EwSTFCO0lBQUQsYUFBQztDQTFJRCxBQTBJQyxDQTFJbUMsRUFBRSxDQUFDLFNBQVMsR0EwSS9DO2tCQTFJb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAganVtcER1cmF0aW9uOm51bWJlcj0wO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAganVtcEhlaWdodDpudW1iZXI9MDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1heE1vdmVTcGVlZDpudW1iZXI9MDsgICBcclxuICAgICAgICBcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgYWNjZWw6bnVtYmVyPTA7XHJcbiAgICBhY2NMZWZ0OiBib29sZWFuO1xyXG4gICAgYWNjUmlnaHQ6IGJvb2xlYW47XHJcbiAgICB4U3BlZWQ6IG51bWJlcjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcGxheWVySnVtcDpjYy5BdWRpb0NsaXA9bnVsbDtcclxuICAgIGp1bXBidG46IGJvb2xlYW47XHJcbiAgICB5SGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgLy9jaGFyYWN0ZXIgSnVtcCBtZXRob2Qgc2NyaXB0XHJcbiAgICAvLyBqdW1wQWN0aW9uKCkge1xyXG4gICAgLy8gICAgIHZhciBqdW1wdXAgPSBjYy50d2Vlbih0aGlzLm5vZGUpLmJ5KHRoaXMuanVtcER1cmF0aW9uLCB7IHk6IHRoaXMuanVtcEhlaWdodCB9LCB7IGVhc2luZzonc2luZU91dCd9KVxyXG4gICAgLy8gICAgIHZhciBqdW1wRG93biA9IGNjLnR3ZWVuKHRoaXMubm9kZSkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHsgeTogLXRoaXMuanVtcEhlaWdodCB9LCB7IGVhc2luZzonc2luZUluJ30pXHJcbiAgICAgICBcclxuICAgIC8vICAgICAvL3ZhciBqdW1wc291bmQgPSBjYy5jYWxsRnVuYyh0aGlzLnBsYXlKdW1wU291bmQsdGhpcyk7XHJcbiAgICAvLyAgICAgdmFyIHR3ZWVuID0gY2MudHdlZW4oKS5zZXF1ZW5jZShqdW1wdXAsanVtcERvd24pO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdkYWRhZGFkYScpLy9cclxuXHJcbiAgICAvLyAgICAgLy8gcmV0dXJuIGNjLnR3ZWVuKHRoaXMubm9kZSkucmVwZWF0Rm9yZXZlcih0d2Vlbik7XHJcbiAgICAvLyAgICAgcmV0dXJuIHR3ZWVuO1xyXG4gICAgLy8gIH1cclxuICAgIHBsYXlKdW1wU291bmQoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGxheWVySnVtcCxmYWxzZSk7XHJcbiAgICB9XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbi8vIEtleSBzdHJvY2sgZXZlbnRzXHJcbiAgICBvbktleURvbncoZXZlbnQpe1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFhIHBlcnNlc2RcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGQgcGVyc2VzZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIG9uS2V5VXAoZXZlbnQpe1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgLy8ganVtcEFjdGlvbjEoZXZlbnQpe1xyXG4gICAgLy8gICAgIHN3aXRjaChldmVudC5rZXljb2RlKXtcclxuICAgIC8vICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcclxuICAgIC8vICAgICAgICAgdGhpcy5qdW1wQWN0aW9uKClcclxuICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICBcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyB2YXIganVtcEFjdGlvbiA9IHRoaXMuanVtcEFjdGlvbigpO1xyXG4gICAgICAgIC8vICBjYy50d2Vlbih0aGlzLm5vZGUpLnRoZW4oanVtcEFjdGlvbilcclxuICAgICAgICAvLyAgLnN0YXJ0KClcclxuICAgICAgIFxyXG4gICAgICAgICB0aGlzLmFjY0xlZnQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY2NSaWdodD1mYWxzZTtcclxuICAgICAgICB0aGlzLnhTcGVlZD0wXHJcbiAgICAgICAgLy8gdGhpcy5qdW1wYnRuPWZhbHNlO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnlIZWlnaHQ9MFxyXG5cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5vbktleURvbncsdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCx0aGlzLm9uS2V5VXAsdGhpcyk7XHJcbiAgICAgICAgLy8gY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLHRoaXMuanVtcEFjdGlvbjEsdGhpcyk7XHJcbiAgICAgICAgLy8gY2Muc3lzdGVtRXZlbnQuXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvbncsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgICAgIC8vIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTix0aGlzLmp1bXBBY3Rpb24xLHRoaXMpO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KXtcclxuXHJcbiAgICAgICAgaWYodGhpcy5hY2NMZWZ0KXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJsZWZ0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsICogZHQ7ICAgICAgIFxyXG4gICAgICAgfWVsc2UgaWYodGhpcy5hY2NSaWdodCl7XHJcbiAgICAgICAgICAgdGhpcy54U3BlZWQgKz0gdGhpcy5hY2NlbCAqIGR0OyAgICAgXHJcbiAgICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XHJcblxyXG4gICAgICAgfVxyXG4gICAgLy8gICAgaWYgKHRoaXMuYWNjUmlnaHQpe1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwicmlnaHRcIik7XHJcbiAgICAvLyAgICB9XHJcbiAgICAgICBcclxuICAgIC8vICAgIGlmKHRoaXMuanVtcGJ0bil7XHJcbiAgICAvLyAgICAgdGhpcy55SGVpZ2h0ICs9IHRoaXMuanVtcEhlaWdodCAqIGR0IDtcclxuICAgIC8vICAgIH1cclxuICAgICAgIGlmKE1hdGguYWJzKHRoaXMueFNwZWVkKSA+IHRoaXMubWF4TW92ZVNwZWVkKXtcclxuXHJcbiAgICAgICAgdGhpcy54U3BlZWQgPSB0aGlzLm1heE1vdmVTcGVlZCAqIHRoaXMueFNwZWVkL01hdGguYWJzKHRoaXMueFNwZWVkKTtcclxuICAgICAgIH1cclxuICAgICAgIHRoaXMubm9kZS54ID1jYy5taXNjLmNsYW1wZih0aGlzLm5vZGUueCw0NTAsLTQ1MClcclxuICAgICAgIHRoaXMubm9kZS54ICs9dGhpcy54U3BlZWQgKiBkdDtcclxuICAgIC8vICAgIHRoaXMubm9kZS55ICs9dGhpcy55SGVpZ2h0ICogZHQ7XHJcbiAgICB9XHJcblxyXG4gICAganVtcCgpe1xyXG4gICAgICAgIHRoaXMubm9kZS55PSBjYy5taXNjLmNsYW1wZih0aGlzLm5vZGUueSx0aGlzLmp1bXBIZWlnaHQsLTIwKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuYnkoMC41LHt5OnRoaXMuanVtcEhlaWdodH0pXHJcbiAgICAgICAgLmRlbGF5KDAuMilcclxuICAgICAgICAuYnkoMC41LHt5Oi10aGlzLmp1bXBIZWlnaHR9KVxyXG4gICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8512L5OnxN+K1I5zQTSS7p', 'Button');
// scripts/Button.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    Button.prototype.onLoad = function () {
        // cc.director.preloadScene('game');
        this.node.on('touchstart', function () {
            cc.director.loadScene('game');
        });
    };
    Button.prototype.start = function () {
    };
    Button = __decorate([
        ccclass
    ], Button);
    return Button;
}(cc.Component));
exports.default = Button;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDs7SUFrQkEsQ0FBQztJQWRHLHdCQUF3QjtJQUV4Qix1QkFBTSxHQUFOO1FBQ0ksb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBQztZQUMxQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQWZnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBa0IxQjtJQUFELGFBQUM7Q0FsQkQsQUFrQkMsQ0FsQm1DLEVBQUUsQ0FBQyxTQUFTLEdBa0IvQztrQkFsQm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ2dhbWUnKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdnYW1lJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/cameracr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9507YD2FxHqIQ0mtHBwf1P', 'cameracr');
// scripts/cameracr.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var cameracr = /** @class */ (function (_super) {
    __extends(cameracr, _super);
    function cameracr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Player = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    cameracr.prototype.start = function () {
    };
    cameracr.prototype.update = function (dt) {
        var tp = this.Player.getPosition();
        var cp = this.node.getPosition();
        cp.lerp(tp, 0.05, cp);
        cp.x = cc.misc.clampf(tp.x, tp.x, 0);
        cp.y = cc.misc.clampf(tp.y, 0, 0);
        this.node.setPosition(cp);
    };
    __decorate([
        property(cc.Node)
    ], cameracr.prototype, "Player", void 0);
    cameracr = __decorate([
        ccclass
    ], cameracr);
    return cameracr;
}(cc.Component));
exports.default = cameracr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2FtZXJhY3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUJDO1FBcEJHLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBb0IzQixDQUFDO0lBaEJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDckIsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDcEMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBbkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFITixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUI1QjtJQUFELGVBQUM7Q0F2QkQsQUF1QkMsQ0F2QnFDLEVBQUUsQ0FBQyxTQUFTLEdBdUJqRDtrQkF2Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FtZXJhY3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgUGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBsZXQgdHAgPSB0aGlzLlBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCBjcCA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNwLmxlcnAodHAsIDAuMDUsIGNwKVxyXG4gICAgICAgIGNwLnggPSBjYy5taXNjLmNsYW1wZih0cC54LCB0cC54LCAwKVxyXG4gICAgICAgIGNwLnkgPSBjYy5taXNjLmNsYW1wZih0cC55LCAwLCAwKVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjcCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/walls.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ab256XvQlJqr2GlAMsw6cm', 'walls');
// scripts/walls.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leftwall = null;
        _this.rightwall = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "leftwall", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "rightwall", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcd2FsbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZUM7UUFaQyxjQUFRLEdBQVMsSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBUyxJQUFJLENBQUM7O1FBU3JCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVRIO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDSztJQUxKLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FlNUI7SUFBRCxlQUFDO0NBZkQsQUFlQyxDQWZxQyxFQUFFLENBQUMsU0FBUyxHQWVqRDtrQkFmb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBsZWZ0d2FsbDpjYy5Ob2RlPW51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcmlnaHR3YWxsOmNjLk5vZGU9bnVsbDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd2f0b5pztDbZ7ey3XpA1Y7', 'Star');
// scripts/Star.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Star = /** @class */ (function (_super) {
    __extends(Star, _super);
    function Star() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Star.prototype.onCollisionEnter = function (selfCollider, otherCollider) {
        if (otherCollider.name == 'star<CircleCollider>' && selfCollider.name == 'Player<CircleCollider>') {
            this.node.parent.getComponent('Game').gameScore();
            this.node.parent.getComponent('Game').spwanNewStar();
            this.node.destroy();
        }
    };
    // onDestroy(){
    // }
    Star.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;
        // manager.enabledDrawBoundingBox = true;
    };
    Star.prototype.start = function () {
    };
    Star = __decorate([
        ccclass
    ], Star);
    return Star;
}(cc.Component));
exports.default = Star;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7O0lBNkJBLENBQUM7SUF6QkcsK0JBQWdCLEdBQWhCLFVBQWlCLFlBQVksRUFBQyxhQUFhO1FBQzFDLElBQUcsYUFBYSxDQUFDLElBQUksSUFBRyxzQkFBc0IsSUFBSSxZQUFZLENBQUMsSUFBSSxJQUFJLHdCQUF3QixFQUFDO1lBQzdGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN0QjtJQUNGLENBQUM7SUFFRCxlQUFlO0lBRWYsSUFBSTtJQUVKLHFCQUFNLEdBQU47UUFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsbUNBQW1DO1FBQ25DLHlDQUF5QztJQUU3QyxDQUFDO0lBRUQsb0JBQUssR0FBTDtJQUVBLENBQUM7SUExQmdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E2QnhCO0lBQUQsV0FBQztDQTdCRCxBQTZCQyxDQTdCaUMsRUFBRSxDQUFDLFNBQVMsR0E2QjdDO2tCQTdCb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKHNlbGZDb2xsaWRlcixvdGhlckNvbGxpZGVyKXtcclxuICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWU9PSAnc3RhcjxDaXJjbGVDb2xsaWRlcj4nICYmIHNlbGZDb2xsaWRlci5uYW1lID09ICdQbGF5ZXI8Q2lyY2xlQ29sbGlkZXI+Jyl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoJ0dhbWUnKS5nYW1lU2NvcmUoKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnR2FtZScpLnNwd2FuTmV3U3RhcigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIFxyXG4gICAgLy8gfVxyXG4gXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgLy8gbWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Retry.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fbb7bMJ3EBNBa7RE/WQIwnk', 'Retry');
// scripts/Retry.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
Object.defineProperty(exports, "__esModule", { value: true });
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Retry = /** @class */ (function (_super) {
    __extends(Retry, _super);
    function Retry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.retry = null;
        _this.retry_btn = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Retry.prototype.onLoad = function () {
        this.retry_btn.on('touchstart', function () {
            cc.director.loadScene('menu');
        });
    };
    Retry.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], Retry.prototype, "retry", void 0);
    __decorate([
        property(cc.Node)
    ], Retry.prototype, "retry_btn", void 0);
    Retry = __decorate([
        ccclass
    ], Retry);
    return Retry;
}(cc.Component));
exports.default = Retry;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUmV0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4Qjs7QUFHOUIsa0ZBQWtGO0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBc0JDO1FBbkJHLFdBQUssR0FBVSxJQUFJLENBQUM7UUFFcEIsZUFBUyxHQUFTLElBQUksQ0FBQzs7UUFnQnZCLGlCQUFpQjtJQUNyQixDQUFDO0lBYkcsd0JBQXdCO0lBRXhCLHNCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUM7WUFDM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQscUJBQUssR0FBTDtJQUVBLENBQUM7SUFoQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3Q0FDQztJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBTE4sS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXNCekI7SUFBRCxZQUFDO0NBdEJELEFBc0JDLENBdEJrQyxFQUFFLENBQUMsU0FBUyxHQXNCOUM7a0JBdEJvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuXHJcblxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldHJ5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICByZXRyeTpjYy5MYWJlbD1udWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByZXRyeV9idG46Y2MuTm9kZT1udWxsO1xyXG5cclxuXHJcbiAgICBcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5yZXRyeV9idG4ub24oJ3RvdWNoc3RhcnQnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Sid/Scroller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80e45Cntt9FV5TwAT4C3+yj', 'Scroller');
// scripts/Sid/Scroller.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Scroller = /** @class */ (function (_super) {
    __extends(Scroller, _super);
    function Scroller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameCanvas = null;
        _this._resetX = 0;
        _this._chalnewaliSpeed = 0;
        _this._targetX = 0;
        return _this;
    }
    Scroller.prototype.onLoad = function () {
        this.init();
    };
    Scroller.prototype.init = function () {
        this._resetX = -this.gameCanvas.width;
        this._targetX = 2 * this.gameCanvas.width;
        this._chalnewaliSpeed = -50;
    };
    Scroller.prototype.update = function (dt) {
        this.node.x += dt * this._chalnewaliSpeed;
        if (this.node.x <= this._resetX)
            this.node.x = this._targetX;
    };
    __decorate([
        property({ type: cc.Node })
    ], Scroller.prototype, "gameCanvas", void 0);
    Scroller = __decorate([
        ccclass
    ], Scroller);
    return Scroller;
}(cc.Component));
exports.default = Scroller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2lkXFxTY3JvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwQkM7UUF2QlcsZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFVLENBQUMsQ0FBQztRQUNuQixzQkFBZ0IsR0FBVSxDQUFDLENBQUM7UUFDNUIsY0FBUSxHQUFVLENBQUMsQ0FBQzs7SUFtQmhDLENBQUM7SUFqQkcseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNmLENBQUM7SUFFRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRVMseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ3hDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU87WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUU5QixDQUFDO0lBckJEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUMsQ0FBQztnREFDUztJQUhqQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEI1QjtJQUFELGVBQUM7Q0ExQkQsQUEwQkMsQ0ExQnFDLEVBQUUsQ0FBQyxTQUFTLEdBMEJqRDtrQkExQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuTm9kZX0pXHJcbiAgICBwcml2YXRlIGdhbWVDYW52YXM6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVzZXRYOm51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9jaGFsbmV3YWxpU3BlZWQ6bnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3RhcmdldFg6bnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgdGhpcy5fcmVzZXRYID0gLXRoaXMuZ2FtZUNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLl90YXJnZXRYID0gMiAqIHRoaXMuZ2FtZUNhbnZhcy53aWR0aCBcclxuICAgICAgICB0aGlzLl9jaGFsbmV3YWxpU3BlZWQgPSAtNTA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gZHQqdGhpcy5fY2hhbG5ld2FsaVNwZWVkO1xyXG4gICAgICAgIGlmKHRoaXMubm9kZS54IDw9IHRoaXMuX3Jlc2V0WClcclxuICAgICAgICB0aGlzLm5vZGUueD10aGlzLl90YXJnZXRYO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------
