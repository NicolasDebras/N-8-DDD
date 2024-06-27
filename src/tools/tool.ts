import { ERoles } from "../enums/ERoles";
import { Player } from "../models/Player";

export function findPlayerByRole(role: ERoles, playerList:Player[]){
    return playerList.filter(p => p.role.name==role);
}

export function chooseAnswer(listPlayers:string[]|Player[]):number{
    return 0;
}

export function selectVotePlayer(choicePlayer : Player[], allPlayer : Player[]) : Player | null {
    let selectedPlayer : Player | null = null;

    //dico
    const voteCount: { [key: string]: number } = {};
    choicePlayer.forEach((player: Player) => {
        if (voteCount[player.name]) {
            voteCount[player.name]++;
        } else {
            voteCount[player.name] = 1;
        }
    });

    let maxVotes = 0;
    for (const playerName in voteCount) {
        if (voteCount[playerName] > maxVotes) {
            maxVotes = voteCount[playerName];
            selectedPlayer =  allPlayer.find(player => player.name === playerName) || null;
        }
    }
    return selectedPlayer;
}