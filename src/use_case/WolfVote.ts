import { ECamps } from "../enums/ECamps";
import { Player } from "../models/Player";
import { selectVotePlayer } from "../tools/tool";

export class WolfVote{

    allPlayer: Player[];
    wolfs : Player[] ;

    constructor (allPlayer: Player[]) {
        this.allPlayer = allPlayer;
        this.wolfs = allPlayer.filter((element) => element.camp == ECamps.WEREWOLF )
    }

    startVote() : Player {

        let choicePlayer : Player[] = [];
        let selectedPlayer : Player | null = null;

        // ajoute des Player dans la liste des votes 
        this.wolfs.forEach((player: Player) => {
            choicePlayer.push(player.vote(this.allPlayer))
        });
        
        selectedPlayer = selectVotePlayer(choicePlayer, this.allPlayer)
        
        if (selectedPlayer == null) {
            return this.startVote();
        } 
        return selectedPlayer
    }
    

}