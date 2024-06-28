// Voyante

import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { Player } from "../Player";
import { Roles } from "../Roles";

export class Seer extends Roles {
    constructor() {
        super( ERoles.SEER, "seer");
    }

    seeCardOfPlayer(player: Player) : ERoles {
        return player.role.name;
    }
}