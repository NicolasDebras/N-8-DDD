// Cupidon

import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { chooseAnswer } from "../../tools/tool";
import { Player } from "../Player";
import { Roles } from "../Roles";

export class Cupid extends Roles {
    lovers:Player[]|null=null;
    constructor() {
        super(ERoles.CUPID, "Cupidon" );
    }

    makeAction(playerList:Player[]){
        let couplea:number,coupleb:number
        do{
            couplea = chooseAnswer(playerList)
            coupleb = chooseAnswer(playerList)
        }while(couplea == coupleb)
            this.lovers=[playerList[couplea],playerList[coupleb]]
        return [couplea, coupleb]
    }
}