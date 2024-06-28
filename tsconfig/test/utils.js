"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializePlayers = initializePlayers;
const Player_1 = require("../src/models/Player");
const Cupid_1 = require("../src/models/roles/Cupid");
const Guard_1 = require("../src/models/roles/Guard");
const ECamps_1 = require("../src/enums/ECamps");
const Hunter_1 = require("../src/models/roles/Hunter");
const Seer_1 = require("../src/models/roles/Seer");
const LittleGirl_1 = require("../src/models/roles/LittleGirl");
const SimpleVillager_1 = require("../src/models/roles/SimpleVillager");
const Witch_1 = require("../src/models/roles/Witch");
const InfectWereWolf_1 = require("../src/models/roles/InfectWereWolf");
const WhiteWereWolf_1 = require("../src/models/roles/WhiteWereWolf");
function initializePlayers() {
    return [new Player_1.Player('Alice', new Cupid_1.Cupid(), ECamps_1.ECamps.VILLAGER),
        new Player_1.Player('Bob', new Hunter_1.Hunter(), ECamps_1.ECamps.VILLAGER),
        new Player_1.Player('Charlie', new Guard_1.Guard(), ECamps_1.ECamps.VILLAGER),
        new Player_1.Player('David', new Seer_1.Seer(), ECamps_1.ECamps.VILLAGER),
        new Player_1.Player('Eve', new InfectWereWolf_1.InfectWereWolf(), ECamps_1.ECamps.WEREWOLF),
        new Player_1.Player('Frank', new WhiteWereWolf_1.WhiteWereWolf(), ECamps_1.ECamps.SOLO),
        new Player_1.Player('Grace', new Witch_1.Witch(), ECamps_1.ECamps.VILLAGER),
        new Player_1.Player('Hugo', new SimpleVillager_1.SimpleVillager(), ECamps_1.ECamps.VILLAGER),
        new Player_1.Player('Bastien', new LittleGirl_1.LittleGirl(), ECamps_1.ECamps.VILLAGER),
        new Player_1.Player('Ines', new SimpleVillager_1.SimpleVillager(), ECamps_1.ECamps.VILLAGER)
    ];
}
//# sourceMappingURL=utils.js.map