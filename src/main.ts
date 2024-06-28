import { initializePlayers } from "./test/utils";
import { NightTurn } from "./use_case/NightTurn";

const players = initializePlayers();
new NightTurn().startNight(players)  