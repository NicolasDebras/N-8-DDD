"use strict";
// Voyante
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seer = void 0;
const ERoles_1 = require("../../enums/ERoles");
const tool_1 = require("../../tools/tool");
const Roles_1 = require("../Roles");
class Seer extends Roles_1.Roles {
    constructor() {
        super(ERoles_1.ERoles.SEER, "seer");
        this.lastSee = null;
    }
    selectPlayer(playerList) {
        let player;
        do {
            player = (0, tool_1.chooseAnswer)(playerList);
        } while (player >= 0 && player < playerList.length);
        return player;
    }
    getRole(role) {
        this.lastSee = role;
        return;
    }
}
exports.Seer = Seer;
//# sourceMappingURL=Seer.js.map