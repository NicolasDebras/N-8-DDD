"use strict";
// Infect Père des Loups
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfectWereWolf = void 0;
const ERoles_1 = require("../../enums/ERoles");
const tool_1 = require("../../tools/tool");
const Roles_1 = require("../Roles");
class InfectWereWolf extends Roles_1.Roles {
    constructor() {
        super(ERoles_1.ERoles.INFECT_WEREWOLF, "IPDL");
        this.haveInfected = false;
    }
    getHaveInfected() {
        return this.haveInfected;
    }
    infect(infect) {
        let infectAnswer = (0, tool_1.chooseAnswer)([infect.name, "NON"]);
        if (infectAnswer == 0) {
            this.haveInfected = true;
            return true;
        }
        else {
            return false;
        }
    }
}
exports.InfectWereWolf = InfectWereWolf;
//# sourceMappingURL=InfectWereWolf.js.map