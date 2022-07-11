"use strict";
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