// Simple Villageois

import { ECamps } from "../../enums/ECamps";
import { Player } from "../Player";
import { ERoles } from "../../enums/ERoles";
import { Roles } from "../Roles";

export class SimpleVillager extends Roles {
    constructor() {
        super(ERoles.SIMPLE_VILLAGER, "villager");
    }
}