// Garde

import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { Player } from "../Player";
import { Roles } from "../Roles";

export class Guard extends Roles {
    lastProtected: Player | null = null;

    constructor() {
        super(ERoles.GUARD, "Guard");
    }

    protectPlayer(player: Player) : boolean {
        if(!this.lastProtected || player.name !== this.lastProtected!.name) {
            this.lastProtected = player;
            return true;
        }
        
        return false;
    }
}