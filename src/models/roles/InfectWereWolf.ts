// Infect Père des Loups

import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { chooseAnswer } from "../../tools/tool";
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
        let infectAnswer = chooseAnswer([infect.name, "NON"])
        if(infectAnswer==0){
            this.haveInfected = true;
            return true
        }else{
            return false
        }
    }
    
}