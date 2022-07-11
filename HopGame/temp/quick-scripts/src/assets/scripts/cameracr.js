"use strict";
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