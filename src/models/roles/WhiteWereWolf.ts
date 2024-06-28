// Loup Garou blanc
import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { Player } from "../Player";
import { Roles } from "../Roles";

export class WhiteWereWolf extends Roles {

    constructor() {
        super(ERoles.WHITE_WEREWOLF, "whi");
    }

    killOtherWereWolf(player: Player) : Player | null {
        if(player.role.name === ERoles.WEREWOLF) {
            return player;
        }

        return null;
    }

}