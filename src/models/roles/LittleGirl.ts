// Petite fille

import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { Player } from "../Player";
import { Roles } from "../Roles";

export class LittleGirl extends Roles {
    constructor() {
        super(ERoles.LITTLE_GIRL, "little girl");
    }
}