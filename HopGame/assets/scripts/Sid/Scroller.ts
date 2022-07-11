const {ccclass, property} = cc._decorator;

@ccclass
export default class Scroller extends cc.Component {

    @property({type:cc.Node})
    private gameCanvas:cc.Node = null;

    private _resetX:number = 0;
    private _chalnewaliSpeed:number = 0;
    private _targetX:number = 0;

    onLoad(){
        this.init()
    }
    
    init(){
        this._resetX = -this.gameCanvas.width;
        this._targetX = 2 * this.gameCanvas.width 
        this._chalnewaliSpeed = -50;
    }

    protected update(dt: number): void {
        this.node.x += dt*this._chalnewaliSpeed;
        if(this.node.x <= this._resetX)
        this.node.x=this._targetX;
        
    }

}