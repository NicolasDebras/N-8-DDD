// Voyante

import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { Player } from "../Player";

export class Seer extends Player {
    constructor(player: Player) {
        super(player.name, player.role, ECamps.VILLAGER);
    }

    seeCardOfPlayer(player: Player) : ERoles {
        return player.role.name;
    }
}