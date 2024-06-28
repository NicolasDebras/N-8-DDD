"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NightTurn = void 0;
const ECamps_1 = require("../enums/ECamps");
const ERoles_1 = require("../enums/ERoles");
const Witch_1 = require("../models/roles/Witch");
const InfectWereWolf_1 = require("../models/roles/InfectWereWolf");
const Cupid_1 = require("../models/roles/Cupid");
const Guard_1 = require("../models/roles/Guard");
const Seer_1 = require("../models/roles/Seer");
const tool_1 = require("../tools/tool");
const WolfVote_1 = require("./WolfVote");
const WhiteWereWolf_1 = require("../models/roles/WhiteWereWolf");
class NightTurn {
    constructor() {
        this.nbNight = 1;
    }
    startNight(playerList) {
        let res = [];
        //cupid on first turn
        if (this.nbNight === 1) {
            let cupid = (0, tool_1.findPlayerByRole)(ERoles_1.ERoles.CUPID, playerList)[0];
            if (cupid.role instanceof Cupid_1.Cupid) {
                let lovers = cupid.role.makeAction(playerList);
                playerList[lovers[0]].isInLove = true;
                playerList[lovers[1]].isInLove = true;
            }
        }
        //voyante
        this.seerAction(playerList);
        //guard
        let _protected = null;
        _protected = this.guardAction(playerList);
        //Wolf Vote
        let wolfTarget = new WolfVote_1.WolfVote(playerList).startVote();
        let wolftargetIndex = playerList.findIndex((player) => { player == wolfTarget; });
        let isDead;
        if (!_protected) {
            isDead = true;
        }
        else {
            isDead = (wolfTarget == _protected);
        }
        //ipdl
        if (isDead) {
            let ipdlFind = (0, tool_1.findPlayerByRole)(ERoles_1.ERoles.INFECT_WEREWOLF, playerList);
            if (ipdlFind.length === 0) {
                let ipdl = ipdlFind[0];
                if (ipdl.role instanceof InfectWereWolf_1.InfectWereWolf) {
                    if (!ipdl.role.getHaveInfected()) {
                        let doesInfect = ipdl.role.infect(wolfTarget);
                        if (doesInfect) {
                            playerList[wolftargetIndex].camp = ECamps_1.ECamps.WEREWOLF;
                            isDead = false;
                        }
                    }
                }
            }
        }
        //loup blanc
        if (this.nbNight % 2 === 0) {
            let whiteFind = (0, tool_1.findPlayerByRole)(ERoles_1.ERoles.WHITE_WEREWOLF, playerList);
            if (whiteFind.length === 0) {
                let white = whiteFind[0];
                if (white.role instanceof WhiteWereWolf_1.WhiteWereWolf) {
                    let wolfList = (0, tool_1.findPlayerByRole)(ERoles_1.ERoles.WEREWOLF, playerList);
                    let whiteTarget = white.role.killOtherWereWolf(wolfList, _protected);
                    if (whiteTarget != -1) {
                        whiteTarget = playerList.findIndex((player) => { player == wolfList[whiteTarget]; });
                        playerList[whiteTarget].isAlive = false;
                    }
                }
            }
        }
        //witch
        let witchFind = (0, tool_1.findPlayerByRole)(ERoles_1.ERoles.WITCH, playerList);
        if (witchFind.length === 0) {
            let witch = witchFind[0];
            if (witch.role instanceof Witch_1.Witch) {
                let witchAction = witch.role.makeAction(playerList, isDead);
                if (witchAction == -1) {
                    isDead = false;
                }
                else if (witchAction > 0) {
                    playerList[witchAction].isAlive = false;
                }
            }
        }
        if (isDead)
            playerList[wolftargetIndex].isAlive = false;
        this.nbNight++;
        return playerList;
    }
    seerAction(playerList) {
        let seerFind = (0, tool_1.findPlayerByRole)(ERoles_1.ERoles.SEER, playerList);
        if (seerFind.length === 0) {
            let seer = seerFind[0];
            if (seer.role instanceof Seer_1.Seer) {
                console.log("Voyante, choisissez un joueur à voir");
                let targetPlayer = seer.role.selectPlayer(playerList);
                seer.role.getRole(playerList[targetPlayer].role.name);
            }
        }
    }
    guardAction(playerList) {
        let guardFind = (0, tool_1.findPlayerByRole)(ERoles_1.ERoles.GUARD, playerList);
        let targetPlayer = 0;
        if (guardFind.length === 0) {
            let protect = false;
            let guard = guardFind[0];
            if (guard.role instanceof Guard_1.Guard) {
                targetPlayer = guard.role.protectPlayer(playerList);
            }
        }
        return playerList[targetPlayer];
    }
}
exports.NightTurn = NightTurn;
//# sourceMappingURL=NightTurn.js.map