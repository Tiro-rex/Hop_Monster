// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    @property
    jumpDuration:number=0;

    @property
    jumpHeight:number=0;

    @property
    maxMoveSpeed:number=0;   
        
    @property
    accel:number=0;
    accLeft: boolean;
    accRight: boolean;
    xSpeed: number;

    @property(cc.AudioClip)
    playerJump:cc.AudioClip=null;
    jumpbtn: boolean;
    yHeight: number;

    //character Jump method script
    // jumpAction() {
    //     var jumpup = cc.tween(this.node).by(this.jumpDuration, { y: this.jumpHeight }, { easing:'sineOut'})
    //     var jumpDown = cc.tween(this.node).by(this.jumpDuration, { y: -this.jumpHeight }, { easing:'sineIn'})
       
    //     //var jumpsound = cc.callFunc(this.playJumpSound,this);
    //     var tween = cc.tween().sequence(jumpup,jumpDown);
    //     console.log('dadadada')//

    //     // return cc.tween(this.node).repeatForever(tween);
    //     return tween;
    //  }
    playJumpSound(){
        cc.audioEngine.playEffect(this.playerJump,false);
    }
    // LIFE-CYCLE CALLBACKS:

// Key strock events
    onKeyDonw(event){
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.accLeft = true;
                // console.log("aa persesd");
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                 // console.log("dd persesd");
                break;
            case cc.macro.KEY.w:
                this.jump();
                break;
        }
                        
        }
    onKeyUp(event){
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.accLeft=false;
                break;
            case cc.macro.KEY.d:
                this.accRight=false;
                break;
        }       
        }
    // jumpAction1(event){
    //     switch(event.keycode){
    //         case cc.macro.KEY.w:
    //         this.jumpAction()
    //         break;
    //     }
    // }
    
    
    onLoad() {
        // var jumpAction = this.jumpAction();
        //  cc.tween(this.node).then(jumpAction)
        //  .start()
       
         this.accLeft=false;
        this.accRight=false;
        this.xSpeed=0
        // this.jumpbtn=false;

        // this.yHeight=0

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDonw,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.jumpAction1,this);
        // cc.systemEvent.
    }

    onDestroy(){
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDonw, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.jumpAction1,this);
    }
     
    start () {
 
    }

    update(dt){

        if(this.accLeft){
            // console.log("left");
            this.xSpeed -= this.accel * dt;       
       }else if(this.accRight){
           this.xSpeed += this.accel * dt;     
       }else{
        this.xSpeed = 0;

       }
    //    if (this.accRight){
    //     console.log("right");
    //    }
       
    //    if(this.jumpbtn){
    //     this.yHeight += this.jumpHeight * dt ;
    //    }
       if(Math.abs(this.xSpeed) > this.maxMoveSpeed){

        this.xSpeed = this.maxMoveSpeed * this.xSpeed/Math.abs(this.xSpeed);
       }
       this.node.x =cc.misc.clampf(this.node.x,450,-450)
       this.node.x +=this.xSpeed * dt;
    //    this.node.y +=this.yHeight * dt;
    }

    jump(){
        this.node.y= cc.misc.clampf(this.node.y,this.jumpHeight,-20)
        cc.tween(this.node).by(0.5,{y:this.jumpHeight})
        .delay(0.2)
        .by(0.5,{y:-this.jumpHeight})
        .start()
    }

}
