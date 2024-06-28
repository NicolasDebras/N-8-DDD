"use strict";
// Simple Villageois
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleVillager = void 0;
const ERoles_1 = require("../../enums/ERoles");
const Roles_1 = require("../Roles");
class SimpleVillager extends Roles_1.Roles {
    constructor() {
        super(ERoles_1.ERoles.SIMPLE_VILLAGER, "villager");
    }
}
exports.SimpleVillager = SimpleVillager;
//# sourceMappingURL=SimpleVillager.js.map