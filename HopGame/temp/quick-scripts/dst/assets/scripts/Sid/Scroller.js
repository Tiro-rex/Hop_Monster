
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