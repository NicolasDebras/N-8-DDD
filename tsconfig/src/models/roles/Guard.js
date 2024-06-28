"use strict";
// Garde
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guard = void 0;
const ERoles_1 = require("../../enums/ERoles");
const tool_1 = require("../../tools/tool");
const Roles_1 = require("../Roles");
class Guard extends Roles_1.Roles {
    constructor() {
        super(ERoles_1.ERoles.GUARD, "Guard");
        this.lastProtected = null;
    }
    protectPlayer(playerList) {
        let protect = false;
        let _protected = null;
        let res = 0;
        do {
            res = (0, tool_1.chooseAnswer)(playerList);
            _protected = playerList[res];
            protect = this.CheckIfAlreadyPlayer(_protected);
        } while (!protect);
        this.lastProtected = _protected;
        return res;
    }
    CheckIfAlreadyPlayer(player) {
        if (!this.lastProtected || player.name !== this.lastProtected.name) {
            this.lastProtected = player;
            return true;
        }
        return false;
    }
}
exports.Guard = Guard;
//# sourceMappingURL=Guard.js.map