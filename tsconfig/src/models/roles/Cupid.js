"use strict";
// Cupidon
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cupid = void 0;
const ERoles_1 = require("../../enums/ERoles");
const tool_1 = require("../../tools/tool");
const Roles_1 = require("../Roles");
class Cupid extends Roles_1.Roles {
    constructor() {
        super(ERoles_1.ERoles.CUPID, "Cupidon");
        this.lovers = null;
    }
    makeAction(playerList) {
        let couplea, coupleb;
        do {
            couplea = (0, tool_1.chooseAnswer)(playerList);
            coupleb = (0, tool_1.chooseAnswer)(playerList);
        } while (couplea == coupleb);
        this.lovers = [playerList[couplea], playerList[coupleb]];
        return [couplea, coupleb];
    }
}
exports.Cupid = Cupid;
//# sourceMappingURL=Cupid.js.map