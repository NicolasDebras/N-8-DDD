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
        let res:Player[]=[]
        //cupid on first turn
        if( this.nbNight ===1){
            let cupid = findPlayerByRole(ERoles.CUPID, playerList)[0]
            if (cupid.role instanceof Cupid){
                let lovers=cupid.role.makeAction(playerList)
                playerList[lovers[0]].isInLove=true
                playerList[lovers[1]].isInLove=true
            }
        }

        //voyante
        this.seerAction(playerList);
        
        //guard
        let _protected : Player | null = null;
        _protected = this.guardAction(playerList);

        //Wolf Vote
        let wolfTarget = new WolfVote(playerList).startVote()
        let wolftargetIndex = playerList.findIndex((player)=>{player==wolfTarget})
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
        if(this.nbNight%2 === 0){
            let whiteFind=findPlayerByRole(ERoles.WHITE_WEREWOLF ,playerList)
            if( whiteFind.length === 0){
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
        let witchFind = findPlayerByRole(ERoles.WITCH ,playerList)
        if (witchFind.length === 0){
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
    
        return playerList
    }

    seerAction(playerList:Player[]) : void    {
        let seerFind = findPlayerByRole(ERoles.SEER,playerList)
        if(seerFind.length === 0){
            let seer = seerFind[0]
            if(seer.role instanceof Seer){
                console.log("Voyante, choisissez un joueur à voir");
                let targetPlayer = seer.role.selectPlayer(playerList)
                seer.role.getRole(playerList[targetPlayer].role.name)  
            }
        }
    }

    guardAction(playerList:Player[]  ): Player | null {

        let guardFind = findPlayerByRole(ERoles.GUARD,playerList)
        let targetPlayer = 0;
        if( guardFind.length === 0){
            let protect:boolean = false;
            let guard = guardFind[0]
            if(guard.role instanceof Guard){
                targetPlayer = guard.role.protectPlayer(playerList)
            }
        }
        return playerList[targetPlayer]
    }

    






}