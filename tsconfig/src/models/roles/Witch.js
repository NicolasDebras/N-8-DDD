"use strict";
// Sorcière
Object.defineProperty(exports, "__esModule", { value: true });
exports.Witch = void 0;
const ERoles_1 = require("../../enums/ERoles");
const tool_1 = require("../../tools/tool");
const Roles_1 = require("../Roles");
class Witch extends Roles_1.Roles {
    constructor() {
        super(ERoles_1.ERoles.WITCH, "whitch");
        this.gotHealthPotion = true;
        this.gotDeathPotion = true;
    }
    useHealthPotion() {
        this.gotHealthPotion = false;
    }
    useDeathPotion() {
        this.gotDeathPotion = false;
    }
    havePotions() {
        return this.gotHealthPotion || this.gotDeathPotion;
    }
    makeAction(playerList, isDead) {
        let choice = [];
        if (isDead && this.gotHealthPotion)
            choice.push("vie");
        if (this.gotDeathPotion)
            choice.push("mort");
        if (choice.length > 0) {
            choice.push("annuler");
            let potionToUse = (0, tool_1.chooseAnswer)(choice);
            // 0 -> Potion de vie
            // 1 -> Potion de mort
            if (potionToUse === 0) {
                this.useHealthPotion();
                return -1;
            }
            else if (potionToUse === 1) {
                let list = playerList.filter((player) => player.role.name !== ERoles_1.ERoles.WITCH);
                let choice = (0, tool_1.chooseAnswer)(list);
                this.useDeathPotion();
                return choice;
            }
        }
        return -2;
    }
}
exports.Witch = Witch;
//# sourceMappingURL=Witch.js.map