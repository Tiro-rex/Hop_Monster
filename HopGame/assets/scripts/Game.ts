// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Player from "./Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    @property(cc.Prefab)
    starPerfeb: cc.Prefab = null;

    @property(cc.Node)
    ground: cc.Node = null;

    // @property(cc.Node)
    // bg: cc.Node = null;

    // @property(cc.Node)
    // bg1: cc.Node = null;

    // @property(cc.Node)
    // bg2: cc.Node = null;

    @property
    maxStarDuration: number = 0;

    @property
    minStarDuration: number = 0;

    @property(cc.Node)
    player: cc.Node = null;
    groundY: any;

    @property(cc.Label)
    score: cc.Label = null;
    playerScore: number = 0;
    timer: number;
    starDuration: number;

    @property(cc.AudioClip)
    playScore: cc.AudioClip = null;
    speed: number = 400;


    gameScore() {
        this.playerScore += 1;
        this.score.string = 'SCORE:' + this.playerScore.toString();
        cc.audioEngine.playEffect(this.playScore, false);
    }

    spwanNewStar() {
        var newStar = cc.instantiate(this.starPerfeb);
        // newStar.addComponent(cc.CircleCollider);
        newStar.getComponent(cc.CircleCollider).radius = 20;
        newStar.group = 'Star';
        newStar.setPosition(this.getNewStarPosition());
        this.node.addChild(newStar);
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration);
        this.timer = 0;
    }
    getNewStarPosition() {
        var randX = 0;
        // console.log(randY);
        var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
        // console.log(randY);
        var maxX = this.node.width / 2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        return cc.v2(randX, randY);
    }


    //   playerBoundation(){
    //   this.node.getComponent('Player')
    //   }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.groundY = this.ground.y + this.ground.height / 2;
        this.spwanNewStar();
        this.timer = 0;
        // cc.director.preloadScene('menu');
        
        // this.starDuration = 0;
        // cc.director.getPhysicsManager().enabled=true;
    }
    gameOver() {
        this.player.stopAllActions;
        cc.director.loadScene('gameover');


    }
    // movingBackground(){
    // // let tp1 = this.bg1.getPosition().x;

    // //     let tp2 = this.bg2.getPosition().x;

    // //     // var maxX=dt*this.bg2.x+this.bg2.x/2;
    // //     // let maxy=tp1.y;
    // //     let playerpos = this.player.getPosition().x;
    // //     // console.log('backgroung'+ maxX)

    //     // if (this.player.getPosition().x >= this.bg2.getPosition().x)
    //     // console.log('true')
    //     // {
    //     //     this.bg.setPosition(this.bg2.getPosition());
    //         // this.ground.setPosition(this.bg2.getPosition().y)

    //     // if (this.player.getPosition().x) {
    //     //         this.bg1.setPosition(this.bg.getPosition())
    //     //     }
    //     }
    // }


    start() {

    }
    // check() {

    //     return;
    // }

    update(dt) {
        // var tp1 = this.bg1.getPosition().x;

        // var tp2 = this.bg2.getPosition().x;

        // // var maxX=dt*this.bg2.x+this.bg2.x/2;
        // // let maxy=tp1.y;
        // var playerpos = this.player.getPosition().x;
        
            if(this.timer > this.starDuration){
                this.gameOver();
                console.log(this.gameOver);
                return;
            }
            // this.timer += dt;
            //background
            // for (let i = 0; i < this.bgs.length; i++) {
            //         this.bgs[i].node.x -= 1.0;
            //     if (this.bgs[i].node.x <= -960) {
            //         this.bgs[i].node.x = 960;
            //     }



        }
    }