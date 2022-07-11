// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Star extends cc.Component {



    onCollisionEnter(selfCollider,otherCollider){
     if(otherCollider.name== 'star<CircleCollider>' && selfCollider.name == 'Player<CircleCollider>'){
        this.node.parent.getComponent('Game').gameScore();
        this.node.parent.getComponent('Game').spwanNewStar();
        this.node.destroy();
     }
    }

    // onDestroy(){
        
    // }
 
    onLoad(){
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;
        // manager.enabledDrawBoundingBox = true;
         
    }

    start () {

    }

    // update (dt) {}
}
