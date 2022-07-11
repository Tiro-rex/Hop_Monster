
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