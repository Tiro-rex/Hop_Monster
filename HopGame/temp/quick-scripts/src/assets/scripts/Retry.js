"use strict";
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