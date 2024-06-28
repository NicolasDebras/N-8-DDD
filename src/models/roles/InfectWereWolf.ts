// Infect Père des Loups

import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { Player } from "../Player";
import { Roles } from "../Roles";

export class InfectWereWolf extends Roles{

    haveInfected : boolean = false;

    constructor() {
        super( ERoles.INFECT_WEREWOLF, "IPDL");
    }

    getHaveInfected() : boolean  {
        return this.haveInfected;
    }

    infect(infect : Player) {
        this.haveInfected = true;
        infect.camp = ECamps.WEREWOLF;
    }
    
}