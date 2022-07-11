// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:


//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Retry extends cc.Component {

    @property(cc.Label)
    retry:cc.Label=null;
    @property(cc.Node)
    retry_btn:cc.Node=null;


    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.retry_btn.on('touchstart',function(){
            cc.director.loadScene('menu');
            });
    }

    start () {

    }

    // update (dt) {}
}
