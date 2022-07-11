
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