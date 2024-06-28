// Chasseur

import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { Player } from "../Player";
import { Roles } from "../Roles";

export class Hunter extends Roles {
    constructor() {
        super(ERoles.HUNTER, "hunter");
    }
}