// Sorcière

import { ECamps } from "../../enums/ECamps";
import { Player } from "../Player";

export class Witch extends Player {
    constructor(player: Player) {
        super(player.name, player.role, ECamps.VILLAGER);
    }

    gotHealthPotion: boolean = true;
    gotDeathPotion: boolean = true;

    useHealthPotion(player: Player) {
        player.isAlive = true;
        this.gotHealthPotion = false;
    }

    useDeathPotion(player: Player) {
        player.isAlive = false;
        this.gotDeathPotion = false;
    }

    havePotions() : boolean {
        return this.gotHealthPotion && this.gotDeathPotion
    }

}