// Infect Père des Loups

import { ECamps } from "../../enums/ECamps";
import { Player } from "../Player";

export class InfectWereWolf extends Player{

    haveInfected : boolean = false;

    constructor(player: Player) {
        super(player.name, player.role, ECamps.VILLAGER);
    }

    getHaveInfected() : boolean  {
        return this.haveInfected;
    }

    infect(infect : Player) {
        this.haveInfected = true;
        infect.camp = ECamps.WEREWOLF;
    }
    
}