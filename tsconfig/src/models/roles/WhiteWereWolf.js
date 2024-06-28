"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhiteWereWolf = void 0;
const ERoles_1 = require("../../enums/ERoles");
const tool_1 = require("../../tools/tool");
const Roles_1 = require("../Roles");
class WhiteWereWolf extends Roles_1.Roles {
    constructor() {
        super(ERoles_1.ERoles.WHITE_WEREWOLF, "whi");
    }
    killOtherWereWolf(wolfList, _protected) {
        let target = (0, tool_1.chooseAnswer)(wolfList);
        if (!_protected)
            return target;
        if (wolfList[target] == _protected) {
            return -1;
        }
        return target;
    }
}
exports.WhiteWereWolf = WhiteWereWolf;
//# sourceMappingURL=WhiteWereWolf.js.map