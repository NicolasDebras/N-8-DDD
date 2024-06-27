import { ECamps } from "../enums/ECamps";
import { ERoles } from "../enums/ERoles";
import { Player } from "../models/Player";
import { Witch } from "../models/roles/Witch";
import { InfectWereWolf } from "../models/roles/InfectWereWolf";
import { Cupid } from "../models/roles/Cupid";
import { Guard } from "../models/roles/Guard";
import { Seer } from "../models/roles/Seer";
import { chooseAnswer, findPlayerByRole } from "../tools/tool";
import { WolfVote } from "./WolfVote";
import { WhiteWereWolf } from "../models/roles/WhiteWereWolf";

export class NightTurn{
    nbNight=1;
    startNight(playerList:Player[]):Player[]{
        let res:Player[]=[]
        //cupid on first turn
        if( this.nbNight ===1){
            let cupid = findPlayerByRole(ERoles.CUPID, playerList)[0] as Cupid
            let couplea:number,coupleb:number
            do{
                couplea = chooseAnswer(playerList)
                coupleb = chooseAnswer(playerList)
            }while(couplea == coupleb)
            playerList=cupid.defineLovers(couplea,coupleb,playerList)
        }

        //voyante
        let seerFind = findPlayerByRole(ERoles.SEER,playerList)
        if( seerFind.length === 0){
            let target=playerList[chooseAnswer(playerList)]
            let seer=seerFind[0] as Seer
            seer.seeCardOfPlayer(target)
        }

        //guard
        let guardFind = findPlayerByRole(ERoles.GUARD,playerList)
        let _protected : Player|null=null;
        if( guardFind.length === 0){
            let protect:boolean = false;
            let guard=guardFind[0] as Guard
            do{
                _protected = playerList[chooseAnswer(playerList)]
                protect=guard.protectPlayer(_protected)
            }while(!protect)
        }

        //Wolf Vote
        let wolfTarget=new WolfVote(playerList).startVote()
        let isDead
        if(!_protected) {
            isDead=true
        }else{
            isDead=(wolfTarget==_protected)
        }

        //ipdl
        if(isDead){
            let ipdlFind = findPlayerByRole(ERoles.INFECT_WEREWOLF ,playerList)
            if ( ipdlFind.length === 0){
                let ipdl = ipdlFind[0] as InfectWereWolf;
                if (!ipdl.getHaveInfected()){
                    let infect = chooseAnswer(["INFECT", "NON"])
                    if (infect === 0) {
                        ipdl.infect(wolfTarget)
                    }     
                }
            }
            isDead=false
        }

        //loup blanc
        if(this.nbNight%2==0){
            let whiteFind=findPlayerByRole(ERoles.WHITE_WEREWOLF ,playerList)
            if( whiteFind.length === 0){
                let whiteRes;
                let white = whiteFind[0] as WhiteWereWolf;
                do{
                    let wolfList=findPlayerByRole(ERoles.WEREWOLF,playerList)
                    let whiteTarget=wolfList[chooseAnswer(wolfList)   ]                     
                    whiteRes=white.killOtherWereWolf(whiteTarget)
                }while(!whiteRes)
                
                res.push(whiteRes)
            }
        }
        
        //witch
        let witchFind = findPlayerByRole(ERoles.WITCH ,playerList)
        if (witchFind.length === 0){
            let witch = witchFind[0] as Witch;
            if (witch.havePotions()) {
                let potionToUse = chooseAnswer(["vie", "mort", "annuler"])

                // 0 -> Potion de vie
                // 1 -> Potion de mort
                if(potionToUse === 0) {
                    witch.useHealthPotion(wolfTarget)
                } else if(potionToUse === 1) {
                    let choice = chooseAnswer(playerList.filter((player: Player) => player.role.name !== ERoles.WITCH))
                    witch.useDeathPotion(playerList[choice])
                }
            }
        }
        
        this.nbNight++
        return res
    }
}