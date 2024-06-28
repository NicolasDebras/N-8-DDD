"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPlayerByRole = findPlayerByRole;
exports.chooseAnswer = chooseAnswer;
exports.selectVotePlayer = selectVotePlayer;
function findPlayerByRole(role, playerList) {
    return playerList.filter(p => p.role.name == role);
}
function chooseAnswer(listPlayers) {
    return 0;
}
function selectVotePlayer(choicePlayer, allPlayer) {
    let selectedPlayer = null;
    //dico
    const voteCount = {};
    choicePlayer.forEach((player) => {
        if (voteCount[player.name]) {
            voteCount[player.name]++;
        }
        else {
            voteCount[player.name] = 1;
        }
    });
    let maxVotes = 0;
    for (const playerName in voteCount) {
        if (voteCount[playerName] > maxVotes) {
            maxVotes = voteCount[playerName];
            selectedPlayer = allPlayer.find(player => player.name === playerName) || null;
        }
    }
    return selectedPlayer;
}
//# sourceMappingURL=tool.js.map