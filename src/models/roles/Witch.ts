// Sorcière

import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { Player } from "../Player";
import { Roles } from "../Roles";

export class Witch extends Roles {
    constructor() {
        super(ERoles.WITCH,"whitch");
    }

    gotHealthPotion: boolean = true;
    gotDeathPotion: boolean = true;

    useHealthPotion(player: Player) {
        this.gotHealthPotion = false;
    }

    useDeathPotion(player: Player) {
        this.gotDeathPotion = false;
    }

    havePotions() : boolean {
        return this.gotHealthPotion || this.gotDeathPotion
    }

}