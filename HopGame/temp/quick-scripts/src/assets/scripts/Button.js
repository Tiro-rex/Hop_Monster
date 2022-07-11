"use strict";
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