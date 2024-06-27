// Garde

import { ECamps } from "../../enums/ECamps";
import { Player } from "../Player";

export class Guard extends Player {
    lastProtected: Player | null = null;

    constructor(player: Player) {
        super(player.name, player.role, ECamps.VILLAGER);
    }

    protectPlayer(player: Player) : boolean {
        if(!this.lastProtected || player.name !== this.lastProtected!.name) {
            this.lastProtected = player;
            return true;
        }
        
        return false;
    }
}