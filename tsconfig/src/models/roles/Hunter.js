"use strict";
// Chasseur
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hunter = void 0;
const ERoles_1 = require("../../enums/ERoles");
const Roles_1 = require("../Roles");
class Hunter extends Roles_1.Roles {
    constructor() {
        super(ERoles_1.ERoles.HUNTER, "hunter");
    }
}
exports.Hunter = Hunter;
//# sourceMappingURL=Hunter.js.map