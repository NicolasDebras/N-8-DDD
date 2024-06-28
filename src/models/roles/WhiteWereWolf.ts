// Loup Garou blanc
import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { chooseAnswer } from "../../tools/tool";
import { Player } from "../Player";
import { Roles } from "../Roles";

export class WhiteWereWolf extends Roles {

    constructor() {
        super(ERoles.WHITE_WEREWOLF, "whi");
    }

    killOtherWereWolf(wolfList: Player[],_protected:Player| null) : number  {
        let target = chooseAnswer(wolfList)
        if(!_protected)return target
        if(wolfList[target]==_protected){
            return -1
        }
        return target
    }

}