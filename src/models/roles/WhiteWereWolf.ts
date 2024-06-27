// Loup Garou blanc
import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { Player } from "../Player";

export class WhiteWereWolf extends Player {

    constructor(player: Player) {
        super(player.name, player.role, ECamps.SOLO);
    }

    killOtherWereWolf(player: Player) : Player | null {
        if(player.role.name === ERoles.WEREWOLF) {
            return player;
        }

        return null;
    }

}