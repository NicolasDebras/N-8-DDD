// Loup garou

import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { Player } from "../Player";
import { Roles } from "../Roles";

export class WereWolf extends Roles {

    constructor() {
        super( ERoles.WEREWOLF, "werewolf");
    }

}