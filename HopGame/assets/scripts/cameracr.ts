// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class cameracr extends cc.Component {

    @property(cc.Node)
    Player: cc.Node = null;



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    update(dt) {
        let tp = this.Player.getPosition();
        let cp = this.node.getPosition();
        cp.lerp(tp, 0.05, cp)
        cp.x = cc.misc.clampf(tp.x, tp.x, 0)
        cp.y = cc.misc.clampf(tp.y, 0, 0)
        this.node.setPosition(cp);
    }
}
