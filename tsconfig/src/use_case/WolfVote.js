"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WolfVote = void 0;
const ECamps_1 = require("../enums/ECamps");
const tool_1 = require("../tools/tool");
class WolfVote {
    constructor(allPlayer) {
        this.allPlayer = allPlayer;
        this.wolfs = allPlayer.filter((element) => element.camp == ECamps_1.ECamps.WEREWOLF);
    }
    startVote() {
        let choicePlayer = [];
        let selectedPlayer = null;
        // ajoute des Player dans la liste des votes 
        this.wolfs.forEach((player) => {
            choicePlayer.push(player.vote(this.allPlayer));
        });
        selectedPlayer = (0, tool_1.selectVotePlayer)(choicePlayer, this.allPlayer);
        if (selectedPlayer == null) {
            return this.startVote();
        }
        return selectedPlayer;
    }
}
exports.WolfVote = WolfVote;
//# sourceMappingURL=WolfVote.js.map