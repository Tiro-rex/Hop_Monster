"use strict";
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