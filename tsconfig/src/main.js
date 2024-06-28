"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../test/utils");
const NightTurn_1 = require("./use_case/NightTurn");
const players = (0, utils_1.initializePlayers)();
new NightTurn_1.NightTurn().startNight(players);
//# sourceMappingURL=main.js.map