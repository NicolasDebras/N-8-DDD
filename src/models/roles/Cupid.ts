// Cupidon

import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { Player } from "../Player";
import { Roles } from "../Roles";

export class Cupid extends Roles {
    constructor() {
        super(ERoles.CUPID, "Cupidon" );
    }

    defineLovers(idLover1: number, idLover2: number, players: Player[]) : Player[] {
        players[idLover1].isInLove = true;
        players[idLover2].isInLove = true;
        return players;
    }
}