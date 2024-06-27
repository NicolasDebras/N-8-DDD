// Simple Villageois

import { ECamps } from "../../enums/ECamps";
import { Player } from "../Player";

export class SimpleVillager extends Player {
    constructor(player: Player) {
        super(player.name, player.role, ECamps.VILLAGER)
    }
}