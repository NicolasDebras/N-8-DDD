// Cupidon

import { ECamps } from "../../enums/ECamps";
import { Player } from "../Player";

export class Cupid extends Player {
    constructor(player: Player) {
        super(player.name, player.role, ECamps.VILLAGER);
    }

    defineLovers(idLover1: number, idLover2: number, players: Player[]) : Player[] {
        players[idLover1].isInLove = true;
        players[idLover2].isInLove = true;
        return players;
    }
}