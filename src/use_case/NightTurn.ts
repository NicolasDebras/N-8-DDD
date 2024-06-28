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
    nbNight = 1;

    startNight(playerList:Player[]):Player[]{
        //cupid on first turn
        if( this.nbNight === 1){
            console.log("Cupidon")
            let cupid = findPlayerByRole(ERoles.CUPID, playerList)[0]
            if (cupid.role instanceof Cupid){
                console.log("Cupidon")
                let lovers=cupid.role.makeAction(playerList)
                playerList[lovers[0]].isInLove=true
                playerList[lovers[1]].isInLove=true
            }
        }

        //voyante
        console.log("voyante")
        let seerFind = findPlayerByRole(ERoles.SEER,playerList)
        if(seerFind.length ==1){
            let seer = seerFind[0]
            if(seer.role instanceof Seer){
                let targetPlayer = seer.role.selectPlayer(playerList)
                seer.role.getRole(playerList[targetPlayer].role.name)  
            }
        }
        
        
        //guard
        console.log("guard")
        let _protected : Player | null = null;
        let guardFind = findPlayerByRole(ERoles.GUARD,playerList)
        if( guardFind.length > 0){
            let guard = guardFind[0]
            if(guard.role instanceof Guard){
                let targetPlayer = 0;
                targetPlayer = guard.role.protectPlayer(playerList)
                _protected=playerList[targetPlayer]
            }
        }

        //Wolf Vote
        console.log("wolf vote")
        let wolfTarget = new WolfVote(playerList).startVote()
        let wolftargetIndex = playerList.findIndex((player)=>{player==wolfTarget})
        let isDead
        if(!_protected) {
            isDead=true
        }else{
            isDead=(wolfTarget==_protected)
        }

        //ipdl
        console.log("ipdl")
        if(isDead){
            let ipdlFind = findPlayerByRole(ERoles.INFECT_WEREWOLF ,playerList)
            if ( ipdlFind.length > 0){
                let ipdl = ipdlFind[0];
                if(ipdl.role instanceof InfectWereWolf){
                    if(!ipdl.role.getHaveInfected()){
                        let doesInfect=ipdl.role.infect(wolfTarget)
                        if(doesInfect){                        
                            playerList[wolftargetIndex].camp=ECamps.WEREWOLF
                            isDead=false
                        }
                    }
                }
            }
        }

        //loup blanc
        console.log("loup blanc")
        if(this.nbNight%2 === 0){
            
            let whiteFind=findPlayerByRole(ERoles.WHITE_WEREWOLF ,playerList)
            if( whiteFind.length > 0){
                let white = whiteFind[0];
                if(white.role instanceof WhiteWereWolf){
                    let wolfList = findPlayerByRole(ERoles.WEREWOLF,playerList)
                    let whiteTarget = white.role.killOtherWereWolf(wolfList,_protected)       
                    if(whiteTarget!=-1){
                        whiteTarget = playerList.findIndex((player) => {player == wolfList[whiteTarget]})
                        playerList[whiteTarget].isAlive = false
                    }          
                }
            }
        }
        
        //witch
        console.log("Witch")
        let witchFind = findPlayerByRole(ERoles.WITCH ,playerList)
        if (witchFind.length > 0){
            let witch = witchFind[0];
            if(witch.role instanceof Witch){
                let witchAction=witch.role.makeAction(playerList,isDead)
                if(witchAction==-1){
                    isDead = false
                }else if(witchAction>0){
                    playerList[witchAction].isAlive=false
                }
            }
        }
        if(isDead)playerList[wolftargetIndex].isAlive=false
        this.nbNight++
    
        console.log("end")
        return playerList
    }
}