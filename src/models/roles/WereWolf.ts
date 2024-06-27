// Loup garou

import { ECamps } from "../../enums/ECamps";
import { Player } from "../Player";

export class WereWolf extends Player {

    constructor(player: Player) {
        super(player.name, player.role, ECamps.WEREWOLF);
    }

}